"use client";
import { slideIn } from "@/app/utils/motion";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { SectionWrapper } from "./HigherOrderComponents";
import { EarthCanvas } from "./canvas";

const Contact = () => {
	const formRef = useRef<HTMLFormElement>(null);

	const [form, setForm] = useState({
		name: "",
		email: "",
		message: "",
	});

	const [loading, setLoading] = useState(false);

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		const { name, value } = e.target;
		setForm({ ...form, [name]: value });
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		
		// Validasi form
		if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
			alert("Please fill in all fields");
			return;
		}

		setLoading(true);
		
		try {
			// Inisialisasi EmailJS dengan public key
			emailjs.init("yYsYMOOZhNTPNOfnn");
			
			// Buat timestamp
			const now = new Date();
			const timestamp = now.toLocaleString('id-ID', {
				timeZone: 'Asia/Jakarta',
				year: 'numeric',
				month: 'long',
				day: 'numeric',
				hour: '2-digit',
				minute: '2-digit',
				second: '2-digit'
			});
			
			const result = await emailjs.send(
				"service_vunb27c",
				"template_2schs7s",
				{
					from_name: form.name,
					to_name: "Mikail",
					from_email: form.email,
					message: form.message,
					timestamp: timestamp, // Tambahkan timestamp
				},
				"yYsYMOOZhNTPNOfnn"
			);

			console.log("Email sent successfully:", result);
			setLoading(false);
			alert(
				"Thanks for reaching me out. I will respond to you as soon as possible.",
			);
			setForm({
				name: "",
				email: "",
				message: "",
			});
		} catch (error) {
			console.error("EmailJS Error:", error);
			setLoading(false);
			
			if (error instanceof Error) {
				alert(`Error: ${error.message}`);
			} else { 
				alert("Sorry!! Something went wrong!! Please try again later.");
			}
		}
	};

	return (
		<div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
			<motion.div
				variants={slideIn("left", "tween", 0.2, 1)}
				className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
			>
				<p className="heroSubText">Get in Touch</p>
				<h3 className="heroHeadText">Contact.</h3>
				<form
					ref={formRef}
					onSubmit={handleSubmit}
					className="mt-12 flex flex-col gap-8"
				>
					<label className="flex flex-col">
						<span className="text-white font-medium mb-4">Your Name.</span>
						<input
							type="text"
							name="name"
							value={form.name}
							onChange={handleChange}
							placeholder="What's your name?"
							className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
							required
						/>
					</label>
					<label className="flex flex-col">
						<span className="text-white font-medium mb-4">Your Email.</span>
						<input
							type="email"
							name="email"
							value={form.email}
							onChange={handleChange}
							placeholder="What's your email?"
							className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
							required
						/>
					</label>
					<label className="flex flex-col">
						<span className="text-white font-medium mb-4">Your Message.</span>
						<textarea
							rows={7}
							name="message"
							value={form.message}
							onChange={handleChange}
							placeholder="What do you want to say?"
							className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
							required
						/>
					</label>
					<button
						type="submit"
						disabled={loading}
						className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl disabled:opacity-50"
					>
						{loading ? "Sending..." : "Send"}
					</button>
				</form>
			</motion.div>
			<motion.div
				variants={slideIn("right", "tween", 0.2, 1)}
				className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
			>
				<EarthCanvas />
			</motion.div>
		</div>
	);
};

export default SectionWrapper(Contact, "contact");

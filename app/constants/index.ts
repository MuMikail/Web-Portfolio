export const navLinks = [
	{
		id: "about",
		title: "About",
	},
	{
		id: "work",
		title: "Work",
	},
	{
		id: "social",
		title: "Social",
	},
	{
		id: "contact",
		title: "Contact",
	},
];

const services = [
	{
		title: "UI/UX Designer",
		icon: "/backend.webp",
	},
	{
		title: "Full Stack Web Developer",
		icon: "/web.webp",
	},
	{
		title: "App Developer",
		icon: "/mobile.webp",
	},
	{
		title: "Software Engineer",
		icon: "/creator.webp",
	},
];

const technologies = [
	{
		name: "HTML 5",
		icon: "/tech/html.webp",
	},
	{
		name: "CSS 3",
		icon: "/tech/css.webp",
	},
	{
		name: "JavaScript",
		icon: "/tech/javascript.webp",
	},
	{
		name: "TypeScript",
		icon: "/tech/typescript.webp",
	},
	{
		name: "React JS",
		icon: "/tech/reactjs.webp",
	},
	{
		name: "Next.JS",
		icon: "/tech/nextjs.svg",
	},
	{
		name: "Redux Toolkit",
		icon: "/tech/redux.webp",
	},
	{
		name: "Tailwind CSS",
		icon: "/tech/tailwind.webp",
	},
	{
		name: "Three JS",
		icon: "/tech/threejs.webp",
	},
	{
		name: "git",
		icon: "/tech/git.webp",
	},
	{
		name: "figma",
		icon: "/tech/figma.webp",
	},
	{
		name: "wordpress",
		icon: "/tech/wordpress.webp",
	},
	{
		name: "bootstrap",
		icon: "/tech/bootstrap.webp",
	},
];

const experiences = [
	// {
	// 	title: "Wordpress Developer & UI/UX Designer",
	// 	company_name: "A.V.M Auto",
	// 	icon: "/company/avm.webp",
	// 	iconBg: "#383E56",
	// 	date: "2020 -  2023",
	// 	points: [
	// 		"Self-Taught Expertise: Gained proficiency in WordPress and UI/UX design through independent learning.",
	// 		"Collaborative Design: Worked closely with stakeholders to gather feedback and iterate on the portfolio website's interactivity.",
	// 		"Successful Website Development: Designed and developed a visually appealing and user-friendly portfolio website using WordPress.",
	// 		"Positive Business Impact: Contributed to +54.25% sales and overall business growth through the improved website."
	// 	],
	// },
	// {
	// 	title: "Next.JS Developer",
	// 	company_name: "Sparkbright Engineering",
	// 	icon: "/company/sparkbright.webp",
	// 	iconBg: "#E6DEDD",
	// 	date: "2023 - 2024",
	// 	points: [
	// 		"Self-Taught Expertise: Gained proficiency in React.JS and Next.JS through independent learning.",
	// 		"Successful Website Development: Designed and developed a visually appealing and user-friendly portfolio website using Next.JS.",
	// 		"Collaborative Design: Worked closely with stakeholders to gather feedback and iterate on the portfolio website's interactivity."
	// 	],
	// },
{
    title: "Software Engineering Student",
    company_name: "SMK PESAT ITXPRO BOGOR",
    icon: "/company/logo-smk-pesat.png", // Ganti dengan logo sekolah Anda
    iconBg: "#E6DEDD",
    date: "2023 - Present", // Sesuaikan dengan tahun masuk dan lulus Anda
    points: [
        "Mastering web development from frontend to backend, building full-stack applications.",
        "Learning UI/UX design principles and creating user-centered design solutions.",
        "Developing mobile applications using modern frameworks and best practices.",
        "Building dynamic websites and content management systems using WordPress.",
        "Gaining expertise in both frontend technologies (React, JavaScript) and backend development (Node.js, databases).",
    ],
}

];

const testimonials = [
{
    id: 1,
    testimonial:
        "TikTok is a popular social media platform where I create and share gaming content, showcasing gameplay highlights.",
    name: "minnzyaj", // Ganti dengan nama Anda
    image: "/socialmedia/tik-tok.svg",
    link: "https://www.tiktok.com/@minnzyaj", // Ganti dengan username TikTok Anda
},
{
    id: 2,
    testimonial:
        "LinkedIn is a business and employment-focused social media platform that works through websites and mobile apps.",
    name: "Mikail", // Ganti dengan nama Anda
    image: "/socialmedia/linkedin.svg",
    link: "https://www.linkedin.com/in/yourusername/", // Ganti dengan LinkedIn Anda
},
{
    id: 3,
    testimonial:
        "Instagram is a photo and video sharing social media platform where I plan to share my creative projects and daily activities.",
    name: "qimik26", // Ganti dengan nama Anda
    image: "/socialmedia/ig.svg",
    link: "https://www.instagram.com/qimik26/", // Ganti dengan Instagram Anda
},
// {
//     id: 4,
//     testimonial:
//         "YouTube is a video sharing platform where I will be uploading programming tutorials, project walkthroughs, and tech-related content.",
//     name: "Your Name", // Ganti dengan nama Anda
//     image: "/socialmedia/youtube.svg",
//     link: "https://www.youtube.com/@yourusername", // Ganti dengan YouTube Anda
// },
{
    id: 5,
    testimonial:
        "Also do check out my Github Profile where I have shared all my codes from basic to advanced.",
    name: "MuMikail",
    image: "/tech/github.webp",
    link: "https://github.com/MuMikail", // Ganti dengan GitHub Anda
},

];


const projects :{
	name: string;
	description: string;
	tags: {
		name: string;
		color: string;
	}[];
	image: string;
	source_code_link?: string;
	deploy_link: string;
	platform: "Netlify" | "Vercel" | "Figma" | "Wordpress" | "Web"
}[] = [
	{
		name: "FAMK Web",
		description:
			"Designed and developed a responsive and dynamic website with my team using HTML, CSS, PHP, and Laravel.",
		tags: [
			{
				name: "HTML",
				color: "orange-text-gradient",
			},
			{
				name: "CSS",
				color: "purple-text-gradient",
			},
			{
				name: "JavaScript",
				color: "yellow-text-gradient",
			},
			{
				name: "PHP",
				color: "blue-text-gradient",
			},
		],
		image: "/projectimg/famk.webp",
		platform: "Vercel",
		source_code_link: "https://github.com/MuMikail/FAMKWEB",
		deploy_link: "https://famk-web.vercel.app/",
	},
	{
		name: "ShoePalace Web",
		description:
			"Designed and developed a visually appealing and user-friendly ShoePalace website using HTML, CSS, JavaScript.",
		tags: [
			{
				name: "HTML",
				color: "orange-text-gradient",
			},
			{
				name: "CSS",
				color: "purple-text-gradient",
			},
			{
				name: "JavaScript",
				color: "yellow-text-gradient",
			},
		],
		image: "/projectimg/Shoepalace.png",
		source_code_link: "https://github.com/MuMikail/ShoePalace-Web",
		platform: "Vercel",
		deploy_link: "https://web-sepatu-steel.vercel.app/",
	},
	{
		name: "Web Portfolio V1",
		description:
			"Designed and developed a visually appealing and user-friendly portfolio V1 website using HTML, CSS, JavaScript.",
		tags: [
			{
				name: "HTML",
				color: "orange-text-gradient",
			},
			{
				name: "CSS",
				color: "purple-text-gradient",
			},
			{
				name: "JavaScript",
				color: "yellow-text-gradient",
			},
		],
		image: "/projectimg/PortfoliomV1.png",
		source_code_link: "https://github.com/MuMikail/WebPortfolioM-V1",
		platform: "Vercel",
		deploy_link: "https://web-portfolio-m-v1.vercel.app/",
	},
	{
		name: "Soundwave Web",
		description:
			"Designed and developed a visually appealing and user-friendly portfolio V1 website using HTML, CSS, JavaScript.",
		tags: [
			{
				name: "Typescript",
				color: "blue-text-gradient",
			},
			{
				name: "CSS",
				color: "purple-text-gradient",
			},
			{
				name: "JavaScript",
				color: "yellow-text-gradient",
			},
		],
		image: "/projectimg/Soundwave.png",
		source_code_link: "https://github.com/MuMikail/SoundWave-Web",
		platform: "Vercel",
		deploy_link: "https://sound-wave-web.vercel.app/",
	},
	// {
	// 	name: "HooBank",
	// 	description:
	// 		"A responsive Bank HomePage showcasing different features such as various payment gateways integration, easy money transfer, advanced security, etc. It has a beautiful interface made using Tailwind CSS and React",
	// 	tags: [
	// 		{
	// 			name: "next",
	// 			color: "green-text-gradient",
	// 		},
	// 		{
	// 			name: "tailwind",
	// 			color: "blue-text-gradient",
	// 		},
	// 	],
	// 	image: "/projectimg/hoobank.webp",
	// 	source_code_link: "https://github.com/omunite215/hoobank",
	// 	platform: "Vercel",
	// 	deploy_link: "https://hoobankbyom.netlify.app/",
	// },
	// {
	// 	name: "MERN Dashboard",
	// 	description:
	// 		" Designed and developed a visually appealing and user-friendly Data Analytics Dashboard using MERN",
	// 	tags: [
	// 		{
	// 			name: "react",
	// 			color: "blue-text-gradient",
	// 		},
	// 		{
	// 			name: "materialui",
	// 			color: "orange-text-gradient",
	// 		},
	// 		{
	// 			name: "MongoDB",
	// 			color: "green-text-gradient",
	// 		},
	// 		{
	// 			name: "Express",
	// 			color: "pink-text-gradient",
	// 		},
	// 	],
	// 	image: "/projectimg/mern.png",
	// 	source_code_link: "https://github.com/omunite215/Project_MERN-Dashboard",
	// 	platform: "Web",
	// 	deploy_link: "https://admin-frontend-r705.onrender.com/",
	// },
	// {
	// 	name: "Metaverse Web 3.0",
	// 	description:
	// 		"A Modern UI/UX Landing Page using Framer Motion and TailwindCSS with a feel and looks of Web 3.0",
	// 	tags: [
	// 		{
	// 			name: "react",
	// 			color: "blue-text-gradient",
	// 		},
	// 		{
	// 			name: "tailwind",
	// 			color: "green-text-gradient",
	// 		},
	// 		{
	// 			name: "framer-motion",
	// 			color: "orange-text-gradient",
	// 		},
	// 	],
	// 	image: "/projectimg/metaverse.png",
	// 	source_code_link: "https://github.com/omunite215/Project_Metaverse",
	// 	platform: "Vercel",
	// 	deploy_link: "https://project-metaverse-beta.vercel.app/",
	// },
	// {
	// 	name: "Issue Tracker",
	// 	description:
	// 		"A Next.JS Full Stack Issue Tracker made using Next.Js, ShadCN UI, Prisma, mySQL with latest features like Next.JS Server Components, and Serverless features.",
	// 	tags: [
	// 		{
	// 			name: "next",
	// 			color: "blue-text-gradient",
	// 		},
	// 		{
	// 			name: "tailwind",
	// 			color: "green-text-gradient",
	// 		},
	// 		{
	// 			name: "shadCN",
	// 			color: "orange-text-gradient",
	// 		},
	// 		{
	// 			name: "mySQL",
	// 			color: "green-text-gradient",
	// 		},
	// 	],
	// 	image: "/projectimg/issuetracker.png",
	// 	source_code_link: "https://github.com/omunite215/Project_Issue-Tracker",
	// 	platform: "Vercel",
	// 	deploy_link: "https://project-issue-tracker.vercel.app/",
	// },
];

export { services, technologies, experiences, testimonials, projects };

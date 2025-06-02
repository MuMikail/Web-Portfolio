"use client";
import CanvasLoader from "@/app/components/Loader";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useState } from "react";

const Computers = ({ isMobile }: { isMobile: boolean }) => {
	const computer = useGLTF("/desktop_pc/scene.gltf");
	return (
		<mesh>
			{/* Ambient light untuk pencahayaan keseluruhan */}
			<ambientLight intensity={0.3} />
			
			{/* Hemisphere light dengan intensitas lebih tinggi */}
			<hemisphereLight intensity={0.35} groundColor="black" />
			
			{/* Point light dengan intensitas lebih tinggi */}
			<pointLight intensity={2} position={[10, 10, 10]} />
			
			{/* Spot light utama dengan intensitas lebih tinggi */}
			<spotLight
				position={[-20, 50, 10]}
				angle={0.12}
				penumbra={1}
				intensity={2}
				castShadow
				shadow-mapSize={1024}
			/>
			
			{/* Tambahan spot light dari sisi lain */}
			<spotLight
				position={[20, 20, 10]}
				angle={0.15}
				penumbra={0.8}
				intensity={1.5}
				color="#ffffff"
			/>
			
			{/* Directional light untuk pencahayaan merata */}
			<directionalLight
				position={[0, 10, 5]}
				intensity={0.8}
				color="#ffffff"
			/>
			
			<primitive
				object={computer.scene}
				scale={isMobile ? 0.7 : 0.75}
				position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
				rotation={[-0.01, -0.2, -0.1]}
			/>
		</mesh>
	);
};

const ComputersCanvas = () => {
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const mediaQuery = window.matchMedia("(max-width: 500px)");
		setIsMobile(mediaQuery.matches);
		const handleMediaQueryChange = (event: MediaQueryListEvent) => {
			setIsMobile(event.matches);
		};
		mediaQuery.addEventListener("change", handleMediaQueryChange);

		return () => {
			mediaQuery.removeEventListener("change", handleMediaQueryChange);
		};
	}, []);

	return (
		<Canvas
			frameloop="demand"
			shadows
			camera={{ position: [20, 3, 5], fov: 25 }}
			gl={{ preserveDrawingBuffer: true }}
		>
			<Suspense fallback={<CanvasLoader />}>
				<OrbitControls
					enableZoom={false}
					maxPolarAngle={Math.PI / 2}
					minPolarAngle={Math.PI / 2}
				/>
				<Computers isMobile={isMobile} />
			</Suspense>
			<Preload all />
		</Canvas>
	);
};

export default ComputersCanvas;

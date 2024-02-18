import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const PhoneModel = () => {
    const canvasContainerRef = useRef<HTMLDivElement>(null);
    const scene = useRef<THREE.Scene>(new THREE.Scene());
    const renderer = useRef<THREE.WebGLRenderer>(new THREE.WebGLRenderer({ antialias: false, alpha: true }));
    const rectangle = useRef<THREE.Mesh>();
    const angle = useRef<number>(0);

    useEffect(() => {
        if (!canvasContainerRef.current) return;

        const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 1000); // Adjust the aspect ratio to 1
        camera.position.set(0, 0, 2);
        camera.lookAt(0, 0, 0);

        // Set the renderer size to a smaller fixed size
        const canvasWidth = 400;
        const canvasHeight = 600;
        renderer.current.setSize(canvasWidth, canvasHeight);

        // Set the renderer background to transparent
        renderer.current.setClearColor(0xffffff, 0); // Set clear color to black with 0 opacity

        // Create a rectangle geometry representing a smartphone
        const width = 0.6; // Width of the smartphone in meters
        const height = 1.2; // Height of the smartphone in meters
        const depth = 0.03; // Depth of the smartphone in meters
        const geometry = new THREE.BoxGeometry(width, height, depth);
        const material = new THREE.MeshBasicMaterial({
            map: new THREE.TextureLoader().load('./src/assets/img/app-interface.png'),
            side: THREE.DoubleSide
        });
        rectangle.current = new THREE.Mesh(geometry, material);
        scene.current.add(rectangle.current);

        // Add directional light to illuminate the scene
        const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
        directionalLight.position.set(0, 0, 1);
        scene.current.add(directionalLight);

        if (canvasContainerRef.current) {
            while (canvasContainerRef.current.firstChild) {
                canvasContainerRef.current.removeChild(canvasContainerRef.current.firstChild);
            }
        }

        // Append renderer to the canvas container element
        if (canvasContainerRef.current) {
            canvasContainerRef.current.appendChild(renderer.current.domElement);
        }

        // Render loop
        const animate = () => {
            requestAnimationFrame(animate);

            // Rotate the phone model
            if (rectangle.current) {
                rectangle.current.rotation.y = angle.current;
            }

            renderer.current.render(scene.current, camera);
        };

        animate();

        // Scroll event listener
        const handleScroll = () => {
            const scrollY = window.scrollY;
            angle.current = -Math.PI / 4 + Math.PI / 4 * (scrollY / window.innerHeight); // Adjust the factor to control the rotation speed
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return <div ref={canvasContainerRef} style={{ width: '400px', height: '600px' }} />;
};

export default PhoneModel;

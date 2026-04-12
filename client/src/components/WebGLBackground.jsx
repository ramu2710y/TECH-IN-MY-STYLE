import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const WebGLBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    console.log('WebGLBackground mounting...');
    
    if (!canvasRef.current) {
      console.error('Canvas ref is null');
      return;
    }
    
    if (!window.WebGLRenderingContext) {
      console.error('WebGL not supported');
      return;
    }

    console.log('Initializing Three.js scene...');
    
    const canvas = canvasRef.current;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      alpha: true,
      antialias: true
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);

    // Create particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 1500;
    const posArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 5;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

    // Get particle color based on theme
    const getParticleColor = () => {
      const isDarkTheme = document.documentElement.getAttribute('data-theme') === 'dark';
      return isDarkTheme ? 0xb388ff : 0x2196F3;
    };

    let particlesMaterial = new THREE.PointsMaterial({
      size: 0.02,
      color: getParticleColor(),
      transparent: true,
      opacity: 0.8
    });

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    camera.position.z = 2;
    
    console.log('Particles created:', particlesCount, 'Scene children:', scene.children.length);

    // Mouse interaction variables
    let mouseX = 0;
    let mouseY = 0;
    let targetRotationX = 0;
    let targetRotationY = 0;
    let currentRotationX = 0;
    let currentRotationY = 0;
    let isMoving = false;
    let moveTimeout;

    // Mouse move handler
    const handleMouseMove = (event) => {
      mouseX = (event.clientX / window.innerWidth - 0.5) * 0.05;
      mouseY = (event.clientY / window.innerHeight - 0.5) * 0.05;

      targetRotationX = mouseY;
      targetRotationY = mouseX;

      isMoving = true;

      clearTimeout(moveTimeout);

      moveTimeout = setTimeout(() => {
        isMoving = false;
      }, 1000);
    };

    document.addEventListener('mousemove', handleMouseMove);

    // Theme change observer
    const updateParticleColor = () => {
      const newColor = getParticleColor();
      particlesMaterial.color.setHex(newColor);
    };

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'data-theme') {
          updateParticleColor();
        }
      });
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme']
    });

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Slow constant rotation
      particlesMesh.rotation.x += 0.0002;
      particlesMesh.rotation.y += 0.0002;

      // Mouse interaction
      if (isMoving) {
        currentRotationX += (targetRotationX - currentRotationX) * 0.1;
        currentRotationY += (targetRotationY - currentRotationY) * 0.1;

        particlesMesh.rotation.x += currentRotationX;
        particlesMesh.rotation.y += currentRotationY;
      } else {
        currentRotationX *= 0.95;
        currentRotationY *= 0.95;

        particlesMesh.rotation.x += currentRotationX;
        particlesMesh.rotation.y += currentRotationY;
      }

      renderer.render(scene, camera);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      observer.disconnect();
      
      // Properly dispose Three.js resources
      if (particlesMesh) {
        scene.remove(particlesMesh);
      }
      if (particlesGeometry) {
        particlesGeometry.dispose();
      }
      if (particlesMaterial) {
        particlesMaterial.dispose();
      }
      if (renderer) {
        renderer.dispose();
        // Don't try to remove the canvas - React handles it
      }
    };
  }, []);

  return (
    <>
      {/* Background color layer */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'var(--bg)',
          zIndex: -2,
        }}
      />
      {/* WebGL Canvas */}
      <canvas
        ref={canvasRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
          pointerEvents: 'none',
          display: 'block'
        }}
      />
    </>
  );
};

export default WebGLBackground;

'use client';

import { memo, useRef, useState, useEffect, useCallback, lazy, Suspense } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Lazy load Framer Motion components pesados
const AnimatePresence = lazy(() => import('framer-motion').then(mod => ({ default: mod.AnimatePresence })));

// Optimizar imágenes pre-cargando dimensiones
const SLIDE_IMAGES = [
  { src: '/images/sliders/1.webp', width: 1920, height: 1080 },
  { src: '/images/sliders/2.webp', width: 1920, height: 1080 },
  { src: '/images/sliders/3.webp', width: 1920, height: 1080 },
  { src: '/images/sliders/4.webp', width: 1920, height: 1080 },
];

// Componente Loading para imágenes
const ImageSkeleton = () => (
  <div className="absolute inset-0 bg-gradient-to-br from-[#001a33] to-[#003366] animate-pulse" />
);

const Hero = memo(function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const targetRef = useRef<HTMLDivElement>(null);
  
  // Optimizar scroll listeners
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"]
  });

  // Memoizar transformaciones
  const contentOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const contentScale = useTransform(scrollYProgress, [0, 0.4], [1, 0.9]);

  const nextSlide = useCallback(() => {
    setCurrentIndex(prev => (prev + 1) % SLIDE_IMAGES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex(prev => (prev - 1 + SLIDE_IMAGES.length) % SLIDE_IMAGES.length);
  }, []);

  // Optimizar intervalo
  useEffect(() => {
    if (!isVisible) return;
    
    const timer = setInterval(nextSlide, 8000);
    return () => clearInterval(timer);
  }, [nextSlide, isVisible]);

  // Intersection Observer para lazy loading
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    
    if (targetRef.current) {
      observer.observe(targetRef.current);
    }
    
    return () => observer.disconnect();
  }, []);

  // Pre-cargar imágenes
  useEffect(() => {
    const preloadImages = async () => {
      const promises = SLIDE_IMAGES.map(img => {
        return new Promise((resolve, reject) => {
          const image = new window.Image();
          image.src = img.src;
          image.onload = resolve;
          image.onerror = reject;
        });
      });
      
      await Promise.all(promises);
      setImagesLoaded(true);
    };
    
    preloadImages();
  }, []);

  return (
    <section 
      ref={targetRef}
      className="relative min-h-screen lg:min-h-[110vh] flex items-center justify-center overflow-hidden bg-[#001a33] pt-24 pb-12 lg:pt-0 lg:pb-20"
    >
      {/* 1. SLIDER DE FONDO OPTIMIZADO */}
      <div className="absolute inset-0 z-0">
        {!imagesLoaded ? (
          <ImageSkeleton />
        ) : (
          <Suspense fallback={<ImageSkeleton />}>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.7 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.2 }}
                className="absolute inset-0"
              >
                <Image
                  src={SLIDE_IMAGES[currentIndex].src}
                  alt={`Fondo escuela de fútbol ${currentIndex + 1}`}
                  width={SLIDE_IMAGES[currentIndex].width}
                  height={SLIDE_IMAGES[currentIndex].height}
                  priority={currentIndex === 0}
                  loading={currentIndex === 0 ? 'eager' : 'lazy'}
                  quality={currentIndex === 0 ? 75 : 50}
                  
                  className="object-cover"
                />
              </motion.div>
            </AnimatePresence>
          </Suspense>
        )}
        
        {/* Capas de color con opacity optimizada */}
        <div 
          className="absolute inset-0 bg-gradient-to-b from-[#003366]/70 via-[#003366]/30 to-[#003366]" 
          aria-hidden="true"
        />
        <div 
          className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:32px_32px]" 
          aria-hidden="true"
        />
      </div>

      {/* 2. CONTENIDO PRINCIPAL */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* TEXTO IZQUIERDA */}
          <motion.div
            style={{ opacity: contentOpacity, scale: contentScale }}
            className="text-center lg:text-left"
          >
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block px-4 py-1.5 mb-6 rounded-full bg-white/20 border border-white/30 text-white text-sm font-bold uppercase tracking-widest backdrop-blur-sm"
            >
              Temporada 2026 abierta
            </motion.span>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
              Formando <br />
              <span className="text-[#FFD700]">
                Campeones
              </span>
            </h1>

            <p className="text-lg md:text-xl text-white mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              En <span className="text-[#FFD700] font-bold">FAMIFUTBOL</span> transformamos el talento en disciplina. 
              La mejor escuela para niños de 4 a 16 años.
            </p>
               {/* Stats en Glassmorphism */}
            <div className="grid grid-cols-3 gap-4 mb-10 max-w-lg mx-auto lg:mx-0">
              {[
                { n: '100+', l: 'Alumnos' },
                { n: '5+', l: 'Años Experiencia' },
                { n: '10+', l: 'Categorias' }
              ].map((s, i) => (
                <div key={i} className="glass p-4 rounded-2xl text-center border-white/10">
                  <div className="text-2xl md:text-3xl font-black text-white">{s.n}</div>
                  <div className="text-[10px] uppercase text-blue-200 font-bold tracking-tighter">{s.l}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link 
                href="#contacto" 
                className="px-8 py-4 bg-[#FFD700] text-[#003366] rounded-2xl font-black text-lg shadow-xl hover:scale-105 transition-transform text-center focus:outline-none focus:ring-4 focus:ring-[#FFD700]/50"
                aria-label="Inscribirse ahora en FAMIFUTBOL"
              >
                ¡INSCRIBIRSE AHORA!
              </Link>
            </div>
          </motion.div>

          {/* ÁREA DEL LOGO OPTIMIZADA */}
          <div className="relative h-[300px] md:h-[400px] lg:h-[500px] w-full flex flex-col items-center justify-center">
            <motion.div 
              className="relative z-20 w-full h-full flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            >
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                className="relative w-64 md:w-80 lg:w-96 flex items-center justify-center"
              >
                {/* Círculo Blanco */}
                <div className="absolute w-full aspect-square bg-white rounded-full shadow-[0_0_60px_rgba(255,255,255,0.8)]" />
                
                {/* Logo optimizado */}
                <div className="relative w-3/4.5 aspect-square">
                  <Image
                    src="/images/logo.webp"
                    alt="Logo de FAMIFUTBOL"
                    width={256}
                    height={256}
                    priority
                    quality={85}
                    className="object-contain"
                  />
                </div>
              </motion.div>
            </motion.div>
            
            {/* Dots indicadores accesibles */}
            <div className="absolute bottom-4 flex gap-3 z-30">
              {SLIDE_IMAGES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  aria-label={`Ir a slide ${i + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white ${
                    currentIndex === i 
                      ? 'bg-[#FFD700] w-8' 
                      : 'bg-white/40 w-2 hover:bg-white/60'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 3. BOTONES DE NAVEGACIÓN ACCESIBLES */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 z-50 px-4 md:px-8 flex justify-between pointer-events-none">
        <button 
          onClick={prevSlide}
          aria-label="Imagen anterior"
          className="p-3 rounded-full bg-white/20 border border-white/30 text-white backdrop-blur-md pointer-events-auto hover:bg-[#FFD700] hover:text-[#003366] transition-all focus:outline-none focus:ring-2 focus:ring-white"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button 
          onClick={nextSlide}
          aria-label="Imagen siguiente"
          className="p-3 rounded-full bg-white/20 border border-white/30 text-white backdrop-blur-md pointer-events-auto hover:bg-[#FFD700] hover:text-[#003366] transition-all focus:outline-none focus:ring-2 focus:ring-white"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Indicador de scroll */}
      <motion.div 
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1 z-10"
        aria-hidden="true"
      >
        <div className="w-1 h-3 bg-white rounded-full" />
      </motion.div>
    </section>
  );
});

// Prevenir re-renders innecesarios
export default Hero;
'use client';

import { memo, useRef, useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const SLIDE_IMAGES = [
  '/images/sliders/1.webp',
  '/images/sliders/1.webp',
  '/images/sliders/1.webp',
  '/images/sliders/1.webp',
];

const Hero = memo(function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const targetRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"]
  });

  const contentOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const contentScale = useTransform(scrollYProgress, [0, 0.4], [1, 0.9]);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % SLIDE_IMAGES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + SLIDE_IMAGES.length) % SLIDE_IMAGES.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 8000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section 
      ref={targetRef}
      className="relative min-h-screen lg:min-h-[110vh] flex items-center justify-center overflow-hidden bg-[#001a33] pt-24 pb-12 lg:pt-0 lg:pb-20"
    >
      {/* 1. SLIDER DE FONDO - AJUSTADO PARA MÁS VISIBILIDAD */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }} // Subimos de 0.4 a 0.7 para que la imagen sea más clara
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
            className="absolute inset-0"
          >
            <Image
              src={SLIDE_IMAGES[currentIndex]}
              alt="Fondo Escuela de fútbol"
              fill
              priority={currentIndex === 0} // Solo la primera tiene prioridad
              sizes="(max-width: 768px) 100vw, 50vw"
              quality={75}
              className="object-cover"
            
            />
          </motion.div>
        </AnimatePresence>
        
        {/* Capas de color ajustadas: Menos opacidad en el centro para ver la foto */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#003366]/70 via-[#003366]/30 to-[#003366] z-0" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:32px_32px] z-0" />
      </div>

      {/* 2. CONTENIDO PRINCIPAL */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
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

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-tight drop-shadow-lg">
              Formando <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] to-yellow-200">
                Campeones
              </span>
            </h1>

            <p className="text-lg md:text-xl text-white mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed drop-shadow-md">
              En <span className="text-[#FFD700] font-bold">FAMIFUTBOL</span> transformamos el talento en disciplina. La mejor escuela para niños de 4 a 18 años.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="/inscripcion" className="px-8 py-4 bg-[#FFD700] text-[#003366] rounded-2xl font-black text-lg shadow-xl hover:scale-105 transition-transform text-center">
                ¡INSCRIBIRSE AHORA!
              </Link>
            </div>
          </motion.div>

          {/* ÁREA DEL LOGO CON FONDO BLANCO INTENSO */}
          <div className="relative h-[400px] md:h-[500px] lg:h-[600px] w-full flex flex-col items-center justify-center">
            <motion.div 
              className="relative z-20 w-full h-full flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            >
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                className="relative w-72 h-72 md:w-96 md:h-96 lg:w-[480px] lg:h-[480px] flex items-center justify-center"
              >
                {/* Círculo Blanco Sólido para que el logo negro no se pierda con la foto de fondo */}
                <div className="absolute inset-10 bg-white rounded-full shadow-[0_0_80px_rgba(255,255,255,0.9)] z-0" />
                
                {/* Resplandor exterior para suavizar bordes */}
                <div className="absolute inset-0 bg-white rounded-full blur-3xl opacity-40 scale-110" />

                {/* LOGO */}
                <div className="relative z-10 w-full h-full p-16">
                  <Image
                    src="/images/logo.png"
                    width={288} 
                    height={287}
                    alt="Logo Famifutbol"
                    fill
                    priority
                    className="object-contain drop-shadow-xl"
                  />
                </div>
              </motion.div>
            </motion.div>
            
            {/* Dots indicadores */}
            <div className="absolute bottom-4 flex gap-3 z-30">
              {SLIDE_IMAGES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentIndex === i ? 'bg-[#FFD700] w-10' : 'bg-white/40 w-2'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 3. BOTONES DE NAVEGACIÓN */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 z-50 px-4 md:px-8 flex justify-between pointer-events-none">
        <button aria-label="Anterior"
          onClick={prevSlide}
          className="p-4 rounded-full bg-white/20 border border-white/30 text-white backdrop-blur-md pointer-events-auto hover:bg-[#FFD700] hover:text-[#003366] transition-all group shadow-2xl"
        >
          <ChevronLeft className="w-8 h-8 group-active:scale-75" />
        </button>
        <button aria-label="Siguiente"
          onClick={nextSlide}
          className="p-4 rounded-full bg-white/20 border border-white/30 text-white backdrop-blur-md pointer-events-auto hover:bg-[#FFD700] hover:text-[#003366] transition-all group shadow-2xl"
        >
          <ChevronRight className="w-8 h-8 group-active:scale-75" />
        </button>
      </div>

      {/* Indicador de scroll */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1 z-10"
      >
        <div className="w-1 h-2 bg-white rounded-full shadow-lg" />
      </motion.div>
    </section>
  );
});

export default Hero;
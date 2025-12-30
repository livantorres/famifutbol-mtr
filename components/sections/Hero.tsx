'use client';

import { memo, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image'; // Importamos el componente Image
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero = memo(function Hero() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"]
  });

  // Animaciones ligadas al scroll para el texto
  const contentOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const contentScale = useTransform(scrollYProgress, [0, 0.4], [1, 0.9]);

  return (
    <section 
      ref={targetRef}
      // Añadimos pt-24 (en móvil) y lg:pt-0 (en escritorio para que el flex center haga su trabajo)
      className="relative min-h-screen lg:min-h-[110vh] flex items-center justify-center overflow-hidden bg-[#003366] pt-24 pb-12 lg:pt-0 lg:pb-20"
    >
      {/* Fondo con Branding Dinámico */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Círculos de luz suaves (Glow) */}
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-accent/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[10%] right-[-5%] w-[40%] h-[40%] bg-primary/30 rounded-full blur-[100px]" />
        
        {/* Grid Pattern sutil */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* BLOQUE IZQUIERDO: TEXTO (Sin cambios) */}
          <motion.div
            style={{ opacity: contentOpacity, scale: contentScale }}
            className="text-center lg:text-left"
          >
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block px-4 py-1.5 mb-6 rounded-full bg-white/10 border border-white/20 text-blue-200 text-sm font-bold uppercase tracking-widest"
            >
              Temporada 2026 abierta
            </motion.span>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-tight">
              Formando <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] to-yellow-200 drop-shadow-sm">
                Campeones
              </span>
            </h1>

            <p className="text-lg md:text-xl text-blue-100/80 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              En <span className="text-white font-bold">FAMIFUTBOL</span> transformamos el talento en disciplina. La mejor escuela para niños de 4 a 18 años.
            </p>

            {/* Stats en Glassmorphism */}
            <div className="grid grid-cols-3 gap-4 mb-10 max-w-lg mx-auto lg:mx-0">
              {[
                { n: '500+', l: 'Alumnos' },
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
              <Link href="/inscripcion" className="px-8 py-4 bg-[#FFD700] text-[#003366] rounded-2xl font-black text-lg shadow-xl hover:scale-105 transition-transform text-center">
                ¡INSCRIBIRSE AHORA!
              </Link>
              <Link href="/sedes" className="px-8 py-4 bg-white/5 backdrop-blur-md text-white border border-white/20 rounded-2xl font-bold text-lg hover:bg-white/10 transition-all text-center">
                Ver Sedes
              </Link>
            </div>
          </motion.div>

          {/* BLOQUE DERECHO: IMAGEN ANIMADA */}
          <div className="relative h-[400px] md:h-[500px] lg:h-[600px] w-full flex items-center justify-center perspective-1000">
            
            {/* Wrapper para la animación de entrada */}
            <motion.div 
              className="relative z-20 w-full h-full"
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            >
              {/* Wrapper interno para la animación de flotación continua */}
              <motion.div
                animate={{ y: [-15, 15, -15] }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 6, 
                  ease: "easeInOut" 
                }}
                className="relative w-full h-full"
              >
                 {/* Componente de Imagen Optimizado */}
                 {/* Usamos 'fill' y 'object-contain' para que se adapte al contenedor sin deformarse */}
                 <Image
                    src="/images/hero.png"
                    alt="Jugador de Famifutbol en acción"
                    fill
                    priority // Carga prioritaria para el LCP (Largest Contentful Paint)
                    className="object-contain drop-shadow-[0_35px_35px_rgba(0,0,0,0.4)]"
                  />
              </motion.div>
            </motion.div>

            {/* Luz de fondo detrás de la imagen para darle profundidad */}
            <div className="absolute z-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-white/10 blur-[100px] rounded-full" />
          </div>

        </div>
      </div>

      {/* Indicador de Scroll (Sin cambios) */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1"
      >
        <div className="w-1 h-2 bg-white rounded-full" />
      </motion.div>
    </section>
  );
});

export default Hero;
'use client';

import { memo } from 'react';
import { 
  Users, 
  Target, 
  Trophy, 
  Calendar, 
  Star, 
  Award,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { motion } from 'framer-motion';
import { useRef } from 'react';

const services = [
  {
    id: 1,
    title: 'Fútbol Base',
    description: 'Iniciación al fútbol para los más pequeños. Desarrollo de habilidades motoras básicas y trabajo en equipo.',
    age: '4-6 años',
    schedule: 'Lunes y Miércoles 3:00 PM - 4:30 PM',
    icon: <Users className="w-8 h-8" />,
    color: 'bg-blue-100 dark:bg-blue-900/30',
    iconColor: 'text-primary'
  },
  {
    id: 2,
    title: 'Escuela de Tecnificación',
    description: 'Perfeccionamiento técnico y táctico. Entrenamiento especializado para jugadores en desarrollo.',
    age: '7-12 años',
    schedule: 'Martes y Jueves 4:00 PM - 6:00 PM',
    icon: <Target className="w-8 h-8" />,
    color: 'bg-green-100 dark:bg-green-900/30',
    iconColor: 'text-accent'
  },
  {
    id: 3,
    title: 'Fútbol Competitivo',
    description: 'Preparación para competiciones. Entrenamiento avanzado con participación en torneos locales y regionales.',
    age: '13-18 años',
    schedule: 'Lunes a Viernes 6:00 PM - 8:00 PM',
    icon: <Trophy className="w-8 h-8" />,
    color: 'bg-yellow-100 dark:bg-yellow-900/30',
    iconColor: 'text-yellow'
  },
  {
    id: 4,
    title: 'Campus Vacacionales',
    description: 'Programas intensivos durante vacaciones. Combinación de entrenamiento, recreación y valores.',
    age: '6-16 años',
    schedule: 'Vacaciones escolares',
    icon: <Calendar className="w-8 h-8" />,
    color: 'bg-orange-100 dark:bg-orange-900/30',
    iconColor: 'text-secondary'
  },
  {
    id: 5,
    title: 'Entrenamientos Personalizados',
    description: 'Plan individualizado según necesidades. Mejora específica de habilidades técnicas y físicas.',
    age: 'Todas las edades',
    schedule: 'Flexible',
    icon: <Star className="w-8 h-8" />,
    color: 'bg-purple-100 dark:bg-purple-900/30',
    iconColor: 'text-purple-500'
  },
  {
    id: 6,
    title: 'Torneos Internos',
    description: 'Competiciones organizadas por la escuela. Fomento del espíritu competitivo y trabajo en equipo.',
    age: 'Todas las edades',
    schedule: 'Sábados',
    icon: <Award className="w-8 h-8" />,
    color: 'bg-red-100 dark:bg-red-900/30',
    iconColor: 'text-red-500'
  }
];

const testimonials = [
  {
    id: 1,
    name: 'María González',
    role: 'Madre de jugador',
    content: 'Mi hijo ha mejorado no solo en fútbol, sino también en disciplina y trabajo en equipo. ¡Excelente escuela!',
    rating: 5
  },
  {
    id: 2,
    name: 'Carlos Rodríguez',
    role: 'Padre de jugadora',
    content: 'Las instalaciones son increíbles y los entrenadores son profesionales de verdad. 100% recomendado.',
    rating: 5
  },
  {
    id: 3,
    name: 'Ana Martínez',
    role: 'Estudiante',
    content: 'He crecido como jugadora y como persona. Los valores que enseñan son lo más importante.',
    rating: 5
  }
];

const Services = memo(function Services() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <section id="servicios" className="w-full max-w-full overflow-hidden py-20 md:py-28 lg:py-32 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container-page">
      {/*<div className="w-full max-w-full">*/}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 w-full">
          <div className="max-w-7xl mx-auto w-full">
        {/* Header Mejorado */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block mb-6"
          >
            <span className="text-sm md:text-base font-bold text-primary dark:text-primary-light uppercase tracking-widest px-4 py-2 bg-primary/10 dark:bg-primary-light/10 rounded-full">
              Nuestros Servicios
            </span>
          </motion.div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 dark:text-white mb-6 leading-tight">
            Nuestros{' '}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_auto] bg-clip-text text-transparent animate-[shimmer_3s_linear_infinite]">
                Programas
              </span>
              <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-primary opacity-30 rounded-full" />
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
            Programas diseñados para cada etapa del desarrollo deportivo, desde la iniciación hasta la competencia.
          </p>
        </motion.div>

        {/* Services Grid Mejorado */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 mb-24">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
              whileHover={{ y: -12, scale: 1.02 }}
              className="group relative bg-white dark:bg-gray-800 rounded-3xl shadow-elegant-lg hover:shadow-elegant-xl transition-all duration-500 overflow-hidden border border-gray-100 dark:border-gray-700/50"
            >
              {/* Gradient Top Border Mejorado */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary via-secondary to-yellow opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Shine Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              
              {/* Content */}
              <div className="p-8 lg:p-10 relative z-10">
                {/* Icon Mejorado */}
                <motion.div
                  className={`inline-flex p-6 rounded-2xl ${service.color} ${service.iconColor} mb-6 shadow-elegant-lg group-hover:shadow-elegant-xl transition-all duration-300`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  {service.icon}
                </motion.div>
                
                {/* Title Mejorado */}
                <h3 className="text-2xl lg:text-3xl font-extrabold text-gray-900 dark:text-white mb-4 leading-tight group-hover:text-primary dark:group-hover:text-primary-light transition-colors duration-300">
                  {service.title}
                </h3>
                
                {/* Description Mejorado */}
                <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed text-base font-light">
                  {service.description}
                </p>
                
                {/* Details Mejorados */}
                <div className="space-y-4 mb-8 pb-6 border-b border-gray-100 dark:border-gray-700/50">
                  <div className="flex items-start gap-4 p-3 rounded-xl bg-gray-50 dark:bg-gray-900/50">
                    <span className="font-bold text-primary dark:text-primary-light text-sm min-w-[70px] uppercase tracking-wide">Edad:</span>
                    <span className="text-gray-700 dark:text-gray-300 text-sm flex-1 font-medium">{service.age}</span>
                  </div>
                  <div className="flex items-start gap-4 p-3 rounded-xl bg-gray-50 dark:bg-gray-900/50">
                    <span className="font-bold text-primary dark:text-primary-light text-sm min-w-[70px] uppercase tracking-wide">Horarios:</span>
                    <span className="text-gray-700 dark:text-gray-300 text-sm flex-1 font-medium">{service.schedule}</span>
                  </div>
                </div>
              </div>
              
              {/* Button Mejorado */}
              <div className="px-8 lg:px-10 pb-8 lg:pb-10 relative z-10">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 text-primary dark:text-primary-light font-bold rounded-2xl border-2 border-primary dark:border-primary-light hover:bg-gradient-to-r hover:from-primary hover:to-primary-light hover:text-white dark:hover:from-primary-light dark:hover:to-primary transition-all duration-300 shadow-elegant hover:shadow-elegant-lg group-hover:border-secondary"
                >
                  Más Información
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Testimonials Slider */}
        <div className="mt-24">
          <div className="flex items-center justify-between mb-12">
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
              Lo que dicen <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">nuestras familias</span>
            </h3>
            
            <div className="flex space-x-3">
              <button
                onClick={scrollLeft}
                className="p-3 rounded-full bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 shadow-md hover:shadow-lg border border-gray-200 dark:border-gray-700"
                aria-label="Anterior"
              >
                <ChevronLeft className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              </button>
              <button
                onClick={scrollRight}
                className="p-3 rounded-full bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 shadow-md hover:shadow-lg border border-gray-200 dark:border-gray-700"
                aria-label="Siguiente"
              >
                <ChevronRight className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              </button>
            </div>
          </div>

          <div 
            ref={scrollRef}
            className="flex overflow-x-auto gap-8 pb-6 scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {testimonials.map((testimonial) => (
              <motion.div
                key={testimonial.id}
                whileHover={{ scale: 1.05, y: -5 }}
                className="flex-shrink-0 w-full md:w-96 bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-200/50 dark:border-gray-700/50"
              >
                <div className="flex items-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-6 h-6 ${
                        i < testimonial.rating ? 'text-yellow fill-yellow' : 'text-gray-300 dark:text-gray-600'
                      }`}
                    />
                  ))}
                </div>
                
                <p className="text-gray-700 dark:text-gray-300 mb-8 italic text-lg leading-relaxed">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center pt-6 border-t border-gray-200 dark:border-gray-700">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-full mr-4 shadow-lg flex items-center justify-center">
                    <span className="text-white font-bold text-lg">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white text-lg">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
            </div>
          </div>
        </div>
      </div>
      {/*</div>*/}
    </section>
  );
});

export default Services;
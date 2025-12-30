'use client';

import { memo } from 'react';
import { motion } from 'framer-motion';
import { 
  Target, 
  Users, 
  Shield, 
  Award, 
  Calendar,
  BarChart3,
  Clock,
  Heart
} from 'lucide-react';

const features = [
  {
    icon: <Target className="w-8 h-8" />,
    title: 'Metodología Probada',
    description: 'Sistema de entrenamiento desarrollado por profesionales con más de 15 años de experiencia.',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: 'Grupos por Edad',
    description: 'Clasificación por niveles y edades para un desarrollo óptimo de cada jugador.',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: 'Seguridad Garantizada',
    description: 'Instalaciones seguras y personal capacitado en primeros auxilios y protocolos de seguridad.',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: <Award className="w-8 h-8" />,
    title: 'Certificación Oficial',
    description: 'Programas avalados por federaciones deportivas y reconocimiento nacional.',
    color: 'from-yellow-500 to-orange-500'
  },
  {
    icon: <Calendar className="w-8 h-8" />,
    title: 'Calendario Anual',
    description: 'Actividades programadas durante todo el año: torneos, eventos y campus vacacionales.',
    color: 'from-red-500 to-rose-500'
  },
  {
    icon: <BarChart3 className="w-8 h-8" />,
    title: 'Seguimiento Personalizado',
    description: 'Evaluación continua del progreso con informes periódicos para los padres.',
    color: 'from-indigo-500 to-blue-500'
  }
];

const timeline = [
  {
    age: '4-6 años',
    title: 'Iniciación',
    description: 'Desarrollo de habilidades motoras básicas y familiarización con el balón.',
    activities: ['Juegos pre-deportivos', 'Coordinación', 'Trabajo en equipo']
  },
  {
    age: '7-12 años',
    title: 'Formación',
    description: 'Perfeccionamiento técnico y aprendizaje de fundamentos tácticos.',
    activities: ['Técnica individual', 'Táctica básica', 'Competiciones internas']
  },
  {
    age: '13-18 años',
    title: 'Especialización',
    description: 'Entrenamiento específico por posiciones y preparación competitiva.',
    activities: ['Táctica avanzada', 'Preparación física', 'Competiciones federadas']
  }
];

const Features = memo(function Features() {
  return (
    <section id="caracteristicas" className="w-full max-w-full overflow-hidden py-20 md:py-28 lg:py-32 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/*<div className="w-full max-w-full">*/}
      <div className="container-page">
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
                  Nuestras Ventajas
                </span>
              </motion.div>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 dark:text-white mb-6 leading-tight">
                ¿Por qué elegir{' '}
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_auto] bg-clip-text text-transparent animate-[shimmer_3s_linear_infinite]">
                    FAMIFUTBOL
                  </span>
                  <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-primary opacity-30 rounded-full" />
                </span>
                ?
              </h2>
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
                Nuestra metodología se basa en 3 pilares fundamentales: formación técnica, desarrollo personal y valores deportivos.
              </p>
            </motion.div>

            {/* Features Grid Mejorado */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 mb-24">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
                  whileHover={{ y: -12, scale: 1.02 }}
                  className="group relative bg-white dark:bg-gray-800 rounded-3xl p-8 lg:p-10 shadow-elegant-lg hover:shadow-elegant-xl transition-all duration-500 border border-gray-100 dark:border-gray-700/50 overflow-hidden"
                >
                  {/* Shine Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  
                  <motion.div
                    className={`inline-flex p-6 rounded-2xl bg-gradient-to-r ${feature.color} text-white mb-6 shadow-elegant-lg group-hover:shadow-elegant-xl transition-all duration-300`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    {feature.icon}
                  </motion.div>
                  <h3 className="text-2xl font-extrabold text-gray-900 dark:text-white mb-4 leading-tight group-hover:text-primary dark:group-hover:text-primary-light transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-base font-light">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>

        {/* Timeline Section */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Desarrollo por <span className="text-primary">Etapas</span>
          </h3>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary to-secondary hidden lg:block" />
            
            <div className="space-y-12 lg:space-y-0">
              {timeline.map((stage, index) => (
                <motion.div
                  key={stage.age}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className={`relative lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-12 lg:text-right' : 'lg:pl-12 lg:ml-auto'}`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute top-6 left-1/2 transform -translate-x-1/2 lg:left-auto lg:right-0 lg:transform-none w-6 h-6 bg-primary rounded-full border-4 border-white dark:border-gray-900 z-10" />
                  
                  <div className={`bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg ${
                    index % 2 === 0 ? 'lg:mr-6' : 'lg:ml-6'
                  }`}>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-bold text-primary">{stage.age}</span>
                      <Clock className="w-6 h-6 text-gray-400" />
                    </div>
                    
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {stage.title}
                    </h4>
                    
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {stage.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {stage.activities.map((activity, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-primary/10 text-primary dark:text-primary-light rounded-full text-sm"
                        >
                          {activity}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Comparative Table */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
          <div className="px-6 py-8 border-b border-gray-200 dark:border-gray-700">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              Comparativa de <span className="text-primary">Programas</span>
            </h3>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50 dark:bg-gray-700">
                  <th className="py-4 px-6 text-left font-semibold text-gray-900 dark:text-white">
                    Característica
                  </th>
                  <th className="py-4 px-6 text-center font-semibold text-gray-900 dark:text-white">
                    Fútbol Base
                  </th>
                  <th className="py-4 px-6 text-center font-semibold text-gray-900 dark:text-white">
                    Tecnificación
                  </th>
                  <th className="py-4 px-6 text-center font-semibold text-gray-900 dark:text-white">
                    Competitivo
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {[
                  ['Horas semanales', '3 horas', '6 horas', '10 horas'],
                  ['Ratio entrenador/jugador', '1:10', '1:12', '1:15'],
                  ['Evaluaciones técnicas', 'Trimestral', 'Mensual', 'Quincenal'],
                  ['Participación en torneos', 'Internos', 'Locales', 'Regionales'],
                  ['Informes de progreso', 'Básico', 'Detallado', 'Avanzado'],
                  ['Preparación física', 'Básica', 'Media', 'Avanzada']
                ].map((row, rowIndex) => (
                  <tr key={rowIndex} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                    {row.map((cell, cellIndex) => (
                      <td
                        key={cellIndex}
                        className={`py-4 px-6 ${
                          cellIndex === 0
                            ? 'font-semibold text-gray-900 dark:text-white'
                            : 'text-gray-600 dark:text-gray-300 text-center'
                        }`}
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="px-6 py-8 bg-gradient-to-r from-primary/5 to-secondary/5">
            <div className="flex items-center">
              <Heart className="w-6 h-6 text-primary mr-3" />
              <p className="text-gray-700 dark:text-gray-300">
                <span className="font-semibold">Ventaja exclusiva:</span> Todos nuestros programas incluyen 
                seguimiento psicológico y nutricional sin costo adicional.
              </p>
            </div>
          </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default Features;
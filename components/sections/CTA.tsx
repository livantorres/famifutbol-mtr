'use client';

import { memo, useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  User, 
  Calendar, 
  ChevronDown,
  CheckCircle,
  MessageSquare,
  Calculator
} from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: '¿A partir de qué edad pueden empezar los niños?',
    answer: 'Aceptamos niños desde los 4 años en nuestro programa de iniciación. Contamos con actividades específicas para cada edad.'
  },
  {
    question: '¿Qué necesitan traer los niños para las clases?',
    answer: 'Ropa deportiva cómoda, botines de fútbol, espinilleras y una botella de agua. El resto del equipo lo proporciona la escuela.'
  },
  {
    question: '¿Cómo son los grupos de entrenamiento?',
    answer: 'Formamos grupos por edad y nivel técnico. La relación entrenador/jugador es de máximo 1:12 para garantizar atención personalizada.'
  },
  {
    question: '¿Qué pasa si llueve?',
    answer: 'Contamos con instalaciones cubiertas para continuar con los entrenamientos. Solo cancelamos en caso de condiciones climáticas extremas.'
  },
  {
    question: '¿Ofrecen descuentos para hermanos?',
    answer: 'Sí, ofrecemos un 15% de descuento para el segundo hermano y 25% a partir del tercero.'
  }
];

const CTA = memo(function CTA() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    age: '',
    program: '',
    message: ''
  });

  const [price, setPrice] = useState(0);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const calculatePrice = () => {
    let basePrice = 0;
    
    switch(formData.program) {
      case 'base':
        basePrice = 80000;
        break;
      case 'tech':
        basePrice = 120000;
        break;
      case 'competitive':
        basePrice = 180000;
        break;
      case 'campus':
        basePrice = 250000;
        break;
      default:
        basePrice = 0;
    }

    // Descuento por edad
    const age = parseInt(formData.age) || 0;
    if (age < 7) basePrice *= 0.9;
    if (age > 12) basePrice *= 1.1;

    setPrice(basePrice);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el formulario
    alert('Formulario enviado. Te contactaremos pronto.');
  };

  return (
    <section id="contacto" className="w-full max-w-full overflow-hidden py-20 md:py-28 lg:py-32 bg-gradient-to-br from-primary via-primary-light via-accent to-secondary relative">
      {/* Background Pattern Mejorado */}
      <div className="container-page">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-white/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-secondary/30 rounded-full blur-[100px] animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-yellow/20 rounded-full blur-[140px] animate-pulse delay-500" />
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>
      <div className="w-full max-w-full relative z-10">
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
                <span className="text-sm md:text-base font-bold text-white/90 uppercase tracking-widest px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30">
                  Únete Ahora
                </span>
              </motion.div>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight">
                ¡Únete a la{' '}
                <span className="relative inline-block">
                  <span className="text-yellow drop-shadow-2xl font-black">
                    Familia FAMIFUTBOL
                  </span>
                  <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-yellow via-secondary to-yellow opacity-50 rounded-full" />
                </span>
                !
              </h2>
              <p className="text-xl md:text-2xl text-white/95 max-w-4xl mx-auto leading-relaxed font-light">
                Inscríbete hoy y obtén una clase de prueba gratuita. Espacios limitados.
              </p>
            </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-3xl shadow-2xl p-8 lg:p-10 border border-white/20"
          >
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-8">
              Solicita Información
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Nombre Completo
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent"
                      required
                      placeholder="Juan Pérez"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Teléfono
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent"
                      required
                      placeholder="+57 300 123 4567"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Correo Electrónico
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent"
                      required
                      placeholder="juan@ejemplo.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Edad del jugador
                  </label>
                  <input
                    type="number"
                    name="age"
                    value={formData.age}
                    onChange={handleInputChange}
                    min="4"
                    max="18"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="8"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Programa de interés
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 z-10" />
                  <select
                    name="program"
                    value={formData.program}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent appearance-none"
                  >
                    <option value="">Selecciona un programa</option>
                    <option value="base">Fútbol Base (4-6 años)</option>
                    <option value="tech">Tecnificación (7-12 años)</option>
                    <option value="competitive">Competitivo (13-18 años)</option>
                    <option value="campus">Campus Vacacional</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Mensaje adicional
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Cuéntanos sobre las necesidades específicas del jugador..."
                />
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="terms"
                  className="w-4 h-4 text-primary rounded focus:ring-primary"
                  required
                />
                <label htmlFor="terms" className="ml-2 text-sm text-gray-700 dark:text-gray-300">
                  Acepto los términos y condiciones y la política de privacidad
                </label>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-secondary to-yellow text-white font-bold rounded-lg hover:opacity-90 transition-opacity"
              >
                Solicitar Información
              </button>
            </form>
          </motion.div>

          {/* Calculator & FAQ Section */}
          <div className="space-y-8">
            {/* Price Calculator */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-3xl shadow-2xl p-8 lg:p-10 border border-white/20"
            >
              <div className="flex items-center mb-6">
                <Calculator className="w-8 h-8 text-primary mr-3" />
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white">
                  Calculadora de Precios
                </h3>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 dark:text-gray-300">Programa seleccionado:</span>
                  <span className="font-semibold">
                    {formData.program === 'base' && 'Fútbol Base'}
                    {formData.program === 'tech' && 'Tecnificación'}
                    {formData.program === 'competitive' && 'Competitivo'}
                    {formData.program === 'campus' && 'Campus Vacacional'}
                    {!formData.program && 'No seleccionado'}
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-gray-700 dark:text-gray-300">Edad del jugador:</span>
                  <span className="font-semibold">{formData.age || 'No especificada'} años</span>
                </div>

                <div className="h-px bg-gray-200 dark:bg-gray-700" />

                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-gray-900 dark:text-white">Precio estimado:</span>
                  <span className="text-2xl font-bold text-primary">
                    ${price.toLocaleString()}/mes
                  </span>
                </div>
              </div>

              <button
                onClick={calculatePrice}
                className="w-full py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-light transition-colors"
              >
                Calcular Precio
              </button>

              <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  <CheckCircle className="inline w-4 h-4 text-primary mr-1" />
                  Este precio incluye: uniforme, seguro médico, evaluaciones técnicas y acceso a instalaciones.
                </p>
              </div>
            </motion.div>

            {/* FAQ Section */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-3xl shadow-2xl p-8 lg:p-10 border border-white/20"
            >
              <div className="flex items-center mb-6">
                <MessageSquare className="w-8 h-8 text-primary mr-3" />
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white">
                  Preguntas Frecuentes
                </h3>
              </div>

              <div className="space-y-4">
              <Accordion
                  type="single"
                  collapsible
                  defaultValue="item-0"
                  className="w-full space-y-4"
                >
                  {faqs.map((faq, index) => (
                    <AccordionItem
                      key={index}
                      value={`item-${index}`}
                      className="border border-gray-light rounded-xl px-4"
                    >
                      <AccordionTrigger className="text-left font-semibold text-gray-dark hover:no-underline">
                        {faq.question}
                      </AccordionTrigger>

                      <AccordionContent className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>

              </div>

              <div className="mt-8 p-4 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg">
                <p className="text-gray-700 dark:text-gray-300 text-center">
                  ¿No encuentras tu pregunta?{' '}
                  <a href="mailto:info@famifutbol.com" className="text-primary font-semibold hover:underline">
                    Contáctanos directamente
                  </a>
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <motion.div 
            className="text-center p-6 lg:p-8 bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 hover:bg-white/15 transition-all"
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <Phone className="w-10 h-10 text-white mx-auto mb-4" />
            <h4 className="text-xl font-bold text-white mb-2">Teléfono</h4>
            <p className="text-white/90">+57 (321) 836-1970</p>
          </motion.div>

          <motion.div 
            className="text-center p-6 lg:p-8 bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 hover:bg-white/15 transition-all"
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <Mail className="w-10 h-10 text-white mx-auto mb-4" />
            <h4 className="text-xl font-bold text-white mb-2">Email</h4>
            <p className="text-white/90">info@famifutbol.com</p>
          </motion.div>

          <motion.div 
            className="text-center p-6 lg:p-8 bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 hover:bg-white/15 transition-all"
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <Calendar className="w-10 h-10 text-white mx-auto mb-4" />
            <h4 className="text-xl font-bold text-white mb-2">Horario de Atención</h4>
            <p className="text-white/90">Lun-Vie: 8:00 AM - 8:00 PM</p>
          </motion.div>
        </motion.div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
});

export default CTA;
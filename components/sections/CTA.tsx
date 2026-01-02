'use client';

import { memo, useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  User, 
  MessageSquare,
  Calendar
} from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Configuración de WhatsApp
    const phoneNumber = "573218361970"; // Número sin espacios ni símbolos
    //const phoneNumber = "573161467492"; // Número sin espacios ni símbolos
    const intro = "ASUNTO: Hola estoy interesado en su escuela";
    
    const body = `
*Datos del interesado:*
• *Nombre:* ${formData.name}
• *Teléfono:* ${formData.phone}
• *Email:* ${formData.email}
• *Edad del jugador:* ${formData.age} años
• *Mensaje:* ${formData.message || 'Sin mensaje adicional'}
    `.trim();

    const fullMessage = encodeURIComponent(`${intro}\n\n${body}`);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${fullMessage}`;

    // Abrir WhatsApp en una nueva pestaña
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contacto" className="w-full max-w-full overflow-hidden py-20 md:py-28 lg:py-32 bg-gradient-to-br from-primary via-primary-light via-accent to-secondary relative">
      <div className="container-page">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-white/20 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-secondary/30 rounded-full blur-[100px] animate-pulse delay-1000" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:24px_24px]" />
        </div>

        <div className="w-full max-w-full relative z-10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 w-full">
            <div className="max-w-7xl mx-auto w-full">
              {/* Header */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-20"
              >
                <div className="inline-block mb-6">
                  <span className="text-sm md:text-base font-bold text-white/90 uppercase tracking-widest px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30">
                    Únete Ahora
                  </span>
                </div>
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight">
                  ¡Únete a la <span className="text-yellow font-black">Familia FAMIFUTBOL</span>!
                </h2>
                <p className="text-xl md:text-2xl text-white/95 max-w-4xl mx-auto font-light">
                  Envíanos tus datos y te contactaremos por WhatsApp de inmediato.
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
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Nombre Completo</label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <input
                            type="text"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleInputChange}
                            className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:ring-2 focus:ring-primary"
                            placeholder="Juan Pérez"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Teléfono</label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <input
                            type="tel"
                            name="phone"
                            required
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:ring-2 focus:ring-primary"
                            placeholder="+57 300..."
                          />
                        </div>
                      </div>

                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Correo Electrónico</label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <input
                            type="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleInputChange}
                            className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:ring-2 focus:ring-primary"
                            placeholder="juan@ejemplo.com"
                          />
                        </div>
                      </div>

                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Edad del jugador</label>
                        <input
                          type="number"
                          name="age"
                          required
                          value={formData.age}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:ring-2 focus:ring-primary"
                          placeholder="Ej: 8"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Mensaje adicional</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={4}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:ring-2 focus:ring-primary"
                        placeholder="Cuéntanos más..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 bg-gradient-to-r from-secondary to-yellow text-white font-bold rounded-lg hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg"
                    >
                      SOLICITAR INFORMACIÓN
                    </button>
                  </form>
                </motion.div>

                {/* FAQ Section */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-3xl shadow-2xl p-8 lg:p-10 border border-white/20"
                >
                  <div className="flex items-center mb-6">
                    <MessageSquare className="w-8 h-8 text-primary mr-3" />
                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white">Preguntas Frecuentes</h3>
                  </div>

                  <Accordion type="single" collapsible className="w-full space-y-4">
                    {faqs.map((faq, index) => (
                      <AccordionItem key={index} value={`item-${index}`} className="border border-gray-200 rounded-xl px-4">
                        <AccordionTrigger className="text-left font-semibold text-gray-800 hover:no-underline">{faq.question}</AccordionTrigger>
                        <AccordionContent className="text-gray-600 leading-relaxed">{faq.answer}</AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>

                  <div className="mt-8 p-6 bg-primary/10 rounded-2xl border border-primary/20">
                    <h4 className="font-bold text-primary mb-2">Contacto Directo</h4>
                    <p className="text-sm text-gray-700 mb-4">Estamos disponibles para resolver tus dudas de lunes a viernes.</p>
                    <div className="space-y-2">
                      <p className="flex items-center text-gray-800 font-medium"><Phone className="w-4 h-4 mr-2" /> +57 (321) 836-1970</p>
                      <p className="flex items-center text-gray-800 font-medium"><Mail className="w-4 h-4 mr-2" /> info@famifutbol.com</p>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Bottom Cards */}
              <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { icon: Phone, title: "WhatsApp", text: "+57 (321) 836-1970" },
                  { icon: Mail, title: "Email", text: "info@famifutbol.com" },
                  { icon: Calendar, title: "Horario", text: "Lun-Vie: 8AM - 8PM" }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ y: -5 }}
                    className="text-center p-8 bg-white/10 backdrop-blur-md rounded-3xl border border-white/20"
                  >
                    <item.icon className="w-10 h-10 text-white mx-auto mb-4" />
                    <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                    <p className="text-white/90">{item.text}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default CTA;
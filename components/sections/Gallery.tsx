'use client';

import { memo, useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Filter } from 'lucide-react';

const categories = [
  'Todos',
  'Entrenamientos',
  'Torneos',
  'Eventos',
  'Instalaciones'
];

const galleryImages = [
  {
    id: 1,
    src: '/images/gallery/training1.jpg',
    category: 'Entrenamientos',
    title: 'Entrenamiento técnico',
    description: 'Niños aprendiendo técnicas básicas de fútbol'
  },
  {
    id: 2,
    src: '/images/gallery/tournament1.jpg',
    category: 'Torneos',
    title: 'Final del torneo interno',
    description: 'Partido final del campeonato escolar'
  },
  {
    id: 3,
    src: '/images/gallery/event1.jpg',
    category: 'Eventos',
    title: 'Graduación 2023',
    description: 'Ceremonia de graduación de nuestros estudiantes'
  },
  {
    id: 4,
    src: '/images/gallery/facility1.jpg',
    category: 'Instalaciones',
    title: 'Campo principal',
    description: 'Nuestro campo de fútbol con césped artificial'
  },
  {
    id: 5,
    src: '/images/gallery/training2.jpg',
    category: 'Entrenamientos',
    title: 'Entrenamiento físico',
    description: 'Ejercicios de condición física para jóvenes'
  },
  {
    id: 6,
    src: '/images/gallery/tournament2.jpg',
    category: 'Torneos',
    title: 'Premiación',
    description: 'Entrega de trofeos a los campeones'
  },
  {
    id: 7,
    src: '/images/gallery/event2.jpg',
    category: 'Eventos',
    title: 'Día de la familia',
    description: 'Evento familiar con actividades para todos'
  },
  {
    id: 8,
    src: '/images/gallery/facility2.jpg',
    category: 'Instalaciones',
    title: 'Vestuarios',
    description: 'Vestuarios modernos y equipados'
  },
  {
    id: 9,
    src: '/images/gallery/training3.jpg',
    category: 'Entrenamientos',
    title: 'Entrenamiento de porteros',
    description: 'Sesión especializada para porteros'
  }
];

const Gallery = memo(function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);
  const [images, setImages] = useState(galleryImages);

  useEffect(() => {
    if (selectedCategory === 'Todos') {
      setImages(galleryImages);
    } else {
      setImages(galleryImages.filter(img => img.category === selectedCategory));
    }
  }, [selectedCategory]);

  return (
    <section id="galeria" className="w-full max-w-full overflow-hidden py-20 md:py-28 lg:py-32 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
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
                  Momentos Especiales
                </span>
              </motion.div>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 dark:text-white mb-6 leading-tight">
                Nuestra{' '}
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_auto] bg-clip-text text-transparent animate-[shimmer_3s_linear_infinite]">
                    Galería
                  </span>
                  <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-primary opacity-30 rounded-full" />
                </span>
              </h2>
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
                Descubre los momentos más especiales de nuestra escuela y conoce nuestras instalaciones.
              </p>
            </motion.div>

            {/* Filters Mejorados */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap justify-center gap-4 mb-16"
            >
              {categories.map((category) => (
                <motion.button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-8 py-4 rounded-2xl font-bold text-sm uppercase tracking-wider transition-all duration-300 shadow-elegant hover:shadow-elegant-lg ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-elegant-lg scale-105'
                      : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 border-2 border-gray-200 dark:border-gray-700 hover:border-primary/50'
                  }`}
                >
                  {category}
                </motion.button>
              ))}
            </motion.div>

        {/* Gallery Grid - Masonry Layout */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {images.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="break-inside-avoid cursor-pointer relative group"
              onClick={() => setSelectedImage(image)}
            >
              {/* Image Placeholder */}
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Filter className="w-8 h-8 text-white" />
                    </div>
                    <p className="font-semibold text-gray-900 dark:text-white">
                      {image.title}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {image.category}
                    </p>
                  </div>
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <p className="text-white font-semibold">Ver imagen</p>
                </div>
              </div>
              
              {/* Image Info */}
              <div className="mt-2">
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  {image.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {image.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* API Integration Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 p-6 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl text-center"
        >
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
            Próximamente: Galería Dinámica
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            Las imágenes se cargarán desde una API externa para facilitar la actualización del contenido.
          </p>
        </motion.div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 p-2 text-white hover:text-gray-300 transition-colors"
                aria-label="Cerrar"
              >
                <X className="w-8 h-8" />
              </button>
              
              {/* Image Content */}
              <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="w-32 h-32 bg-white/20 rounded-full mx-auto mb-6 flex items-center justify-center">
                      <Filter className="w-16 h-16" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">
                      {selectedImage.title}
                    </h3>
                    <p className="text-white/80">
                      {selectedImage.description}
                    </p>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                        {selectedImage.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300">
                        Categoría: {selectedImage.category}
                      </p>
                    </div>
                    <span className="px-3 py-1 bg-primary/10 text-primary dark:text-primary-light rounded-full text-sm">
                      Imagen #{selectedImage.id}
                    </span>
                  </div>
                  
                  <p className="text-gray-700 dark:text-gray-300">
                    Esta imagen forma parte de nuestra colección y será cargada desde una API externa 
                    para facilitar la gestión del contenido.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
});

export default Gallery;
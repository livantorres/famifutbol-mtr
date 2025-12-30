'use client';

import { useState, ReactNode } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Filter, X, ZoomIn } from 'lucide-react';

interface ImageItem {
  id: string | number;
  src: string;
  alt: string;
  title?: string;
  description?: string;
  category?: string;
  width?: number;
  height?: number;
}

interface ImageGalleryProps {
  images: ImageItem[];
  columns?: number;
  gap?: number;
  enableFilter?: boolean;
  enableLightbox?: boolean;
  className?: string;
}

export default function ImageGallery({
  images,
  columns = 3,
  gap = 4,
  enableFilter = true,
  enableLightbox = true,
  className = ''
}: ImageGalleryProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedImage, setSelectedImage] = useState<ImageItem | null>(null);

  // Extraer categorías únicas
  const categories = ['all', ...new Set(images.map(img => img.category).filter(Boolean))] as string[];

  // Filtrar imágenes por categoría
  const filteredImages = selectedCategory === 'all' 
    ? images 
    : images.filter(img => img.category === selectedCategory);

  const columnClasses = {
    1: 'columns-1',
    2: 'columns-1 sm:columns-2',
    3: 'columns-1 sm:columns-2 lg:columns-3',
    4: 'columns-1 sm:columns-2 lg:columns-4'
  };

  const gapClasses = {
    2: 'gap-2',
    4: 'gap-4',
    6: 'gap-6',
    8: 'gap-8'
  };

  return (
    <div className={className}>
      {/* Filter Bar */}
      {enableFilter && categories.length > 1 && (
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full font-medium transition-colors ${
                selectedCategory === category
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {category === 'all' ? 'Todas' : category}
            </button>
          ))}
        </div>
      )}

      {/* Gallery Grid */}
      <div className={`${columnClasses[columns as keyof typeof columnClasses]} ${gapClasses[gap as keyof typeof gapClasses]} space-y-${gap}`}>
        {filteredImages.map((image, index) => (
          <motion.div
            key={image.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
            className="break-inside-avoid relative group cursor-pointer"
            onClick={() => enableLightbox && setSelectedImage(image)}
          >
            {/* Image Container */}
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10">
              {/* Placeholder Image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full mx-auto mb-3 flex items-center justify-center">
                    <Filter className="w-6 h-6 text-white" />
                  </div>
                  <p className="font-semibold text-gray-900 dark:text-white">
                    {image.title || 'Imagen'}
                  </p>
                  {image.category && (
                    <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                      {image.category}
                    </p>
                  )}
                </div>
              </div>

              {/* Overlay */}
              {enableLightbox && (
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <ZoomIn className="w-8 h-8 text-white" />
                </div>
              )}
            </div>

            {/* Image Info */}
            {(image.title || image.description) && (
              <div className="mt-3">
                {image.title && (
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    {image.title}
                  </h3>
                )}
                {image.description && (
                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                    {image.description}
                  </p>
                )}
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {/* No Images Message */}
      {filteredImages.length === 0 && (
        <div className="text-center py-12">
          <Filter className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-600 dark:text-gray-400">
            No hay imágenes en esta categoría.
          </p>
        </div>
      )}

      {/* Lightbox */}
      {selectedImage && enableLightbox && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="relative max-w-4xl w-full max-h-[90vh] overflow-auto"
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
              aria-label="Cerrar"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden">
              {/* Image */}
              <div className="aspect-video bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <div className="text-center text-white p-8">
                  <div className="w-32 h-32 bg-white/20 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <Filter className="w-16 h-16" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">
                    {selectedImage.title || 'Imagen'}
                  </h3>
                  <p className="text-white/80">
                    {selectedImage.description || 'Descripción de la imagen'}
                  </p>
                </div>
              </div>

              {/* Image Info */}
              <div className="p-6">
                <div className="flex flex-wrap gap-4 justify-between items-start mb-4">
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                      {selectedImage.title || 'Sin título'}
                    </h4>
                    {selectedImage.category && (
                      <p className="text-gray-600 dark:text-gray-300">
                        Categoría: {selectedImage.category}
                      </p>
                    )}
                  </div>
                  <span className="px-3 py-1 bg-primary/10 text-primary dark:text-primary-light rounded-full text-sm">
                    ID: {selectedImage.id}
                  </span>
                </div>

                <p className="text-gray-700 dark:text-gray-300">
                  {selectedImage.description || 
                    'Esta imagen se cargará dinámicamente desde una API externa para facilitar la gestión del contenido.'}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}
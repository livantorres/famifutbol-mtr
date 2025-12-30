'use client';

import { memo } from 'react';
import { motion } from 'framer-motion';
import { Target } from 'lucide-react';

interface LoadingSpinnerProps {
  fullScreen?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  message?: string;
  showLogo?: boolean;
}

const LoadingSpinner = memo(function LoadingSpinner({
  fullScreen = true,
  size = 'md',
  message = 'Cargando...',
  showLogo = true
}: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-20 h-20'
  };

  const content = (
    <div className="flex flex-col items-center justify-center">
      {showLogo && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 200, damping: 15 }}
          className="mb-6"
        >
          <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
            <Target className="w-8 h-8 text-white" />
          </div>
        </motion.div>
      )}

      <div className="flex items-center justify-center space-x-4">
        {/* Spinner principal */}
        <div className="relative">
          <div className={`${sizeClasses[size]} border-4 border-gray-200 dark:border-gray-700 rounded-full`} />
          <motion.div
            className={`${sizeClasses[size]} border-4 border-primary border-t-transparent rounded-full absolute top-0 left-0`}
            animate={{ rotate: 360 }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          
          {/* Pelotita que gira alrededor */}
          <motion.div
            className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"
            animate={{ rotate: 360 }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <div className="w-3 h-3 bg-secondary rounded-full" />
          </motion.div>
        </div>

        {/* Puntos animados */}
        <div className="flex space-x-1">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-2 h-2 bg-primary rounded-full"
              animate={{ y: [0, -6, 0] }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      </div>

      {/* Mensaje */}
      {message && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-6 text-gray-600 dark:text-gray-400 font-medium"
        >
          {message}
        </motion.p>
      )}

      {/* Barra de progreso opcional */}
      <div className="mt-8 w-64 max-w-full">
        <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-primary to-secondary"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
      </div>

      {/* Texto animado */}
      <motion.div
        className="mt-4"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <p className="text-sm text-gray-500 dark:text-gray-500 text-center">
          Preparando la experiencia FAMIFUTBOL...
        </p>
      </motion.div>
    </div>
  );

  if (fullScreen) {
    return (
      <div className="fixed inset-0 bg-white dark:bg-gray-900 z-50 flex items-center justify-center">
        {content}
        
        {/* Fondo animado */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-secondary/5 rounded-full animate-pulse delay-1000" />
          <div className="absolute top-3/4 left-1/3 w-32 h-32 bg-accent/5 rounded-full animate-pulse delay-500" />
        </div>
      </div>
    );
  }

  return (
    <div className="py-12">
      {content}
    </div>
  );
});

// Variantes del spinner
export const Spinner = {
  Simple: memo(function SimpleSpinner() {
    return (
      <div className="flex items-center justify-center">
        <div className="w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }),

  Dots: memo(function DotsSpinner() {
    return (
      <div className="flex space-x-1">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="w-2 h-2 bg-primary rounded-full"
            animate={{ scale: [1, 1.5, 1] }}
            transition={{
              duration: 0.6,
              repeat: Infinity,
              delay: i * 0.2
            }}
          />
        ))}
      </div>
    );
  }),

  Pulse: memo(function PulseSpinner() {
    return (
      <div className="flex items-center justify-center">
        <motion.div
          className="w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-full"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
    );
  }),

  Soccer: memo(function SoccerSpinner() {
    return (
      <div className="relative">
        <div className="w-12 h-12 border-4 border-gray-200 rounded-full" />
        <motion.div
          className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full absolute top-0 left-0"
          animate={{ rotate: 360 }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <div className="absolute inset-2 bg-white rounded-full flex items-center justify-center">
          <Target className="w-4 h-4 text-primary" />
        </div>
      </div>
    );
  })
};

// Skeleton loader para contenido
export const SkeletonLoader = memo(function SkeletonLoader({
  type = 'card',
  count = 1,
  className = ''
}: {
  type?: 'card' | 'text' | 'image' | 'button';
  count?: number;
  className?: string;
}) {
  const renderSkeleton = () => {
    switch (type) {
      case 'card':
        return (
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 animate-pulse">
            <div className="space-y-4">
              <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-3/4" />
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2" />
              <div className="space-y-3">
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded" />
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6" />
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-4/6" />
              </div>
              <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded w-1/3" />
            </div>
          </div>
        );

      case 'text':
        return (
          <div className="space-y-3 animate-pulse">
            <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-full" />
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6" />
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-4/6" />
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4" />
          </div>
        );

      case 'image':
        return (
          <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-xl animate-pulse" />
        );

      case 'button':
        return (
          <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse w-32" />
        );

      default:
        return null;
    }
  };

  return (
    <div className={className}>
      {Array.from({ length: count }).map((_, index) => (
        <div key={index} className={type !== 'button' && index > 0 ? 'mt-4' : ''}>
          {renderSkeleton()}
        </div>
      ))}
    </div>
  );
});

// Loading overlay para secciones específicas
export const LoadingOverlay = memo(function LoadingOverlay({
  isLoading,
  children,
  message
}: {
  isLoading: boolean;
  children: React.ReactNode;
  message?: string;
}) {
  if (!isLoading) return <>{children}</>;

  return (
    <div className="relative">
      <div className="absolute inset-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-10 flex items-center justify-center">
        <div className="text-center">
          <Spinner.Simple />
          {message && (
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              {message}
            </p>
          )}
        </div>
      </div>
      {children}
    </div>
  );
});

export default LoadingSpinner;
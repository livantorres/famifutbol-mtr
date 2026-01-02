import { Suspense } from 'react';
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import Gallery from '@/components/sections/Gallery';
import Features from '@/components/sections/Features';
import CTA from '@/components/sections/CTA';
import LoadingSpinner, { SkeletonLoader } from '@/components/ui/LoadingSpinner';

// Componente de fallback para secciones que pueden cargarse lazy
function PageFallback() {
  return (
    <div className="min-h-screen">
      {/* Solo mostramos skeleton para las secciones que están en Suspense */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <SkeletonLoader type="text" count={2} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {Array.from({ length: 6 }).map((_, i) => (
              <SkeletonLoader key={i} type="card" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      {/* Hero carga inmediatamente - SIN SUSPENSE */}
      <Hero />
      
      {/* El resto de secciones pueden cargarse lazy */}
      <Suspense fallback={<PageFallback />}>
        <Services />
        <Gallery />
        <Features />
        <CTA />
      </Suspense>
    </main>
  );
}
'use client';

import { memo } from 'react';
import Link from 'next/link';
import { 
  Target, 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Instagram, 
  Twitter, 
  Youtube 
} from 'lucide-react';

const Footer = memo(function Footer() {
  return (
    /* Usamos el azul exacto #003366 para que no cambie en dark mode */
    <footer className="bg-[#003366] text-white selection:bg-white/20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Logo y Descripción */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-white/10 rounded-lg">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold tracking-tight">FAMIFUTBOL</h2>
            </div>
            <p className="text-blue-100/80 leading-relaxed">
              Más de 5 años formando campeones en valores, disciplina y excelencia deportiva.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Instagram, Twitter, Youtube].map((Icon, index) => (
                <a 
                  key={index}
                  href="#" 
                  className="p-2.5 bg-white/5 rounded-full hover:bg-white/20 transition-all hover:-translate-y-1"
                >
                  <Icon className="w-5 h-5 text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-lg font-bold mb-6 border-b border-white/10 pb-2 inline-block">Contacto</h3>
            <div className="space-y-5">
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-white/5 rounded-lg"><Phone className="w-5 h-5" /></div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-blue-200">Teléfono</p>
                  <p className="text-white font-medium">+57 (321) 836-1970</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-white/5 rounded-lg"><Mail className="w-5 h-5" /></div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-blue-200">Email</p>
                  <p className="text-white font-medium">info@famifutbol.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-white/5 rounded-lg"><MapPin className="w-5 h-5" /></div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-blue-200">Dirección</p>
                  <p className="text-white font-medium">Av. Deportiva 123, Ciudad</p>
                </div>
              </div>
            </div>
          </div>

          {/* Enlaces Rápidos */}
          <div>
            <h3 className="text-lg font-bold mb-6 border-b border-white/10 pb-2 inline-block">Explorar</h3>
            <ul className="space-y-3">
              {[
                { name: 'Programas y Servicios', href: '/servicios' },
                { name: 'Galería de Fotos', href: '/galeria' },
                { name: 'Nuestros Entrenadores', href: '/entrenadores' },
                { name: 'Planes y Precios', href: '/precios' },
                { name: 'Contacto', href: '/contacto' }
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-blue-100/70 hover:text-white transition-colors flex items-center group">
                    <span className="w-0 group-hover:w-2 h-0.5 bg-white mr-0 group-hover:mr-2 transition-all"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Horarios */}
          <div>
            <h3 className="text-lg font-bold mb-6 border-b border-white/10 pb-2 inline-block">Horarios</h3>
            <div className="space-y-4 bg-white/5 p-4 rounded-2xl">
              <div className="flex justify-between items-center">
                <span className="text-blue-100/70">Lun - Vie</span>
                <span className="font-semibold text-white">3:00 - 8:00 PM</span>
              </div>
              <div className="flex justify-between items-center border-t border-white/10 pt-3">
                <span className="text-blue-100/70">Sábados</span>
                <span className="font-semibold text-white">8:00 - 2:00 PM</span>
              </div>
              <div className="flex justify-between items-center border-t border-white/10 pt-3">
                <span className="text-blue-100/70">Domingos</span>
                <span className="font-bold text-red-300">Cerrado</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-blue-100/50 text-sm">
              © {new Date().getFullYear()} <span className="text-white font-semibold">FAMIFUTBOL</span>. Todos los derechos reservados.
            </p>
            <div className="flex space-x-8 text-sm">
              <Link href="/privacidad" className="text-blue-100/50 hover:text-white transition-colors">Privacidad</Link>
              <Link href="/terminos" className="text-blue-100/50 hover:text-white transition-colors">Términos</Link>
              <Link href="/cookies" className="text-blue-100/50 hover:text-white transition-colors">Cookies</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
});

export default Footer;
'use client';

import { useState, useEffect, memo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Menu,
  X,
  ChevronDown,
  Target,
  User,
  Users,
  Trophy,
  Calendar, Sun, Moon
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Button } from '../ui/button';
import { useTheme } from 'next-themes';

const servicesMenu = [
  { title: 'Fútbol Base', description: '4–6 años', icon: <User className="w-5 h-5" /> },
  { title: 'Tecnificación', description: '7–12 años', icon: <Users className="w-5 h-5" /> },
  { title: 'Competitivo', description: '13–18 años', icon: <Trophy className="w-5 h-5" /> },
  { title: 'Campus', description: 'Vacacionales', icon: <Calendar className="w-5 h-5" /> },
];

const Header = memo(function Header() {
  const { setTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Clase dinámica para el color de texto principal
  const textColor = scrolled ? 'text-foreground' : 'text-white';
  const textColorMuted = scrolled ? 'text-muted-foreground' : 'text-white/70';

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-background/80 backdrop-blur-md border-b border-border shadow-elegant py-0'
          : 'bg-transparent py-2'
      }`}
    >
      <nav className="container mx-auto px-4 h-16 lg:h-20 flex items-center justify-between">
        
        {/* LOGO */}
<Link href="/" className="flex items-center space-x-3 group">
  <motion.div 
    className="relative w-11 h-11 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-primary/20 transition-shadow overflow-hidden"
    whileHover={{ scale: 1.05, rotate: 5 }}
    whileTap={{ scale: 0.95 }}
  >
    {/* Versión mini del logo */}
    <div className="bg-white rounded-xl relative w-8 h-8">
      <Image
        src="/images/logo.webp" // Crea una versión mini de 32x32px
        alt="Logo de FAMIFUTBOL"
        width={32}
        height={32}
        priority
        className="object-contain"
      />
    </div>
  </motion.div>
  <div>
    <h1 className={`text-xl lg:text-2xl font-bold transition-colors duration-300 ${textColor}`}>
      FAMI<span className={scrolled ? 'text-primary' : 'text-[#FFD700]'}>FUTBOL</span>
    </h1>
    <p className={`text-[10px] uppercase tracking-widest font-bold transition-colors duration-300 ${textColorMuted}`}>
      Formando Campeones
    </p>
  </div>
</Link>

        {/* MENU DESKTOP */}
        <ul className={`hidden lg:flex items-center gap-8 font-medium transition-colors duration-300 ${textColor}`}>
          <li>
            <Link href="/" className="hover:text-primary transition-colors">Inicio</Link>
          </li>

          {/* Servicios */}
          <li
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button className="flex items-center gap-1 hover:text-primary transition-colors cursor-pointer outline-none">
              Servicios 
              <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`} />
            </button>

            <AnimatePresence>
              {servicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute left-1/2 top-full mt-2 -translate-x-1/2 w-[400px] rounded-2xl bg-card border border-border shadow-elegant-lg p-3"
                >
                  <div className="grid grid-cols-2 gap-2">
                    {servicesMenu.map((item) => (
                      <Link
                        key={item.title}
                        href="#"
                        className="flex items-center gap-3 p-3 rounded-xl hover:bg-muted transition-colors group"
                      >
                        <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                          {item.icon}
                        </div>
                        <div>
                          <p className="font-semibold text-sm text-foreground">{item.title}</p>
                          <span className="text-xs text-muted-foreground">{item.description}</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </li>

          <li><Link href="#galeria" className="hover:text-primary transition-colors">Galería</Link></li>
          <li><Link href="#precios" className="hover:text-primary transition-colors">Precios</Link></li>
          <li><Link href="#contacto" className="hover:text-primary transition-colors">Contacto</Link></li>
        </ul>

        {/* ACCIONES */}
        <div className="hidden lg:flex items-center gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button 
                variant="ghost" 
                size="icon" 
                className={`rounded-full transition-colors duration-300 ${scrolled ? 'text-foreground' : 'text-white hover:bg-white/10'}`}
              >
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-card border-border">
              <DropdownMenuItem onClick={() => setTheme("light")}>Claro</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")}>Oscuro</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("system")}>Sistema</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Link
            href="#contacto"
            className={`px-6 py-2.5 rounded-full font-bold shadow-elegant transition-all active:scale-95 ${
              scrolled 
                ? 'bg-primary text-primary-foreground' 
                : 'bg-white text-[#003366] hover:bg-opacity-90'
            }`}
          >
            Inscríbete
          </Link>
        </div>

        {/* MOBILE TOGGLE */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`lg:hidden p-2 rounded-xl transition-colors duration-300 ${
            scrolled ? 'bg-muted text-foreground' : 'bg-white/10 text-white'
          }`}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {/* MENÚ MOBILE */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background border-t border-border overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4">
              {['Inicio', 'Servicios', 'Galería', 'Precios', 'Contacto'].map(
                (item) => (
                  <Link
                    key={item}
                    href="/"
                    className="block text-lg font-medium text-foreground hover:text-primary transition-colors"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item}
                  </Link>
                )
              )}
              <div className="pt-4 border-t border-border flex flex-col gap-4">
                 <div className="flex justify-between items-center">
                    <span className="text-muted-foreground font-medium">Modo visual</span>
                    <div className="flex gap-2">
                       <Button variant="outline" size="sm" onClick={() => setTheme('light')}>Claro</Button>
                       <Button variant="outline" size="sm" onClick={() => setTheme('dark')}>Oscuro</Button>
                    </div>
                 </div>
                <Link
                  href="/inscripcion"
                  className="w-full py-4 text-center bg-primary text-primary-foreground rounded-2xl font-bold shadow-lg"
                  onClick={() => setMenuOpen(false)}
                >
                  Inscríbete ahora
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
});

export default Header;
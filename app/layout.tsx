import type { Metadata } from "next";
import { Inter, Montserrat, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ScrollToTop from '@/components/layout/ScrollToTop';
import { ThemeProvider } from "@/components/theme-provider"



const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
});
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'FAMIFUTBOL - Escuela de Fútbol Formando Campeones',
  description: 'Escuela de fútbol para niños y jóvenes de 4 a 18 años. Formación deportiva integral con valores, en instalaciones modernas y con entrenadores profesionales.',
  keywords: 'fútbol infantil, escuela de fútbol, fútbol juvenil, entrenamiento fútbol, campus fútbol, torneos fútbol',
  authors: [{ name: 'FAMIFUTBOL' }],
  creator: 'FAMIFUTBOL',
  publisher: 'FAMIFUTBOL',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://famifutbol.com',
    title: 'FAMIFUTBOL - Escuela de Fútbol Formando Campeones',
    description: 'Formando Campeones, Creando Valores. Escuela de fútbol para niños y jóvenes de 4 a 18 años.',
    siteName: 'FAMIFUTBOL',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'FAMIFUTBOL - Escuela de Fútbol',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FAMIFUTBOL - Escuela de Fútbol',
    description: 'Formando Campeones, Creando Valores',
    images: ['/twitter-image.jpg'],
    creator: '@famifutbol',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="es" className={`${inter.variable} ${montserrat.variable} w-full max-w-full overflow-x-hidden`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        
      </head>
      <body suppressHydrationWarning className="w-full max-w-full overflow-x-hidden m-0 p-0">
        <ThemeProvider attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange>
          {/* Skip to Content Link */}
          {/*<a href="#main-content" className="skip-to-content">
            Saltar al contenido principal
          </a>*/}
          
          <div className="w-full max-w-full overflow-x-hidden">
            <Header />
            <main suppressHydrationWarning id="main-content" className="min-h-screen w-full max-w-full overflow-x-hidden">
              {children}
            </main>
            <Footer />
            <ScrollToTop />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

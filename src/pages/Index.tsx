import { Helmet } from 'react-helmet-async';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { GallerySection } from '@/components/sections/GallerySection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { ContactSection } from '@/components/sections/ContactSection';

const Index = () => {
  return (
    <>
      <Helmet>
        {/* Titel & Meta Description */}
        <title>Barbershop Bochum | Jack Barber Wattenscheid</title>
        <meta
          name="description"
          content="Besuche unseren Premium Barbershop Jack Barber Wattenscheid in Bochum für erstklassige Haarschnitte, Bartpflege und individuelle Styles. Jetzt Termin buchen!"
        />
        <meta
          name="keywords"
          content="Barbershop, Herrenfriseur, Haarschnitt, Bartpflege, Rasur, Bochum, Wattenscheid"
        />
        <link rel="canonical" href="https://jackbarber-wattenscheid.de" />

        {/* Open Graph */}
        <meta property="og:title" content="Jack Barber Wattenscheid | Premium Barbershop Bochum" />
        <meta
          property="og:description"
          content="Erstklassige Haarschnitte und Bartpflege für den modernen Gentleman in Bochum Wattenscheid."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://jackbarber-wattenscheid.de" />
        <meta property="og:image" content="https://jackbarber-wattenscheid.de/images/og-image.png" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Jack Barber Wattenscheid | Premium Barbershop Bochum" />
        <meta
          name="twitter:description"
          content="Erleben Sie erstklassige Haarschnitte und Bartpflege für den modernen Gentleman."
        />
        <meta name="twitter:image" content="https://jackbarber-wattenscheid.de/images/og-image.png" />

        {/* Schema.org LocalBusiness */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Barbershop",
            "name": "Jack Barber Wattenscheid",
            "image": "https://jackbarber-wattenscheid.de/images/logo.png",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Westenfelder Str. 2",
              "addressLocality": "Bochum",
              "postalCode": "44866",
              "addressCountry": "DE"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "51.4818",
              "longitude": "7.2162"
            },
            "url": "https://jackbarber-wattenscheid.de",
            "telephone": "+49 176 46651862",
            "openingHours": "Mo-Fr 09:00-19:00, Sa 09:00-18:00",
            "priceRange": "€€",
            "servesCuisine": "Barbershop Services",
            "sameAs": [
              "https://www.facebook.com/jackbarberwattenscheid",
              "https://www.instagram.com/jackbarberwattenscheid"
            ]
          })}
        </script>
      </Helmet>

      {/* Navigation */}
      <Navigation />

      <main>
        <HeroSection />
        <ServicesSection />
        <GallerySection />
        <TestimonialsSection />
        <ContactSection />
      </main>

      <Footer />
    </>
  );
};

export default Index;


import AboutUs from "@/src/components/landing/about-us";
import ContactUs from "@/src/components/landing/contact-us";
import Hero from "@/src/components/landing/hero";
import Services from "@/src/components/landing/services";
import Gallery from "@/src/components/landing/gallery";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <AboutUs />
      <Gallery />
      <ContactUs />
    </main>
  );
}

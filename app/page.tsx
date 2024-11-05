import AboutUs from "@/components/landing/about-us";
import ContactUs from "@/components/landing/contact-us";
import Hero from "@/components/landing/hero";
import Services from "@/components/landing/services";
import Gallery from "@/components/landing/gallery";

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

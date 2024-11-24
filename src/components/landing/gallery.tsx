import { SECTIONS } from "@/src/constants";
import SectionHeader from "../ui/section-header";

import Gallery1 from "@/src/assets/gallery/Gallery1.jpg";
import Gallery2 from "@/src/assets/gallery/Gallery2.png";
import Gallery3 from "@/src/assets/gallery/Gallery3.png";
import Gallery4 from "@/src/assets/gallery/Gallery4.jpg";
import Gallery5 from "@/src/assets/gallery/Gallery5.png";
import Gallery6 from "@/src/assets/gallery/Gallery6.jpg";
import Gallery7 from "@/src/assets/gallery/Gallery7.png";
import Gallery8 from "@/src/assets/gallery/Gallery8.jpg";

import ImageCard from "../ui/image-card";

const images = [
  { src: Gallery1, alt: "gallery-1" },
  { src: Gallery2, alt: "gallery-2" },
  { src: Gallery3, alt: "gallery-3" },
  { src: Gallery4, alt: "gallery-4" },
  { src: Gallery5, alt: "gallery-5" },
  { src: Gallery6, alt: "gallery-6" },
  { src: Gallery7, alt: "gallery-7" },
  { src: Gallery8, alt: "gallery-8" },
];

const Gallery = () => {
  return (
    <section id={SECTIONS.GALLERY} className="w-full scroll-m-32">
      <div className="container mx-auto my-7 md:my-[60px] flex flex-col gap-10 md:gap-[70px] px-4">
        <SectionHeader title="Galéria" />
        <div className="flex gap-6 flex-wrap items-center justify-center">
          {images.map((image) => (
            <ImageCard key={image.alt} src={image.src} alt={image.alt} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;

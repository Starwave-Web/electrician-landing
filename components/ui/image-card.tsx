import Image, { StaticImageData } from "next/image";

const ImageCard = ({ src, alt }: { src: StaticImageData; alt: string }) => {
  return <Image className="rounded-[10px] sm:max-w-[283px] sm:aspect-square object-cover" src={src} alt={alt} />;
};

export default ImageCard;

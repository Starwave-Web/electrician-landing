import Image, { type StaticImageData } from "next/image";

const ServiceCard = ({
  id,
  image,
  title,
}: {
  id: string;
  image: StaticImageData;
  title: string;
}) => {
  return (
    <div className="">
      <Image src={image} alt={id} />
      <div>
        <h3>{title}</h3>
      </div>
    </div>
  );
};

export default ServiceCard;

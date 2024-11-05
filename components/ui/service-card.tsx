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
    <div className=" bg-white shadow-lg rounded-[30px] w-[322px] h-[312px]">
      <Image className="w-full h-2/3 rounded-t-[30px]" src={image} alt={id} />
      <div className="h-1/3 flex items-start justify-center text-center mt-2 p-2">
        <h3 className="text-[1.25rem]/[1.5rem] font-semibold uppercase mb-12">{title}</h3>
      </div>
    </div>
  );
};

export default ServiceCard;

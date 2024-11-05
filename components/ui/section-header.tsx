

const SectionHeader = ({ id, title }: { id?: string; title: string }) => {
  return (
    <div>
      <h2 data-id={id} className="text-primary-red id font-black data-[id=contactus]:text-white text-[2rem]/[1.91rem] md:text-[6rem]/[5.73rem]">
        {title}
      </h2>
    </div>
  );
};

export default SectionHeader;



const SectionHeader = ({ id, title }: { id?: string; title: string }) => {
  return (
    <div>
      <h2 id={id} className="text-primary-red font-black text-[2rem]/[1.91rem] md:text-[6rem]/[5.73rem]">
        {title}
      </h2>
    </div>
  );
};

export default SectionHeader;

import { SECTIONS } from "@/src/constants";
import { LogoHuge } from "../icons/landing/hero";
import CTAButtons from "../ui/cta-buttons";

const Hero = () => {
  return (
    <section
      id={SECTIONS.HERO}
      className="bg-hero-bg bg-cover min-h-[550px] md:min-h-[973px] -mt-[102px] pt-[102px]"
    >
      <div className="container flex justify-center 2xl:justify-end mx-auto">
        <div className="flex flex-col gap-8 bg-[#f2f2f2]/50 backdrop-blur-sm 2xl:bg-transparent 2xl:backdrop-blur-0 p-6 rounded-[12px] mx-4 my-[28px] md:my-[89px]">
          <LogoHuge className="hidden lg:block mb-8 " />
          <div>
            <h4 className="text-[2rem]/[2.375rem] font-light text-primary-grey font-inter">
              Azonnali
            </h4>
            <h1 className="text-[32px]/[26.4208px] lg:text-[7.1875rem]/[6.0734rem] text-primary-red font-black font-inter">
              Villanyszerelés
            </h1>
          </div>
          <div className="flex flex-col gap-[20px]">
            <div className="flex flex-col gap-8 max-w-[451px] text-[1rem]/[1.5rem] text-primary-grey font-medium">
              <p>
                Sürgősségi hibaelhárítás non-stop, a nap 24 órájában! Kiszállás,
                akár 1-2 órán belül!
              </p>
              <p>Budapest és vonzáskörzete, akár hétvégén is.</p>
            </div>
            <CTAButtons />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

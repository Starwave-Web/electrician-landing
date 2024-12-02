import { SECTIONS } from "@/src/constants";
import { LogoHuge, LogoHugeIntl } from "../icons/landing/hero";
import CTAButtons from "../ui/cta-buttons";
import { useLocale, useTranslations } from "next-intl";

const Hero = () => {
  const t = useTranslations("heroSection");
  const locale = useLocale();
  return (
    <section
      id={SECTIONS.HERO}
      className="bg-hero-bg bg-cover min-h-[550px] md:min-h-[973px] -mt-[102px] pt-[102px]"
    >
      <div className="container flex justify-center 2xl:justify-end mx-auto">
        <div className="flex flex-col gap-8 bg-[#f2f2f2]/50 backdrop-blur-sm p-6 rounded-[12px] mx-4 my-[28px] md:my-[89px] w-full">
          {locale === "hu" ? (
            <LogoHuge className="hidden lg:block mb-8 " />
          ) : (
            <LogoHugeIntl className="hidden lg:block mb-8 " />
          )}
          <div>
            <h4 className="text-[2rem]/[2.375rem] font-light text-primary-grey font-inter">
              {t("title1")}
            </h4>
            <h1 className="text-[32px]/[26.4208px] lg:text-[7.1875rem]/[6.0734rem] text-primary-red font-black font-inter">
              {t("title2")}
            </h1>
          </div>
          <div className="flex flex-col gap-[20px]">
            <div className="flex flex-col gap-8 max-w-[451px] text-[1rem]/[1.5rem] text-primary-grey font-medium">
              <p>{t("description1")}</p>
              <p>{t("description2")}</p>
            </div>
            <CTAButtons />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

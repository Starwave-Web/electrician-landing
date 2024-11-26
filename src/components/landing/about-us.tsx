import React from "react";
import { SECTIONS } from "@/src/constants";
import SectionHeader from "../ui/section-header";
import InfoCard from "../ui/info-card";
import CTAButtons from "../ui/cta-buttons";
import { useTranslations } from "next-intl";

const AboutUs = () => {
  const t = useTranslations("aboutUsSection");
  return (
    <section id={SECTIONS.ABOUT_US} className="w-full scroll-m-32">
      <div className="w-full bg-secondary-grey mx-auto px-4">
        <div className="container mx-auto">
          <div className="w-full flex justify-start py-[28px] md:py-[71px]">
            <SectionHeader title={t("title")} />
          </div>
        </div>
      </div>

      <div className=" bg-secondary-grey w-full px-4">
        <div className="container mx-auto flex gap-8 flex-wrap items-center justify-center">
          {t
            .raw("informations")
            .map((information: { id: string; description: string }) => (
              <InfoCard
                key={information.id}
                id={information.id}
                description={information.description}
              />
            ))}
          <CTAButtons />
        </div>
      </div>
      <div className="bg-secondary-grey after:content-[''] rounded-b-custom-curve w-full h-20" />
    </section>
  );
};

export default AboutUs;

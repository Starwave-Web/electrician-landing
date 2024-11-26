import { SECTIONS } from "@/src/constants";
import SectionHeader from "../ui/section-header";
import Service1 from "@/src/assets/services/Service1.png";
import Service2 from "@/src/assets/services/Service2.png";
import Service3 from "@/src/assets/services/Service3.png";
import Service4 from "@/src/assets/services/Service4.png";
import Service5 from "@/src/assets/services/Service5.png";
import Service6 from "@/src/assets/services/Service6.png";
import ServiceCard from "../ui/service-card";
import { useTranslations } from "next-intl";



const Services = () => {
  const t = useTranslations('servicesSection')

  const services = [
    { id: "network", title: t('serviceTitle1'), image: Service1 },
    {
      id: "levers",
      title: t('serviceTitle2'),
      image: Service2,
    },
    { id: "lamps", title: t('serviceTitle3'), image: Service3 },
    {
      id: "connector",
      title: t('serviceTitle4'),
      image: Service4,
    },
    { id: "cameras", title: t('serviceTitle5'), image: Service5 },
    { id: "alarms", title: t('serviceTitle6'), image: Service6 },
  ];
  return (
    <section id={SECTIONS.SERVICES} className="w-full scroll-m-32">
      <div className="container mx-auto px-4">
        <div className="w-full flex justify-center py-[28px] md:py-[71px]">
          <SectionHeader title={t('title')} />
        </div>
      </div>
      <div className="bg-secondary-grey after:content-[''] rounded-t-custom-curve w-full h-20" />
      <div className=" bg-secondary-grey w-full">
        <div className="container mx-auto flex gap-8 flex-wrap items-center justify-center">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              id={service.id}
              title={service.title}
              image={service.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

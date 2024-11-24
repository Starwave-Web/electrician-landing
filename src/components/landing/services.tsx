import { SECTIONS } from "@/src/constants";
import SectionHeader from "../ui/section-header";
import Service1 from "@/src/assets/services/Service1.png";
import Service2 from "@/src/assets/services/Service2.png";
import Service3 from "@/src/assets/services/Service3.png";
import Service4 from "@/src/assets/services/Service4.png";
import Service5 from "@/src/assets/services/Service5.png";
import Service6 from "@/src/assets/services/Service6.png";
import ServiceCard from "../ui/service-card";

const services = [
  { id: "network", title: "Elektromos hálózat kialakítása", image: Service1 },
  {
    id: "levers",
    title: "Villanykapcsolók beszerelése, cseréje",
    image: Service2,
  },
  { id: "lamps", title: "Lámpák felszerelése", image: Service3 },
  {
    id: "connector",
    title: "Konnektorok beszerelése, cseréje",
    image: Service4,
  },
  { id: "cameras", title: "Kamerarendszer telepítés", image: Service5 },
  { id: "alarms", title: "Riasztórendszer telepítés", image: Service6 },
];

const Services = () => {
  return (
    <section id={SECTIONS.SERVICES} className="w-full scroll-m-32">
      <div className="container mx-auto px-4">
        <div className="w-full flex justify-center py-[28px] md:py-[71px]">
          <SectionHeader title="Szolgáltatásaink" />
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

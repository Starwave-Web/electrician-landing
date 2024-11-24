import React from "react";
import { SECTIONS } from "@/src/constants";
import SectionHeader from "../ui/section-header";
import InfoCard from "../ui/info-card";
import CTAButtons from "../ui/cta-buttons";

const informations = [
  {
    id: "1",
    description:
      "Cégünk már 12 éve megbízható villanyszerelő szolgáltatásokat nyújt lakossági és üzleti ügyfeleinknek. Büszkék vagyunk arra, hogy számos elégedett ügyféllel dolgoztunk együtt ez idő alatt.",
  },
  {
    id: "2",
    description:
      "Tapasztalt szakembereink a legkorszerűbb technológiákat és eszközöket használják. Folyamatosan továbbképzéseken veszünk részt, hogy lépést tartsunk a legújabb iparági trendekkel és előírásokkal.",
  },
  {
    id: "3",
    description:
      "Szolgáltatásaink közé tartozik az elektromos hálózatok tervezése, kiépítése és karbantartása. Gyors és hatékony megoldásokat kínálunk minden elektromos problémára, legyen az nagy vagy kicsi.",
  },
  {
    id: "4",
    description:
      "Kiemelt figyelmet fordítunk a biztonságra és a megbízhatóságra. Minden munkánkat a legmagasabb színvonalon végezzük, ügyfeleink elégedettsége a legfontosabb számunkra.",
  },
  {
    id: "5",
    description:
      "Rugalmas és ügyfélközpontú megközelítésünknek köszönhetően egyedi igényekre szabott szolgáltatásokat kínálunk. Minden projektünket az ügyfeleink igényeihez igazítjuk.",
  },
  {
    id: "6",
    description:
      "Célunk, hogy hosszú távú kapcsolatokat építsünk ki ügyfeleinkkel. Bízunk benne, hogy Ön is elégedett lesz szolgáltatásainkkal, és mi lehetünk az Ön megbízható villanyszerelő partnere.",
  },
];

const AboutUs = () => {
  return (
    <section id={SECTIONS.ABOUT_US} className="w-full scroll-m-32">
      <div className="w-full bg-secondary-grey mx-auto px-4">
        <div className="container mx-auto">
          <div className="w-full flex justify-start py-[28px] md:py-[71px]">
            <SectionHeader title="Rólunk" />
          </div>
        </div>
      </div>

      <div className=" bg-secondary-grey w-full px-4">
        <div className="container mx-auto flex gap-8 flex-wrap items-center justify-center">
          {informations.map((information) => (
            <InfoCard
              key={information.id}
              id={information.id}
              description={information.description}
            />
          ))}
          <CTAButtons/>
        </div>
      </div>
      <div className="bg-secondary-grey after:content-[''] rounded-b-custom-curve w-full h-20" />
    </section>
  );
};

export default AboutUs;

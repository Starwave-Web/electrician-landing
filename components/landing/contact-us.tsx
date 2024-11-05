import { SECTIONS } from "@/constants";
import SectionHeader from "../ui/section-header";
import ContactUsForm from "../ui/contact-us-form";
import { EnvelopeIcon, LocationIcon, PhoneIcon } from "../icons/landing/contact-us";

const ContactUs = () => {
  return (
    <section id={SECTIONS.CONTACT_US} className="w-full scroll-m-32 px-4">
      <div className="container mx-auto flex flex-col gap-9 md:gap-[70px] mt-0 md:mt-[50px] px-2 bg-primary-red">
        <div className="w-full flex justify-center py-[28px] md:py-[71px]">
          <SectionHeader id="contactus" title="Kapcsolat" />
        </div>
        <div className="flex flex-col-reverse md:flex-row px-4 gap-7 md:gap-[90px]">
          <div className="w-full md:w-1/2">
            <ContactUsForm />
          </div>
          <div className="flex flex-col gap-7 w-full md:w-1/2">
            <div className="flex items-center gap-5">
              <EnvelopeIcon />
              <p className="text-contact-us font-medium text-white">
                info@harmatcsepp-kert.hu
              </p>
            </div>
            <div className="flex items-center gap-5">
              <PhoneIcon/>
              <p className="text-contact-us font-medium text-white">
                +36 30 609 0155
              </p>
            </div>
            <div className="flex items-center gap-5">
              <LocationIcon />
              <p className="text-contact-us font-medium text-white">
                2440, Százhalombatta Tél utca 41.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto container -mt-px mb-12 md:mb-[81px]">
      <div className="bg-primary-red after:content-[''] rounded-b-custom-curve w-full h-20" />
      </div>
    </section>
  );
};

export default ContactUs;

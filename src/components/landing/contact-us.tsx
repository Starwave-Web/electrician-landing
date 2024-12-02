import { SECTIONS } from "@/src/constants";
import SectionHeader from "../ui/section-header";
import ContactUsForm from "../ui/contact-us-form";
import { EnvelopeIcon, LocationIcon, PhoneIcon } from "../icons/landing/contact-us";
import { useTranslations } from "next-intl";

const ContactUs = () => {
  const t = useTranslations('contactUsSection')

  return (
    <section id={SECTIONS.CONTACT_US} className="w-full scroll-m-32 px-4">
      <div className="container mx-auto flex flex-col gap-9 md:gap-[70px] mt-0 md:mt-[50px] px-2 bg-primary-red mb-12 md:mb-[81px] rounded-b-[20px]">
        <div className="w-full flex justify-center py-[28px] md:py-[71px]">
          <SectionHeader id="contactus" title={t('title')} />
        </div>
        <div className="flex flex-col-reverse md:flex-row px-4 md:px-20 gap-7 md:gap-[90px] mb-[40px] md:mb-[120px]">
          <div className="w-full md:w-1/2">
            <ContactUsForm />
          </div>
          <div className="flex flex-col gap-7 w-full md:w-1/2">
            <div className="flex items-center gap-5">
              <EnvelopeIcon />
              <p className="text-contact-us font-medium text-white">
              {t('contactInfo.email')}
              </p>
            </div>
            <div className="flex items-center gap-5">
              <PhoneIcon/>
              <p className="text-contact-us font-medium text-white">
              {t('contactInfo.phoneNumber')}
              </p>
            </div>
            <div className="flex items-center gap-5">
              <LocationIcon />
              <p className="text-contact-us font-medium text-white">
              {t('contactInfo.address')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;

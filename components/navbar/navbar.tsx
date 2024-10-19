"use client";

import { scrollToSection } from "@/lib/utils";
import { Button } from "../ui/button";

import { useState } from "react";
import { SECTIONS } from "@/constants";
import { CloseIcon, HamburgerMenu, Logo } from "../icons/navbar";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const scrollToSectionMobile = (section: string) => {
    setOpen(!open);
    scrollToSection(section);
  };
  return (
    <nav className="w-full sticky top-0 mx-auto px-4 pt-4 md:px-[18px] md:pt-[18px] z-10">
      <div className="flex justify-between items-center px-[18px] md:px-6 rounded-[12px] container mx-auto h-[84px] bg-gradient-to-tr from-primary-red from-0% to-primary-red/30 to-50% backdrop-blur-sm">
        <div onClick={() => scrollToSection(SECTIONS.HERO)}>
          <Logo className="w-[210px] md:w-full h-auto" />
        </div>
        <div className="lg:flex items-center gap-[29px] hidden">
          <ul className="flex items-center gap-16 text-primary-grey text-[1.25rem]/[1.375rem] font-bold">
            <li className="cursor-pointer">
              <p onClick={() => scrollToSection(SECTIONS.ABOUT_US)}>
                Bemutatkozás
              </p>
            </li>
            <li className="cursor-pointer">
              <p onClick={() => scrollToSection(SECTIONS.SERVICES)}>
                Szolgáltatások
              </p>
            </li>
            <li className="cursor-pointer">
              <p onClick={() => scrollToSection(SECTIONS.GALLERY)}>Galéria</p>
            </li>
          </ul>
          <Button
            onClick={() => scrollToSection(SECTIONS.CONTACT_US)}
          >
            Ajánlatkérés
          </Button>
        </div>
        <div onClick={() => setOpen(!open)} className="lg:hidden">
          <HamburgerMenu />
        </div>
      </div>
      <div
        data-open={open}
        className="hidden data-[open=true]:flex justify-end w-full h-[120vh] bg-black/25 absolute top-0 left-0"
      >
        <div className="w-1/2 h-[120vh] bg-primary-red px-[22px] py-[px] flex flex-col gap-11">
          <div className="self-end mt-14" onClick={() => setOpen(!open)}>
            <CloseIcon />
          </div>
          <div>
            <ul className="flex flex-col gap-8 text-p text-white">
              <li className="cursor-pointer">
                <p onClick={() => scrollToSectionMobile(SECTIONS.HERO)}>
                  Kezdőlap
                </p>
              </li>
              <li className="cursor-pointer">
                <p onClick={() => scrollToSectionMobile(SECTIONS.ABOUT_US)}>
                  Bemutatkozás
                </p>
              </li>
              <li className="cursor-pointer">
                <p onClick={() => scrollToSectionMobile(SECTIONS.SERVICES)}>
                  Szolgáltatások
                </p>
              </li>
              <li className="cursor-pointer">
                <p onClick={() => scrollToSectionMobile(SECTIONS.GALLERY)}>
                  Galéria
                </p>
              </li>
              <li className="cursor-pointer">
                <p onClick={() => scrollToSectionMobile(SECTIONS.CONTACT_US)}>
                  Ajánlatkérés
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

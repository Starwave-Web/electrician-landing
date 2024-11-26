"use client";

import { SECTIONS } from "@/src/constants";
import { scrollToSection } from "@/src/lib/utils";
import React from "react";
import { Button } from "./button";
import { useTranslations } from "next-intl";

const CTAButtons = () => {
  const t = useTranslations("heroSection")

  
  return (
    <div className="flex items-center flex-col sm:flex-row">
      <Button
        onClick={() => scrollToSection(SECTIONS.CONTACT_US)}
        variant="default"
        size="sm"
      >
        {t('getQuoteBtn')}
      </Button>
      <Button
        onClick={() => scrollToSection(SECTIONS.CONTACT_US)}
        variant="ghost"
        size="sm"
      >
        {t('getCallback')}
      </Button>
    </div>
  );
};

export default CTAButtons;

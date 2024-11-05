"use client";

import { SECTIONS } from "@/constants";
import { scrollToSection } from "@/lib/utils";
import React from "react";
import { Button } from "./button";

const CTAButtons = () => {
  return (
    <div className="flex items-center flex-col sm:flex-row">
      <Button
        onClick={() => scrollToSection(SECTIONS.CONTACT_US)}
        variant="default"
        size="sm"
      >
        Ajánlatkérés
      </Button>
      <Button
        onClick={() => scrollToSection(SECTIONS.CONTACT_US)}
        variant="ghost"
        size="sm"
      >
        Visszahivást kérek
      </Button>
    </div>
  );
};

export default CTAButtons;

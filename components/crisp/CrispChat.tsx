"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("0aecb4c9-b444-41b8-9194-b0cf4ac5d5ea");
  }, []);

  return null;
};

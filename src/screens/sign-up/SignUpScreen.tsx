"use client";
import React, { useState } from "react";
import logo from "@/src/assets/images/LogoSign.png";
import Image from "next/image";

export const SignUpScreen = () => {
  const [step, setStep] = useState([
    {
      id: 1,
      title: "Valid your phone",
      enabled: true,
    },
    {
      id: 2,
      title: "Tell about yourself",
      enabled: false,
    },
    {
      id: 3,
      title: "Tell about your company",
      enabled: false,
    },
    {
      id: 4,
      title: "Invite Team Members",
      enabled: false,
    },
  ]);

  return (
    <div className="">
      <div className="bg-[#3F8CFF] px-4 py-6">
        <Image src={logo} alt="logo" />

        <h3 className="text-white font-bold text-4xl mb-6">Get started</h3>

        <div className="flex flex-col items-start gap-2">
          {step.map((item, index) => (
            <div key={item.id} className="flex ">
              <div className="flex flex-col items-center">
                <div
                  className="w-6 h-6 border-[2px] border-white rounded-full mb-1"
                  style={{ background: item.enabled ? "#fff" : "transparent" }}
                ></div>
                {index < step.length - 1 && (
                  <div className="w-[2px] h-6 bg-white"></div>
                )}
              </div>
              <span className="text-white text-lg font-semibold ml-2 ">
                {item.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

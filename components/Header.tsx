import { useRouter } from "next/router";
import React, { FC, useCallback } from "react";
import { BiArrowBack } from "react-icons/bi";
interface HeaderProps {
  label: String;
  showBackArrow?: Boolean;
}
export const Header: FC<HeaderProps> = ({ label, showBackArrow }) => {
  const router = useRouter();
  const handleBack = useCallback(() => {
    router.back();
  }, [router]);
  return (
    <div className="border-b-[1px] border-neutral-800 p-5">
      <div className="flex items-center gap-2">
        {showBackArrow && (
          <BiArrowBack
            color="white"
            size={20}
            className="cursor-pointer hover:opacity-70 transition"
            onClick={handleBack}
          />
        )}
        <h1 className="text-white text-xl font-semibold">{label}</h1>
      </div>
    </div>
  );
};

import useLoginModal from "@/hooks/useLoginModal";
import { useRouter } from "next/router";
import React, { useCallback } from "react";
import { FaFeather } from "react-icons/fa";

export const SidebarTweetButton = () => {
  const router = useRouter();
  const loginModal = useLoginModal();
  const onClick = useCallback(() => {
    loginModal.onOpen();
  }, [loginModal]);
  return (
    <div onClick={onClick}>
      <div className="mt-6 lg:hidden rounded-full h-14 w-14 p-4 flex items-center justify-center bg-sky-500 hover:bg-opacity-80 transition cursor-pointer">
        <FaFeather size={24} color="white" />
      </div>
      <div className="mt-6 hidden rounded-full px-4 py-2 lg:block bg-sky-500 hover:bg-opacity-80 transition cursor-pointer">
        <p className="text-white hidden lg:block text-center font-semibold">
          Tweet
        </p>
      </div>
    </div>
  );
};

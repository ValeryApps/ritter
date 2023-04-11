import useUser from "@/hooks/useUser";
import Image from "next/image";
import { useRouter } from "next/router";
import { FC, useCallback } from "react";
interface AvatarProps {
  userId: string;
  isLarge?: boolean;
  hasBorder?: boolean;
}
const Avatar: FC<AvatarProps> = ({ userId, isLarge, hasBorder }) => {
  const router = useRouter();
  const { data: fetchedUser } = useUser(userId);
  const onClick = useCallback(
    (event: any) => {
      event.stopPropagation();
      const url = `/users/${userId}`;
      router.push(url);
    },
    [router, userId]
  );
  return (
    <div
      className={`
  ${hasBorder ? "border-4 border-black" : ""}
  ${isLarge ? "h-32 w-32" : "h-12 w-12"}
  rounded-full hover:opacity-90 transition cursor-pointer relative
  `}
    >
      <Image
        fill
        src={fetchedUser?.profileImage || "/images/placeholder.png"}
        alt="avatar"
        onClick={onClick}
        // style={{ objectFit: "cover", borderRadius: "100%" }}
        className="object-cover rounded-full"
      />
    </div>
  );
};

export default Avatar;

import useCurrentUser from "@/hooks/useCurrentUser";
import useNotification from "@/hooks/useNotification";
import { useEffect } from "react";
import { BsTwitter } from "react-icons/bs";

export const NotificationFeed = () => {
  const { data: currentUser, mutate: mutateCurrentUser } = useCurrentUser();
  const { data: fetchedNotification = [] } = useNotification(currentUser?.id);
  useEffect(() => {
    mutateCurrentUser();
  }, [mutateCurrentUser]);

  if (fetchedNotification.length === 0) {
    return (
      <div className="text-neutral-600 text-center p-6 text-xl">
        No Notifications
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      {fetchedNotification.map((notification: Record<string, any>) => (
        <div
          key={notification.id}
          className="flex items-center p-6 gap-4 border-b-[1px] border-neutral-800"
        >
          <BsTwitter color="white" size={32} />
          <p className="text-white">{notification.body}</p>
        </div>
      ))}
    </div>
  );
};

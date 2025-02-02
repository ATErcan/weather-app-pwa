import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { IPushNotificationModalProps } from "@/lib/types/props.type";
import { DialogClose } from "@radix-ui/react-dialog";

export default function PushNotificationModal({
  subscription,
  subscribeToPush,
  unsubscribeFromPush,
}: IPushNotificationModalProps) {
  const handleSubscription = async () => {
    if(subscription) {
      await unsubscribeFromPush();
    } else {
      await subscribeToPush();
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="text-zinc-950">
          Push Notifications
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Push Notifications</DialogTitle>
          <DialogDescription>
            {subscription
              ? "You are subscribed to push notifications."
              : "You are not subscribed to push notifications."}
          </DialogDescription>
        </DialogHeader>
        <DialogClose asChild>
          <Button type="button" onClick={handleSubscription}>
            {subscription ? "Unsubscribe" : "Subscribe"}
          </Button>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
}


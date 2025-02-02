'use client';

import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import PushNotificationModal from "../ui/modals/PushNotificationModal";

function urlBase64ToUint8Array(base64String: string) {
  const padding = '='.repeat((4 - (base64String.length % 4)) % 4)
  const base64 = (base64String + padding).replace(/-/g, '+').replace(/_/g, '/')

  const rawData = window.atob(base64)
  const outputArray = new Uint8Array(rawData.length)

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i)
  }
  return outputArray
}

export default function PushNotificationManager() {
  const [isSupported, setIsSupported] = useState<boolean>(false);
  const [subscription, setSubscription] = useState<PushSubscription | null>(null);

  useEffect(() => {
    if('serviceWorker' in navigator && 'PushManager' in window) {
      setIsSupported(true);
      registerServiceWorker();
    }
  }, []);

  async function registerServiceWorker() {
    const registration = await navigator.serviceWorker.register('/sw.js', {
      scope: '/',
      updateViaCache: 'none'
    });
    const sub = await registration.pushManager.getSubscription();
    setSubscription(sub);
  }

  async function subscribeToPush() {
    const registration = await navigator.serviceWorker.ready;
    const sub = await registration.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: urlBase64ToUint8Array(
        process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY!
      ),
    });

    const keys = {
      p256dh: sub.getKey("p256dh") && btoa(String.fromCharCode(...new Uint8Array(sub.getKey("p256dh")!))),
      auth: sub.getKey("auth") && btoa(String.fromCharCode(...new Uint8Array(sub.getKey("auth")!))),
    };

    const serializedSub = {
      endpoint: sub.endpoint,
      keys,
    };
    setSubscription(sub);

    const response = await fetch("/api/subscribe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(serializedSub),
    });

    if (!response.ok) {
      console.error("Failed to store subscription on the server.");
    } else {
      toast.success("Subscribed to push notifications!", { id: "subscribe" })
    }
  }

  async function unsubscribeFromPush() {
    if (!subscription) {
      console.error("No subscription to unsubscribe.");
      return;
    }

    await subscription.unsubscribe();
    setSubscription(null);

    const response = await fetch("/api/unsubscribe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        endpoint: subscription.endpoint,
      }),
    });

    if (!response.ok) {
      console.error("Failed to remove subscription from the server.");
    } else {
      toast.success("You have unsubscribed from push notifications!", { id: "unsubscribe" });
    }
  }

  if(!isSupported) {
    return <p className="text-sm text-gray-300">Push notifications are not supported in this browser.</p>;
  }

  return (
    <div>
      <PushNotificationModal
        subscription={subscription}
        subscribeToPush={subscribeToPush}
        unsubscribeFromPush={unsubscribeFromPush}
      />
    </div>
  );
}
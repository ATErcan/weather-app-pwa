'use server';

import webpush, { PushSubscription } from "web-push";

import { connectToDatabase } from "@/lib/db/db";
import { Subscription } from "@/lib/db/models/Subscription";

webpush.setVapidDetails(
  "mailto:atercan0658@gmail.com",
  process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY!,
  process.env.VAPID_PRIVATE_KEY!
);

export async function subscribeUser(sub: PushSubscription) {
  await connectToDatabase();

  const subscription = {
    endpoint: sub.endpoint,
    keys: {
      p256dh: sub.keys.p256dh,
      auth: sub.keys.auth,
    },
  };

  await Subscription.updateOne(
    { endpoint: sub.endpoint },
    subscription,
    { upsert: true }
  );

  return { success: true };
}

export async function unsubscribeUser(endpoint: string) {
  await connectToDatabase();

  await Subscription.deleteOne({ endpoint });

  return { success: true };
}

export async function sendNotification(message: string) {
  await connectToDatabase();

  const subscriptions = await Subscription.find();

  const results = await Promise.allSettled(
    subscriptions.map(async (sub) => {
      if (!sub.keys || !sub.keys.p256dh || !sub.keys.auth) {
        console.error(`Invalid subscription keys for endpoint: ${sub.endpoint}`);
        return { success: false, error: "Invalid subscription keys" };
      }
      
      try {
        await webpush.sendNotification(
          {
            endpoint: sub.endpoint,
            keys: sub.keys,
          },
          JSON.stringify({
            title: "Weather Alert",
            body: message,
            icon: "/icons/weather-alert.webp",
          })
        );
        return { success: true };
      } catch (error) {
        console.error("Error sending notification:", error);
        return { success: false, error };
      }
    })
  );

  return { success: true, results };
}
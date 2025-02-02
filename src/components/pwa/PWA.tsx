import InstallPrompt from "./InstallPrompt";
import PushNotificationManager from "./PushNotificationManager";

export default function PWA() {
  return (
    <div>
      <PushNotificationManager />
      <InstallPrompt />
    </div>
  )
}
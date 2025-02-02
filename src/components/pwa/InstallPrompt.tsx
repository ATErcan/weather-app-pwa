'use client';

import { useEffect, useState } from "react";

export default function InstallPrompt() {
  const [isIOS, setIsIOS] = useState<boolean>(false);
  const [isStandalone, setIsStandalone] = useState<boolean>(false);

  useEffect(() => {
    setIsIOS(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      /iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as any).MSStream
    );

    setIsStandalone(window.matchMedia('(display-mode: standalone)').matches);
  }, [])

  if(isStandalone) return null;

  return (
    <div className="max-w-[75rem] mx-auto text-gray-300 text-xs">
      {isIOS && (
        <p>
          To install this app on your iOS device, tap the share button
          <span role="img" aria-label="share icon"> ⎋ </span>
          and then <span dangerouslySetInnerHTML={{ __html: "&quot;Add to Home Screen&quot;" }} />
          <span role="img" aria-label="plus icon"> ➕ </span>.
        </p>
      )}
    </div>
  );
}
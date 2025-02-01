import MapProvider from "@/components/providers/MapProvider";

export default function MapLayout({
  children,
}: {children: React.ReactNode}) {
  return <MapProvider>{children}</MapProvider>;
}

import { SearchParamsProps } from "@/lib/types/props.type";

export default async function Location({ searchParams }: SearchParamsProps) {
  const { lon, lat } = await searchParams;
  
  return <div>Hello</div>;
}
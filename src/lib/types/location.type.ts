export type LocalNames = {
  [languageCode: string]: string;
}

export type Location = {
  name: string;
  local_names: LocalNames | undefined;
  lat: number;
  lon: number;
  country: string;
  state: string | undefined;
};
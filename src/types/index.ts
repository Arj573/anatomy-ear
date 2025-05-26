export type EarSection = 'outer' | 'middle' | 'inner';

export interface DetailPin {
  id: string;
  label: string;
  info: string;
  top: string; // misalnya: "23%"
  left: string; // misalnya: "30%"
}

export type ResponsivePosition = {
  default: [number, number];
  sm?: [number, number];
  md?: [number, number];
  lg?: [number, number];
};

export interface EarPart {
  id: string;
  name: string;
  description: string;
  section: EarSection;
  position: ResponsivePosition | [number, number]; // Percentage coordinates for positioning on the image
  hasMoreDetail?: boolean;
  details?: DetailPin[];
}

export type EarData = {
  [key in EarSection]: EarPart[];
};
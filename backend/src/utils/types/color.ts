// Types
type ColorScheme =
  | 'analogous'
  | 'complementary'
  | 'triadic'
  | 'tetradic'
  | 'monochromatic';

type Mood =
  | 'calm'
  | 'energetic'
  | 'professional'
  | 'playful'
  | 'elegant'
  | 'natural';

type UseCase =
  | 'technology'
  | 'healthcare'
  | 'education'
  | 'finance'
  | 'ecommerce'
  | 'entertainment';

// Interfaces
export interface GenerateColorSystemParams {
  base_color: string;
  mood: Mood;
  color_scheme: ColorScheme;
  palette_size: number;
  brightness_level: number;
  saturation_level: number;
  use_case: UseCase;
  notes?: string;
}

export interface Color {
  id: string;
  hex: string;
  rgb: string;
  hsl: string;
}

export interface ColorSystem {
  id: string;
  title: string;
  description: string;
  notes: string;
  color_scheme: ColorScheme;
  mood: Mood;
  use_case: UseCase;
  brightness_level: number;
  saturation_level: number;
  base_color: Color;
  palette: Color[];
}

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

export interface generateColorSystemParams {
  base_color: string;
  mood: Mood;
  color_scheme: ColorScheme;
  palette_size: number;
  brightness_level: number;
  saturation_level: number;
  use_case: UseCase;
  notes?: string;
}

export interface ColorSystem {
  id: string;
  //user_id: string;
  model_used: string;
  title: string;
  description: string;
  notes: string | null;
  color_scheme: ColorScheme;
  mood: Mood;
  use_case: UseCase;
  brightness_level: number;
  saturation_level: number;
  base_color: string;
  palette: string[]; //uuid[]
}

import { z } from 'zod';

export const GenerateColorSystemSchema = z.object({
  base_color: z.string().nonempty('You must provide a base color'),
  mood: z.string().nonempty('You must provide a mood'),
  color_scheme: z.string().nonempty('You must choose a color scheme'),
  palette_size: z
    .number()
    .min(3, 'Your palette must be at least 3 colors')
    .max(10, 'Your palette must be less than 10 colors'),
  brightness_level: z
    .number()
    .min(0, 'Brightness level cannot be less than 0')
    .max(100, 'Brightness level cannot be more than 100'),
  saturation_level: z
    .number()
    .min(0, 'Saturation level cannot be less than 0')
    .max(100, 'Saturation level cannot be more than 100'),
  use_case: z.string().nonempty('You must provide a use case'),
  notes: z.string(),
});

export type GenerateColorSystemData = z.infer<typeof GenerateColorSystemSchema>;

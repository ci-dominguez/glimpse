import { Request, Response } from 'express';
import { GenerateColorSystemParams, ColorSystem } from '../utils/types/color';

export const getColorSystemById = (req: Request, res: Response) => {};

export const createColorSystem = (
  req: Request<{}, {}, GenerateColorSystemParams>,
  res: Response<ColorSystem>
) => {
  console.log(req.body);

  res.status(201).send({
    id: 'cs123',
    title: 'Example Color System',
    description: 'This is an example of a color system.',
    notes:
      'This is not a real color system, but a mock of what is stored in the database.',
    color_scheme: 'analogous',
    mood: 'calm',
    use_case: 'technology',
    brightness_level: 50,
    saturation_level: 50,
    base_color: {
      id: 'c123',
      hex: '#1e1e1e',
      rgb: '(30,30,30)',
      hsl: '(50 50% 50%)',
    },
    palette: [
      {
        id: 'c123',
        hex: '#1e1e1e',
        rgb: '(30,30,30)',
        hsl: '(50 50% 50%)',
      },
      {
        id: 'c456',
        hex: '#1e1e1e',
        rgb: '(30,30,30)',
        hsl: '(50 50% 50%)',
      },
      {
        id: 'c789',
        hex: '#1e1e1e',
        rgb: '(30,30,30)',
        hsl: '(50 50% 50%)',
      },
    ],
  });
};

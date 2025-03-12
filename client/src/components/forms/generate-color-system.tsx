import { useState } from 'react';
import useColorSystem from '../../hooks/useColorSystem';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  GenerateColorSystemData,
  GenerateColorSystemSchema,
} from '../../lib/validations/colorSystem';

// Values for form options
const moods = [
  {
    value: 'calm',
    label: 'Calm',
  },
  {
    value: 'energetic',
    label: 'Energetic',
  },
  {
    value: 'professional',
    label: 'Professional',
  },
  {
    value: 'playful',
    label: 'Playful',
  },
  {
    value: 'elegant',
    label: 'Elegant',
  },
  {
    value: 'natural',
    label: 'Natural',
  },
];

const colorSchemes = [
  {
    value: 'analogous',
    label: 'Analogous',
  },
  {
    value: 'complementary',
    label: 'Complementary',
  },
  {
    value: 'triadic',
    label: 'Triadic',
  },
  {
    value: 'tetradic',
    label: 'Tetradic',
  },
  {
    value: 'monochromatic',
    label: 'Monochromatic',
  },
];

const useCases = [
  {
    value: 'technology',
    label: 'Technology',
  },
  {
    value: 'healthcare',
    label: 'Healthcare',
  },
  {
    value: 'education',
    label: 'Education',
  },
  {
    value: 'finance',
    label: 'Finance',
  },
  {
    value: 'ecommerce',
    label: 'E-commerce',
  },
  {
    value: 'entertainment',
    label: 'Entertainment',
  },
];

const GenerateColorSystem = () => {
  const [saturation, setSaturation] = useState(50);
  const [brightness, setBrightness] = useState(50);

  const { generateColorSystem, isLoading, error, success } = useColorSystem();

  const { register, handleSubmit, reset } = useForm<GenerateColorSystemData>({
    resolver: zodResolver(GenerateColorSystemSchema),
  });

  const submitForm = async (data: GenerateColorSystemData) => {
    await generateColorSystem(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(submitForm)} className='flex flex-col gap-4'>
      <div className='flex flex-col'>
        <label htmlFor='base_color'>Base Color</label>
        <input
          {...register('base_color')}
          id='base_color'
          type='color'
          defaultValue='#1e1e1e'
          className={`${
            error
              ? 'border-alert'
              : success
              ? 'border-success'
              : 'border-primary/10'
          }`}
        />
      </div>

      <div className='flex flex-col'>
        <label htmlFor='mood'>Mood or Theme</label>
        <select
          {...register('mood')}
          id='mood'
          className={`${
            error
              ? 'border-alert'
              : success
              ? 'border-success'
              : 'border-primary/10'
          }`}
        >
          <option value=''>Select a mood or theme</option>
          {moods.map((mood) => {
            return (
              <option key={mood.value} value={mood.value}>
                {mood.label}
              </option>
            );
          })}
        </select>
      </div>

      <div className='flex flex-col'>
        <label htmlFor='color_scheme'>Color Scheme</label>
        <select
          {...register('color_scheme')}
          id='color_scheme'
          className={`${
            error
              ? 'border-alert'
              : success
              ? 'border-success'
              : 'border-primary/10'
          }`}
        >
          <option value=''>Select a color scheme</option>
          {colorSchemes.map((mood) => {
            return (
              <option key={mood.value} value={mood.value}>
                {mood.label}
              </option>
            );
          })}
        </select>
      </div>

      <div className='flex flex-col'>
        <label htmlFor='palette_size'>Number of colors</label>
        <input
          {...register('palette_size')}
          id='palette_size'
          type='number'
          min={3}
          max={10}
          placeholder='5'
          className={`${
            error
              ? 'border-alert'
              : success
              ? 'border-success'
              : 'border-primary/10'
          }`}
        />
      </div>

      <div className='flex flex-col'>
        <label htmlFor='brightness_level'>Brightness Level</label>
        <input
          {...register('brightness_level')}
          id='brightness_level'
          type='range'
          min={0}
          max={100}
          step={1}
          value={brightness}
          onChange={(e) => setBrightness(Number.parseInt(e.target.value))}
          className={`${
            error
              ? 'border-alert'
              : success
              ? 'border-success'
              : 'border-primary/10'
          }`}
        />
        <p>{brightness}%</p>
      </div>

      <div className='flex flex-col'>
        <label htmlFor='saturation_level'>Saturation Level</label>
        <input
          {...register('saturation_level')}
          id='saturation_level'
          type='range'
          min={0}
          max={100}
          step={1}
          value={saturation}
          onChange={(e) => setSaturation(Number.parseInt(e.target.value))}
          className={`${
            error
              ? 'border-alert'
              : success
              ? 'border-success'
              : 'border-primary/10'
          }`}
        />
        <p>{saturation}%</p>
      </div>

      <div className='flex flex-col'>
        <label htmlFor='use_case'>Industry or Use Case</label>
        <select
          {...register('use_case')}
          id='use_case'
          className={`${
            error
              ? 'border-alert'
              : success
              ? 'border-success'
              : 'border-primary/10'
          }`}
        >
          <option value=''>Select a mood or theme</option>
          {useCases.map((useCase) => {
            return (
              <option key={useCase.value} value={useCase.value}>
                {useCase.label}
              </option>
            );
          })}
        </select>
      </div>

      <div className='flex flex-col'>
        <label htmlFor='notes'>Additional Notes</label>
        <textarea
          {...register('notes')}
          id='notes'
          placeholder='Enter any additional notes or preferences for your color system...'
          className={`${
            error
              ? 'border-alert'
              : success
              ? 'border-success'
              : 'border-primary/10'
          }`}
        />
      </div>

      <button type='submit'>
        {isLoading ? 'Mixing colors...' : 'Generate'}
      </button>
    </form>
  );
};

export default GenerateColorSystem;

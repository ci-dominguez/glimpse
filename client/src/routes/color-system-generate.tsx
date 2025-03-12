import GenerateColorSystem from '../components/forms/generate-color-system';
import AppLayout from '../layouts/app-layout';

const ColorSystemGenerate = () => {
  return (
    <AppLayout>
      <h1 className='text-3xl text-center'>Create a New Color System</h1>
      <GenerateColorSystem />
    </AppLayout>
  );
};

export default ColorSystemGenerate;

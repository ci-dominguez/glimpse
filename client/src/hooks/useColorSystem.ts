import { useState } from 'react';
import { useNavigate } from 'react-router';
import { ColorSystem } from '../lib/types/colorSystem';
import { GenerateColorSystemData } from '../lib/validations/colorSystem';

interface ColorSystemResponse {
  status: 'success' | 'error';
  message: string;
  data: ColorSystem | null;
  errors?: string;
}

const useColorSystem = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);

  const navigate = useNavigate();

  const generateColorSystem = async (params: GenerateColorSystemData) => {
    setIsLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const resp = await fetch(
        `${import.meta.env.VITE_API_URL}/color-systems`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ ...params }),
        }
      );

      const res: ColorSystemResponse = await resp.json();

      if (res.status === 'error' || !res.data) {
        throw new Error(res.errors || res.message);
      }

      // Request was successful. Navigate user to color system details page
      setSuccess(true);
      navigate(`/color-systems/${res.data.id}`);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return { generateColorSystem, isLoading, error, success };
};

export default useColorSystem;

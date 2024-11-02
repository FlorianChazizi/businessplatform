// hooks/useLogin.ts

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useUserStore } from '../../store/useUserStore';

interface LoginData {
  email: string;
  password: string;
}

export function useLogin() {
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const { setUser } = useUserStore(); // Access Zustand's setUser function

  const handleLogin = async (data: LoginData) => {
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        const result = await res.json();
        setUser(result.user); // Update Zustand with user data
        router.push('/'); // Redirect to the homepage
      } else {
        const result = await res.json();
        setError(result.error); // Set error message if login fails
      }
    } catch (err) {
      setError('Something went wrong. Please try again later.');
    }
  };

  return { handleLogin, error };
}

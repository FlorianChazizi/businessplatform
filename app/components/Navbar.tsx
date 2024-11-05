'use client'
import Link from 'next/link';
import { useUserStore } from '../store/useUserStore';
import { useRouter } from 'next/navigation';


export default function Navbar() {
  const { user, clearUser } = useUserStore(); // Access user state and clearUser action
  const router = useRouter();

  const handleLogout = () => {
    clearUser(); // Clear user data in Zustand and local storage
    router.push('/login'); // Redirect to login page or home
  };

  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-white text-2xl font-bold">
          Next Auth
        </Link>
        <ul className="flex space-x-6">
          <li>
            <Link href="/" className="text-gray-300 hover:text-white transition duration-300">
              Home
            </Link>
          </li>
          { user ? (
            <>
            <li>
                <button className="text-gray-300 hover:text-white transition duration-300" onClick={handleLogout}>Logout</button>
            </li>
            </>
          ) : (
            <>
          <li>
            <Link href="/auth/register" className="text-gray-300 hover:text-white transition duration-300">
              Register
            </Link>
          </li>
          <li>
            <Link href="/auth/login" className="text-gray-300 hover:text-white transition duration-300">
              Login
            </Link>
          </li>
          </>
          )}
        </ul>
      </div>
    </nav>
  );
}
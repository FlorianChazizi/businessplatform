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
    <nav className="bg-blue-500 p-4 relative">
      <div className="container mx-auto flex items-center justify-between relative">
        {/* Logo on the left */}
        <Link href="/" className="text-white text-2xl font-bold">
          <h1>Next Auth</h1>
        </Link>
        
        {/* Centered Navigation Links */}
        <ul className="absolute left-1/2 transform -translate-x-1/2 flex space-x-6">
          <li className=''>
            <Link href="/" className="text-lg text-white  font-bold drop-shadow transition duration-500 p-3 rounded-md hover:bg-white hover:text-blue-500">
              Home
            </Link>
          </li>
          { user ? (
            <li>
              <Link href='/' className="text-lg text-white  font-bold drop-shadow transition duration-500 p-3 rounded-md hover:bg-white hover:text-blue-500" onClick={handleLogout}>
                Logout
              </Link>
            </li>
          ) : (
            <>
              <li>
                <Link href="/auth/register" className="text-lg text-white  font-bold drop-shadow transition duration-500 p-3 rounded-md hover:bg-white hover:text-blue-500">
                  Register
                </Link>
              </li>
              <li>
                <Link href="/auth/login" className="text-lg text-white  font-bold drop-shadow transition duration-500 p-3 rounded-md hover:bg-white hover:text-blue-500">
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
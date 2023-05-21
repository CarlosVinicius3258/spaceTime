import { getUser } from '@/lib/auth';
import { cookies } from 'next/headers';
import Image from 'next/image';
import Link from 'next/link';

export function Profile() {
  const isAuthenticated = cookies().has('token');
  console.log("🚀 ~ file: Profile.tsx:7 ~ Profile ~ isAuthenticated:", isAuthenticated);
  const {
    avatarUrl,
    name } = getUser();
  return (
    <div className="flex items-center gap-3 text-left">
      <Image src={ avatarUrl } width={ 40 } height={ 40 } alt='' className='w-10 h-10 rounded-full' />
      <p className="max-w-[180px] text-sm leading-snug">
        { name }
        <a href='/api/auth/logout' className="block text-red-400 hover:text-red-300">
          Quero sair
        </a>
      </p>
    </div>
  );
}
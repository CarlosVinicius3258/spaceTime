import { User } from 'lucide-react';
import Copyright from '@/components/Copyright';
import { Hero } from '@/components/Hero';
import { SignIn } from '@/components/SignIn';
import { EmptyMemories } from '@/components/EmptyMemories';
export default function Home() {
  return (
    <main className="grid grid-cols-2 min-h-screen">
      {/* Left */ }
      <div className='flex flex-col item-start justify-between px-28 py-16 relative overflow-hidden bg-[url(../assets/bg-stars.svg)] bg-cover' >
        {/* Blur */ }
        <div className="absolute right-0 top-1/2 h-[288px] w-[526px] -translate-y-1/2 translate-x-1/2 bg-purple-700 opacity-50 rounded-full blur-full">



        </div>

        {/*Signin */ }
        <SignIn />

        {/* Hero */ }
        <Hero />

        <Copyright />
      </div>
      {/* Right */ }
      <div className='flex flex-col p-16 bg-[url(../assets/bg-stars.svg)] bg-cover'>
        <EmptyMemories />

      </div>
    </main>

  );
}

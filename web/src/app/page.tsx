import { User } from 'lucide-react';
import Copyright from '@/components/Copyright';
import { Hero } from '@/components/Hero';
import { SignIn } from '@/components/SignIn';
import { EmptyMemories } from '@/components/EmptyMemories';
import { Blur } from '@/components/Bluir';
export default function Home() {
  return (
    <main className="grid grid-cols-2 min-h-screen">
      {/* Left */ }
      <div className='flex flex-col item-start justify-between px-28 py-16 relative overflow-hidden bg-[url(../assets/bg-stars.svg)] bg-cover' >
        <Blur />

        <SignIn />

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

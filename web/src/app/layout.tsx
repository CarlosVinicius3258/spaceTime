import { Blur } from '@/components/Blur';
import './globals.css';
import { Roboto_Flex as Roboto, Bai_Jamjuree as BJ } from 'next/font/google';
import { Profile } from '@/components/Profile';
import { SignIn } from '@/components/SignIn';
import { Hero } from '@/components/Hero';
import Copyright from '@/components/Copyright';
import { cookies } from 'next/headers';

const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto' });
const baijajuree = BJ({ subsets: ['latin'], weight: '700', variable: '--font-bai-jamjuree' });
export const metadata = {
  title: 'NLW SpaceTime',
  description: 'Uma cápsula do tempo construída com React, Next.js, TailwindCSS e Typescript.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isAuthenticated = cookies().has('token') && cookies().get('token')?.value !== 'null';
  console.log("🚀 ~ file: layout.tsx:23 ~ isAuthenticated:", isAuthenticated);

  return (
    <html lang="en">
      <body className={ `${roboto.variable} ${baijajuree.variable} font-sans text-gray-100 bg-gray-950` }>

        <main className="grid grid-cols-2 min-h-screen">
          {/* Left */ }
          <div className='flex flex-1 flex-col item-start justify-between px-28 py-16 relative overflow-hidden bg-[url(../assets/bg-stars.svg)] bg-cover' >
            <Blur />

            { isAuthenticated ? <Profile /> : <SignIn /> }

            <Hero />

            <Copyright />
          </div>

          {/* Right */ }
          <div className='flex max-h-screen overflow-y-scroll flex-1 flex-col bg-[url(../assets/bg-stars.svg)] bg-cover'>
            { children }

          </div>
        </main>

      </body>
    </html>
  );
}

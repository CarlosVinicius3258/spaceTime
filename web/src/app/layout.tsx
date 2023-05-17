import './globals.css';
import { Roboto_Flex as Roboto, Bai_Jamjuree as BJ } from 'next/font/google';

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
  return (
    <html lang="en">
      <body className={ `${roboto.variable} ${baijajuree.variable} font-sans text-gray-100 bg-gray-950` }>{ children }</body>
    </html>
  );
}

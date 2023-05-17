import Image from 'next/image';
import { User } from 'lucide-react';
import logo from '../assets/spaceTime-logo.svg';
export default function Home() {
  return (
    <main className="grid grid-cols-2 min-h-screen">
      {/* Left */ }
      <div className='flex flex-col item-start justify-between px-28 py-16 relative overflow-hidden bg-[url(../assets/bg-stars.svg)] bg-cover' >
        {/* Blur */ }
        <div className="absolute right-0 top-1/2 h-[288px] w-[526px] -translate-y-1/2 translate-x-1/2 bg-purple-700 opacity-50 rounded-full blur-full">



        </div>

        {/*Signin */ }
        <a href="" className="flex items-center gap-3 text-left">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-400 transition-colors hover:text-gray-50">

            <User className='h-5 w-5 text-gray-500' />
          </div>
          <p className="max-w-[180px] text-sm leading-snug">
            <span className='underline' >Crie uma conta</span> e salve suas lembranças para o futuro.
          </p>
        </a>

        {/* Hero */ }
        <div className='space-y-5'>
          <Image src={ logo } alt=' NLW SpaceTime ' />
          <div className='max-w-[420px] space-y-1'>
            <h1 className='mt-5 text-5xl font-bold leading-tight'>Sua cápsula do tempo</h1>
            <p className='text-lg leading-relaxed'>Colecione momenos marcantes da sua jornada e compartilhe (se quiser) com o mundo!</p>

          </div>
          <a className='inline-block rounded-full bg-green-500 hover:bg-green-600 px-5 py-3 font-alt text-center text-sm uppercase leading-none text-black' href="">CADASTRAR LEMBRANÇA</a>
        </div>

        {/* Copyright */ }
        <div className='text-sm leading-relaxed text-gray-200 hover:text-gray-100'>
          Feito com 💚 no NLW
        </div>

      </div>
      {/* Right */ }
      <div className='flex flex-col p-16 bg-[url(../assets/bg-stars.svg)] bg-cover'>
        <div className='flex flex-1 items-center justify-center'>
          <p className='text-center leading-relax w-[360px]'>Você ainda não registrou nenhuma lembrança, comece a { ' ' } <a className='underline hover:cursor-pointer hover:text-gray-50' href="">criar agora</a></p>
        </div>

      </div>
    </main>

  );
}

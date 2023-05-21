import Image from 'next/image';
import logo from '../assets/spaceTime-logo.svg';

export function Hero() {
  return (
    <div className='space-y-5'>
      <Image src={ logo } alt=' NLW SpaceTime ' />
      <div className='max-w-[420px] space-y-1'>
        <h1 className='mt-5 text-5xl font-bold leading-tight'>Sua cápsula do tempo</h1>
        <p className='text-lg leading-relaxed'>Colecione momenos marcantes da sua jornada e compartilhe (se quiser) com o mundo!</p>

      </div>
      <a className='inline-block rounded-full bg-green-500 hover:bg-green-600 px-5 py-3 font-alt text-center text-sm uppercase leading-none text-black' href="">CADASTRAR LEMBRANÇA</a>
    </div>
  );
}
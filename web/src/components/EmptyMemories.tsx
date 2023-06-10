import Link from 'next/link';

export function EmptyMemories() {
  return (
    <div className='flex flex-1 items-center justify-center p-16'>
      <p className='text-center leading-relax w-[360px]'>Você ainda não registrou nenhuma lembrança, comece a { ' ' } <Link className='underline hover:cursor-pointer hover:text-gray-50' href="/memories/new">criar agora</Link></p>
    </div>
  );
}
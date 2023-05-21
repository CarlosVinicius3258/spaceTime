export function EmptyMemories() {
  return (
    <div className='flex flex-1 items-center justify-center'>
      <p className='text-center leading-relax w-[360px]'>Você ainda não registrou nenhuma lembrança, comece a { ' ' } <a className='underline hover:cursor-pointer hover:text-gray-50' href="/memories/new">criar agora</a></p>
    </div>
  );
}
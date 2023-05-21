import { User } from 'lucide-react';

export function SignIn() {
  return (
    <a href={ `https://github.com/login/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID}` } className="flex items-center gap-3 text-left">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-400 transition-colors hover:text-gray-50">

        <User className='h-5 w-5 text-gray-500' />
      </div>
      <p className="max-w-[180px] text-sm leading-snug">
        <span className='underline' >Crie uma conta</span> e salve suas lembranças para o futuro.
      </p>
    </a>
  );
}
'use client';
import { Camera } from 'lucide-react';
import { MediaPicker } from './MediaPicker';
import { FormEvent } from 'react';

export function NewMemoryForm() {

  function handleClientMemory(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    console.log(Array.from(formData.entries()));
  }
  return (
    <form onSubmit={ handleClientMemory } className='flex flex-1 flex-col gap-2'>
      <div className="flex items-center gap-4">
        <label htmlFor="media" className='flex cursor-pointer items-center gap-1.5 text-sm text-gray-200 hover:text-gray-100'>
          <Camera className='h-4 w-4' />
          Anexar mídia
        </label>
        <label htmlFor="isPublic" className='flex items-center gap-1.5 text-sm text-gray-200 hover:text-gray-100 cursor-pointer'>
          <input type="checkbox" name="isPublic" id="isPublic" value={ 'true' } className='h-4 w-4 rounded border-gray-400 bg-gray-700 text-purple-500 cursor-pointer' />
          Tornar memória pública
        </label>
      </div>
      <MediaPicker />
      <textarea
        name="content"
        spellCheck={ false }
        className='w-full flex-1 resize-none border-0 rounded bg-transparent p-0 text-lg leading-relaxed text-gray-100 placeholder:text-gray-400 focus:ring-0'
        placeholder="Fique livre para adicionar fotos, vídeos e relatos sobre essa experiência que você quer lembrar para sempre."
      />

      <button
        className='self-end inline-block rounded-full bg-green-500 hover:bg-green-600 px-5 py-3 font-alt text-center text-sm uppercase leading-none text-black'
        type="submit">Salvar</button>
    </form>
  );
}


'use client';

import { signIn } from "next-auth/react";
import { FormEvent, useRef } from "react";

export default function LoginForm() {
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    const username = usernameRef.current?.value;
    const password = passwordRef.current?.value;

    signIn('credentials', { username, password });
  }

  return (
    <form
      onSubmit={handleSubmit}
      className='flex flex-col gap-4 justify-center'
    >
      <div className='flex justify-between items-center gap-2'>
        <label className='text-lg font-bold' htmlFor='username'>Username</label>
        <input
          type='text'
          ref={usernameRef}
          className='p-2 text-black bg-white hover:bg-neutral-300 focus:bg-neutral-300 outline-none rounded'
          placeholder='Enter Username' />
      </div>
      <div className='flex justify-between items-center gap-2'>
        <label className='text-lg font-bold' htmlFor='password'>Password</label>
        <input
          type='password'
          ref={passwordRef}
          className='p-2 text-black bg-white hover:bg-neutral-300 focus:bg-neutral-300 outline-none rounded'
          placeholder='Enter Password' />
      </div>
      <button className='border p-2 font-bold hover:bg-neutral-500 active:bg-neutral-700 rounded'>Submit</button>
    </form>
  );
}
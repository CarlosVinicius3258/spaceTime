import jwtDecode from 'jwt-decode';
import { cookies } from 'next/headers';

interface User {
  sub: string
  name: string
  avatarUrl: string
}

export function getUser() {
  const token = cookies().get('token')?.value

  if (!token) { 
    throw new Error('Unauthenticated.')
  }

  const user = jwtDecode(token) as User

  return user;
}
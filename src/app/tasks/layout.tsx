'use client';

import {useSession} from 'next-auth/react'

export default function Tasks({children}: {children: React.ReactNode}) {
  const {data} = useSession({required: true});

  return (<>{children}</>);
}
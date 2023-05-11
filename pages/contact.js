import React from 'react';
import { useRouter } from 'next/router'

export default function Contact() {
  const router = useRouter();

  function handleClick(){
    router.push('/about')
  }
  return (
    <div>
      Contact
      <button className='btn btn-primary' onClick={handleClick}>Click primary</button>
    </div>
  )
}

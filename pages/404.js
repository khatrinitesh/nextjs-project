import React from 'react';
import { useRouter } from 'next/router';

export default function Custom404() {
  const router = useRouter();

  function btnBack(){
    router.push('/')
  }
  return (
    <div>
      404 page not found 
      <button className='btn btn-primary' onClick={btnBack}>Return back homepage</button>
    </div>
  )
}

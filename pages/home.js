import React from 'react';
import styles from '../styles/Home.module.css';
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter();

  const handleClick = () => {
    router.push('/about');
  };

  return (
    <div>
      <h3 className={styles.heading}>Home</h3>
      <button className='btn btn-primary' onClick={handleClick} >Click </button>
    </div>
  )
}

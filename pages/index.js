import Head from 'next/head'
import Home from '../pages/home';

import "bootstrap/dist/css/bootstrap.css";

export default function CustomIndex() {
  return (
    <>
      <Head>
        <title>Create NextApp Template</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="../favicon.ic"/>
      </Head>
      <Home />
    </>
  )
}

import './globals.css'
import Header from './header'



export default function RootLayout({ children }) {
  return (
    <>
    <Header/>
    <div className='main_content'>
      <div className='container'>{children}</div>
      </div>
    <Footer/>
    </>
  )
}

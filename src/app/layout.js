import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { Nanum_Gothic } from 'next/font/google'

const nanum_gothic = Nanum_Gothic({
  subsets : ['latin'],
  display : 'swap',
  variable: '--font-nanum-gothic',
  weight : '400'
})

export const metadata = {
  title: '부계역쿰정형외과',
  description: '부계역쿰정형외과 홈페이지입니다',
}

export default function RootLayout({ children }) {
  return (
    <html lang='kr' className={`${nanum_gothic.variable}`}>
      <body>
      <Header></Header>
        {children}
      <Footer></Footer>
      </body>
    </html>
  )
}

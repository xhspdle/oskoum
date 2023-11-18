import './globals.css'
import Header from './components/Header'

export const metadata = {
  title: 'OSKOUM정형외과',
  description: '부계역 KOUM 정형외과 홈페이지입니다',
}

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
      <Header></Header>
        {children}
      <footer></footer>
      </body>
    </html>
  )
}

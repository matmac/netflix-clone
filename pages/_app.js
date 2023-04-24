import '../styles/globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

function MyApp({ Component, pageProps }) {
  return (
    <main className={`${inter.variable} font-sans bg-black h-screen`}>
      <Component {...pageProps} />
    </main>
  )
}

export default MyApp

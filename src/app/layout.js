import { Playfair } from 'next/font/google'
import './globals.css'

const playfair = Playfair({ 
  subsets: ['latin'],
  display: 'swap',
 })

export const metadata = {
  title: 'Juanillo: Your Future Collaborator in Digital Craftsmanship',
  description: 'A personal web portolio of Jonathan Juanillo. An aspiring software engineer based in Manila, Philippines.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={playfair.className}>{children}</body>
    </html>
  )
}

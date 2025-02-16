import { Noto_Sans_Adlam } from 'next/font/google'

const adlam = Noto_Sans_Adlam({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={adlam.className}>
      <body>{children}</body>
    </html>
  )
} 
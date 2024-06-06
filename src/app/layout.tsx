import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
import StyledComponentsRegistry from '@/lib/registry'
import { Providers } from './providers'

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <Providers>{children}</Providers>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}

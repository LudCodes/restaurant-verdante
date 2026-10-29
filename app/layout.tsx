import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'VERDANTÉ — A natureza à mesa',
  description: 'Uma experiência gastronômica que celebra ingredientes naturais, sabores autênticos e a beleza de cada estação.',

}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#14251c',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}

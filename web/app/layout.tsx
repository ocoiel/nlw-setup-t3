import { Providers } from 'components/Providers'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html suppressHydrationWarning lang='pt-br'>
      <head />
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}

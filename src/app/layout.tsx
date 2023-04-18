import './globals.css'

export const metadata = {
  title: 'Curso de oratória',
  description: 'Curso de oratória para pessoas que tem dificuldade para falar em publico',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className='bg-black text-zinc-50'>{children}</body>
    </html>
  )
}

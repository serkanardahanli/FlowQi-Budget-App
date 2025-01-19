import './globals.css'
import { Inter } from 'next/font/google'
import { AppSidebar } from '@/components/ui/sidebar'
import { SidebarProvider } from '@/components/ui/sidebar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'FlowQi Budget App',
  description: 'Slim budgetbeheer voor bedrijven',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nl">
      <body className={inter.className}>
        <SidebarProvider>
          <div className="flex h-screen overflow-hidden">
            <AppSidebar />
            <div className="flex-1 overflow-auto">
              <main className="flex-1 space-y-4 p-8 pt-6">
                {children}
              </main>
            </div>
          </div>
        </SidebarProvider>
      </body>
    </html>
  )
}


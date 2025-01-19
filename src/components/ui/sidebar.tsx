'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { LayoutDashboard, PiggyBank, Receipt, Settings } from 'lucide-react'

const navigation = [
  { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { name: 'Budgetten', href: '/budgetten', icon: PiggyBank },
  { name: 'Transacties', href: '/transacties', icon: Receipt },
  { name: 'Instellingen', href: '/instellingen', icon: Settings },
]

export function AppSidebar() {
  const pathname = usePathname()

  return (
    <div className="flex h-screen flex-col justify-between border-r bg-white">
      <div className="px-4 py-6">
        <Link href="/" className="flex items-center">
          <span className="text-xl font-bold text-[#663399]">FlowQi</span>
        </Link>
        <nav className="mt-6 space-y-2">
          {navigation.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors ${
                  isActive 
                    ? 'bg-[#663399] text-white' 
                    : 'text-gray-500 hover:text-[#663399] hover:bg-purple-50'
                }`}
              >
                <item.icon className="h-4 w-4" />
                <span>{item.name}</span>
              </Link>
            )
          })}
        </nav>
      </div>
    </div>
  )
}

export function SidebarProvider({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}


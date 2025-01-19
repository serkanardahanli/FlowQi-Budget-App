'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

const navigation = [
  { name: 'Dashboard', href: '/dashboard' },
  { name: 'Budgetten', href: '/budgetten' },
  { name: 'Transacties', href: '/transacties' },
  { name: 'Instellingen', href: '/instellingen' },
]

export function MainNav() {
  const pathname = usePathname()

  return (
    <nav className="flex space-x-4">
      {navigation.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            'px-3 py-2 rounded-md text-sm font-medium transition-colors',
            pathname === item.href
              ? 'bg-purple-100 text-purple-900'
              : 'text-gray-700 hover:bg-purple-50'
          )}
        >
          {item.name}
        </Link>
      ))}
    </nav>
  )
}


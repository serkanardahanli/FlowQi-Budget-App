import Image from 'next/image'
import Link from 'next/link'

interface LogoProps {
  showText?: boolean
}

export function Logo({ showText = true }: LogoProps) {
  return (
    <Link href="/" className="flex items-center space-x-2">
      <Image
        src="/images/logo.svg"
        alt="FlowQi Logo"
        width={32}
        height={32}
        className="h-8 w-8"
      />
      {showText && (
        <span className="text-xl font-bold text-white">FlowQi</span>
      )}
    </Link>
  )
}


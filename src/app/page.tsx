import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold text-[#663399]">
          Welkom bij FlowQi
        </h1>
        <p className="mt-3 text-2xl">
          Slim budgetbeheer voor bedrijven
        </p>
        <div className="mt-6">
          <Link
            href="/dashboard"
            className="px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-[#663399] hover:bg-[#663399]/90"
          >
            Ga naar Dashboard
          </Link>
        </div>
      </main>
    </div>
  )
}


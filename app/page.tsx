import Link from 'next/link'

export default function Home() {
  return (
    <main className="h-full flex items-center content-center justify-around">
      <section>
        <h1 className="text-center text-6xl my-12 relative">
          <div className="absolute top-12 h-12 w-full bg-blue-400 blur-3xl bg-opacity-70"></div>
          Super Tic Tac Toe
        </h1>
        <p className="text-center text-blue-500">
          <Link href="/game" className="bg-blue-500 hover:bg-blue-700 text-white py-4 px-10 m-4 rounded transition duration-50 ease-in-out text-xl">Play Online</Link>
          <Link href="/offline" className="bg-blue-500 hover:bg-blue-700 text-white py-4 px-10 m-4 rounded transition duration-50 ease-in-out text-xl">Play VS Computer</Link>
        </p>
      </section>
    </main>
  )
}

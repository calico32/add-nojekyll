export default function Home() {
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-black font-serif">
        <h1 className="text-5xl neonText mt-0 mb-11">Games</h1>
      </main>
    )
  }
  
  
  function nameText(text: String) {
    return <div className="bg-neutral-950"><h3 className="text-xl m-2">{text}</h3></div>
  }
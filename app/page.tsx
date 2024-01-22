import NavBar from '@/_components/NavBar'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-black font-serif">
      <h1 className="text-5xl neonText mt-0 mb-11">Romeo's Portfolio</h1>
      <section>
        <h2 className="text-3xl neonText m-4">Featured Game</h2>
        {nameText("To Protect")}
        <video width="320" height="240" controls>
          <source type="video/webm" src="/intro.webm" />
        </video>
      </section>
      <section>
        <h2 className="text-3xl neonText m-4">Featured Program</h2>
      </section>
      <section>
        <h2 className="text-3xl neonText m-4">Featured Song</h2>
        {nameText("Hollow Tomb")}
        <audio controls>
          <source src="/audio/hollow_tomb.ogg" type="audio/ogg" />
        </audio>
      </section>
    </main>
  )
}


function bunny() {
  return (
    <video width="320" height="240" controls>
      <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  )
}


function nameText(text: String) {
  return <div className="bg-neutral-950"><h3 className="text-xl m-2">{text}</h3></div>
}
import Link from 'next/link'

export default function NavBar() {
    return (
        <div className="topnav">
            <Link href="/">Home</Link>
            <Link href="games">Games</Link>
            <a href="programs">Programs</a>
            <a href="music">Music</a>
        </div> 
    )
}
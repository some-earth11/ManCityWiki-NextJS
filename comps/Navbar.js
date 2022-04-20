import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
    return ( 
        <nav>
            <div className="logo">
                <Image src="/logo.png" width={60} height={60}></Image>
            </div>
            {/* <h1>ManCity Wiki</h1> */}
            <Link href="/"><a>Home</a></Link>
            <Link href="/about"><a>About</a></Link>
            <Link href="/players"><a>Players</a></Link>
        </nav>
    );
}
 
export default Navbar;
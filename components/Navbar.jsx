import Link from 'next/link';
import Image from 'next/image'
const Navbar = () => {
    return ( 
        <nav>
            <div className="logo">
                <Link href="/"><Image src="/logo.png" width={86} height={83}/></Link>
            </div>

            <Link href="/"><a>Home</a></Link>
            <Link href="/about"><a>About</a></Link>
            <Link href="/employees"><a>Employees List</a></Link>
        </nav>
     );
}
 
export default Navbar;
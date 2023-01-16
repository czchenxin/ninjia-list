import Link from 'next/link'
import Image from 'next/image';
const Navbar = () => {
    return ( 
        <nav>
            <div className="log">
                <Image src="/logo.png" alt="logo" className='logo-img' width={128} height={77}/> 
            </div>
            <Link className='nav-item' href="/" >Home</Link> 
            <Link className='nav-item' href="/about">About</Link> 
            <Link  className='nav-item' href="/ninjas">Ninjia Listing</Link> 
        </nav>
     );
}
 
export default Navbar;
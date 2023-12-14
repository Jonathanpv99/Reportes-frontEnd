import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMountainSun } from '@fortawesome/free-solid-svg-icons';
const Navbar = () => {

    return (
        <nav className="bg-azul text-azul my-3 py-5 px-10 rounded-lg flex justify-between">
            <div>
                <Link to='/'>
                <div className='flex gap-x-4 items-center text-white'>
                    <FontAwesomeIcon  icon={ faMountainSun }/>
                    <h1 className='text-2xl font-bold'>NORTWHIND REPORTS</h1>
                </div>
                
                </Link>
                
            </div>
            <div>
                <ul className='flex gap-x-20 items-center'>
                    <li className='bg-verde-b rounded-lg p-2'>
                    <Link to='/products' className='font-bold'> Products/Quarter </Link>
                    </li>
                    <li className='bg-verde-b rounded-lg p-2'>
                    <Link to='/period' className='font-bold'> Sales/Period </Link>
                    </li>
                    <li className='bg-verde-b rounded-lg p-2'>
                        <Link to='/mensual' className='font-bold'> Monthly Sales </Link>
                    </li>
                    <li className='bg-cyan-600 rounded-lg p-2'>
                        <Link to='/team' className='font-bold'> Team </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;
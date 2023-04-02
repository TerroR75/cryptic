import FunctionBtns from './FunctionBtns';
import Logo from './Logo';
import NavBtns from './NavBtns';

function Navbar() {
  return (
    <nav className='Navbar lg:px-64 md:px-24 flex justify-between	 items-stretch fixed w-full h-16'>
      <Logo />
      <NavBtns />
      <FunctionBtns />
    </nav>
  );
}

export default Navbar;

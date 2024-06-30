import type React from 'react';

import Logo from './Logo';
import Search from './Search';
import UserMenu from './UserMenu';

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  const user = undefined;
  return (
    <header className="fixed left-0 top-0 z-10 w-full bg-white ">
      <nav className="border-b py-3">
        <div className="main-container flex flex-row items-center justify-between gap-3 md:gap-0">
          <Logo />
          <Search />
          <UserMenu user={user} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

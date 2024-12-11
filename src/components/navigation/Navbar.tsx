// import { useTranslation } from "react-i18next";
// import LanguageSelector from "./LanguageSelector";

import { useState } from "react";
import HamburgerButton from "../HamburgerButton";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";
import UtilityNavLinks from "./UtilityNavLinks";
import SearchIcon from "../SearchIcon";

const Navbar = () => {
    const [menuIsOpen, setMenuOpen] = useState<boolean>(false);

    return (
        <nav className="relative bg-white border-b border-gray-100">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 gap-6 ">
                    <Logo link="/" />
                    {/* Desktop Navigation */}
                    <div className="hidden md:flex md:justify-between md:ml-8">
                        <NavLinks />
                    </div>
                    <div className="hidden md:flex md:justify-between md:ml-8">
                        <UtilityNavLinks />
                    </div>
                    {/* Mobile Menu Button */}
                    <div className="flex items-center justify-center gap-5 md:hidden">
                        <SearchIcon />
                        <HamburgerButton
                            isOpen={menuIsOpen}
                            onClick={() => setMenuOpen((prev) => !prev)}
                        />
                    </div>
                </div>
            </div>
            {/* Mobile Menu */}
            <MobileMenu menuIsOpen={menuIsOpen} />
        </nav>
    );
};

export default Navbar;

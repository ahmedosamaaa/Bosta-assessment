import { useState } from "react";
import HamburgerButton from "../HamburgerButton";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";
import UtilityNavLinks from "./UtilityNavLinks";
import SearchIcon from "../SearchIcon";
import ToggleMode from "../ToggleMode";
import useDarkMode from "@/hooks/useDarkMode";

const Navbar = () => {
    const [menuIsOpen, setMenuOpen] = useState<boolean>(false);
    const { isDarkMode, toggleDarkMode } = useDarkMode();

    return (
        <nav className="relative border-b border-navbar-color bg-navbar-color ">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 gap-6 ">
                    <div className="flex items-center gap-4">
                        <Logo link="/" />
                        <div className="hidden md:block">
                            <ToggleMode
                                isDarkMode={isDarkMode}
                                toggleDarkMode={toggleDarkMode}
                            />
                        </div>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex md:justify-between md:ml-8">
                        <NavLinks />
                    </div>
                    <div className="hidden md:flex md:justify-between md:ml-8">
                        <UtilityNavLinks />
                    </div>
                    {/* Mobile Menu Button */}
                    <div className="flex items-center justify-center gap-5 md:hidden">
                        <ToggleMode
                            isDarkMode={isDarkMode}
                            toggleDarkMode={toggleDarkMode}
                        />
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

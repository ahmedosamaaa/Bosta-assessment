import LanguageSelector from "./LanguageSelector";
import NavLinks from "./NavLinks";

type mobileMenuProps = {
    menuIsOpen: boolean;
};

const MobileMenu = ({ menuIsOpen }: mobileMenuProps) => {
    return (
        <div className="relative w-full md:hidden ">
            {menuIsOpen && (
                <div className="absolute inset-x-0 z-10 flex flex-col items-center py-5 bg-white rounded-b-lg shadow-lg top-full md:hidden">
                    <div className="w-full px-4">
                        <NavLinks className="flex-col items-center " />
                        <LanguageSelector className="flex items-center justify-center pt-4 text-base font-bold text-primary-color" />
                    </div>
                </div>
            )}
        </div>
    );
};
export default MobileMenu;

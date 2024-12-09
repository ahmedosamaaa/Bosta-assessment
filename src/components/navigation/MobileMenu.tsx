import NavLinks from "./NavLinks";

type mobileMenuProps = {
    menuIsOpen: boolean;
};

const MobileMenu = ({ menuIsOpen }: mobileMenuProps) => {
    return (
        <div className="relative w-full md:hidden " id="navbar-dropdown">
            {menuIsOpen && (
                // <ul className="absolute inset-0 z-10 flex flex-col items-center h-screen py-5 font-medium bg-white ">

                <div className="absolute inset-x-0 flex flex-col items-center py-5 bg-white rounded-b-lg shadow-lg top-full md:hidden">
                    <div className="px-4 py-6">
                        <NavLinks className="flex-col items-center " />
                    </div>
                </div>
            )}
        </div>
    );
};
export default MobileMenu;

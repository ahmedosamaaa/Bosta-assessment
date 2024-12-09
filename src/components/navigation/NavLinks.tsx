import NavLink from "./NavLink";

interface NavLinksProps {
    className?: string;
}

const NavLinks = ({ className }: NavLinksProps) => {
    const mainLinks = [
        { to: "/", label: "الرئيسية" },
        { to: "/prices", label: "الأسعار" },
        { to: "/sales", label: "كلم المبيعات" },
    ];

    return (
        <div
            className={`flex flex-col md:flex-row md:justify-between items-center w-full ${className}`}
        >
            {/* <> */}
            {/* Main Navigation Links */}
            <ul className="flex-col items-center w-full md:flex md:flex-row md:w-auto md:gap-8">
                {mainLinks.map(({ to, label }) => (
                    <li key={to} className="w-full text-center md:w-auto">
                        <NavLink
                            to={to}
                            className={`flex items-center gap-2 text-sm font-medium justify-center py-4 md:py-0 border-b border-gray-100 md:border-none w-full md:w-auto hover:text-red-600 transition-colors duration-200 `}
                        >
                            {label}
                        </NavLink>
                    </li>
                ))}
            </ul>
            {/* </> */}
        </div>
    );
};
export default NavLinks;

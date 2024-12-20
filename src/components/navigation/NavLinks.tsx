import { useTranslation } from "react-i18next";
import NavLink from "./NavLink";

interface NavLinksProps {
    className?: string;
}

const NavLinks = ({ className }: NavLinksProps) => {
    const { t } = useTranslation("navbar");
    const mainLinks = [
        { to: "/home", label: t("home") },
        { to: "/pricing", label: t("pricing") },
        { to: "/sales", label: t("sales") },
    ];

    return (
        <div
            className={`flex flex-col md:flex-row md:justify-between items-center w-full ${className}`}
        >
            {/* <> */}
            {/* Main Navigation Links */}
            <ul className="flex-col items-center w-full md:flex md:flex-row md:w-auto md:gap-8">
                {mainLinks.map(({ to, label }, i) => (
                    <li key={i} className="w-full text-center md:w-auto">
                        <NavLink
                            to={to}
                            className={`flex items-center gap-2 text-sm md:text-base font-bold justify-center py-4 md:py-0 border-b border-border-color md:border-none w-full md:w-auto hover:primary-color transition-colors duration-200 `}
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

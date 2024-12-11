import { NavLink as RouterNavLink } from "react-router-dom";

interface NavLinkProps {
    to: string;
    children: React.ReactNode;
    className?: string;
}

const NavLink = ({ to, children, className = "" }: NavLinkProps) => {
    return (
        <RouterNavLink
            to={to}
            className={({ isActive }) =>
                `transition-colors duration-200 hover:text-red-800  ${
                    isActive ? "primary-color font-bold" : "text-ternary-color"
                } ${className}`
            }
        >
            {children}
        </RouterNavLink>
    );
};
export default NavLink;

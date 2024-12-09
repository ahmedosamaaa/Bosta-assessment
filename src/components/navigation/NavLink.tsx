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
                `transition-colors duration-200 hover:text-blue-600 ${
                    isActive ? "text-blue-600 font-medium" : "text-gray-700"
                } ${className}`
            }
        >
            {children}
        </RouterNavLink>
    );
};
export default NavLink;

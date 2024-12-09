import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

interface LogoProps {
    link: string;
}
const Logo = ({ link }: LogoProps) => {
    const { i18n } = useTranslation();

    return (
        <div>
            <Link to={link}>
                <img
                    src={`images/${
                        i18n.language === "en" ? "logoEn.svg" : "logoAr.svg"
                    }`}
                    className="h-8"
                    alt="Logo"
                />
            </Link>
        </div>
    );
};

export default Logo;

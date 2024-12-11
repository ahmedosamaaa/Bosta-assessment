import NavLink from "./NavLink";
import LanguageSelector from "./LanguageSelector";
import { useTranslation } from "react-i18next";

const UtilityNavLinks = () => {
    const { t, i18n } = useTranslation("navbar");
    const utilityLinks = [
        {
            to: "/",
            label: t("track-your-shipment"),
        },
        {
            to: "/login",
            label: t("login"),
        },
    ];

    return (
        <div className="flex flex-col items-center w-full md:flex-row md:w-auto md:gap-8">
            {utilityLinks.map(({ to, label }, index) => (
                <NavLink
                    key={index}
                    to={to}
                    className={`relative flex items-center gap-2 text-base font-bold justify-center py-4 md:py-0 border-b border-gray-100 md:border-none w-full md:w-auto hover:text-primary-color transition-colors duration-200 ${
                        index === 0
                            ? `md:after:content-[""] md:after:w-[1.5px] md:after:h-6 md:after:bg-gray-200 md:after:absolute md:after:top-1/2 md:after:-translate-y-1/2 ${
                                  i18n.language === "ar"
                                      ? "md:after:-translate-x-[55px]"
                                      : "md:after:translate-x-[85px]"
                              }`
                            : ""
                    }`}
                >
                    <span>{label}</span>
                </NavLink>
            ))}
            <LanguageSelector className="mt-4 font-bold text-primary-color md:mt-0 text-md " />
        </div>
    );
};

export default UtilityNavLinks;

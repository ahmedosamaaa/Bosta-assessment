import NavLink from "./NavLink";
import LanguageSelector from "./LanguageSelector";

const UtilityNavLinks = () => {
    const utilityLinks = [
        {
            to: "/track",
            label: "تتبع شحنتك",
        },
        {
            to: "/login",
            label: "تسجيل الدخول",
        },
    ];
    return (
        <div className="flex flex-col items-center w-full md:flex-row md:w-auto md:gap-8">
            {utilityLinks.map(({ to, label }) => (
                <NavLink
                    key={to}
                    to={to}
                    className={`flex items-center gap-2 text-sm font-medium justify-center py-4 md:py-0 border-b border-gray-100 md:border-none w-full md:w-auto hover:text-red-600 transition-colors duration-200 `}
                >
                    <span>{label}</span>
                </NavLink>
            ))}
            <LanguageSelector className="mt-4 font-bold text-red-600 md:mt-0 " />
        </div>
    );
};

export default UtilityNavLinks;

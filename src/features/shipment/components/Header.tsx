import Hero from "@/components/Hero";
import Search from "@/components/Search";
import { useTranslation } from "react-i18next";

const Header = () => {
    const { i18n } = useTranslation();
    const isRTL = i18n.language === "ar";
    return (
        <div className="relative bg-[#F3FAFB] flex flex-col items-center justify-center py-6 mb-16">
            <Hero />
            <Search isRTL={isRTL} />
        </div>
    );
};

export default Header;

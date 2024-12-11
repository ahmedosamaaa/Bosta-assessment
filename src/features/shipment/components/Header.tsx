import Hero from "@/components/Hero";
import SearchInput from "@/components/SearchInput";
import { useSearch } from "@/hooks/useSearch";
import { RootState } from "@/state/store";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

const Header = () => {
    const trackingNumber = useSelector<RootState, string>(
        (state) => state.shipment.trackingNumber
    );
    const { handleSubmit, onSearchChange } = useSearch();
    const { i18n } = useTranslation();
    const isRTL = i18n.language === "ar";
    return (
        <>
            <div className="relative flex flex-col items-center justify-center mb-16">
                <Hero />

                <SearchInput
                    trackingNumber={trackingNumber}
                    onSearchChange={onSearchChange}
                    onSubmit={handleSubmit}
                    isRTL={isRTL}
                />
            </div>
        </>
    );
};

export default Header;

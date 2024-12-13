import { SearchProps } from "@/types/searchTypes";
import { useTranslation } from "react-i18next";
import { IoSearchSharp } from "react-icons/io5";

const SearchInput = ({
    trackingNumber,
    onSearchChange,
    onSubmit,
    isRTL,
}: SearchProps) => {
    const { t } = useTranslation();

    return (
        // <div className="absolute flex-row justify-center hidden -bottom-8 md:flex ">
        <div className="absolute md:max-w-[400px] flex-row justify-center hidden -bottom-7 md:flex">
            <input
                type="text"
                id="search"
                className="p-4 text-sm border rounded-lg shadow-md border-border-color  bg-white text-black focus:ring-0 md:w-[400px] focus-visible:outline-blue-400 focus-visible:border active:bg-white focus:outline-none"
                placeholder={t("search")}
                defaultValue={trackingNumber ?? ""}
                onChange={onSearchChange}
            />

            <button
                onClick={onSubmit}
                className={`absolute border border-primary-color flex items-center justify-center h-full bg-primary-color ${
                    isRTL ? "left-0" : "right-0"
                } w-14 rounded-e-md`}
            >
                <IoSearchSharp size={25} color="#ffff" />
            </button>
        </div>
        // </div>
    );
};

export default SearchInput;

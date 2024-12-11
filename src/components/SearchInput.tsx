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
        <div className="absolute flex-row justify-center hidden -bottom-8 md:flex ">
            <input
                type="text"
                id="search"
                className="p-4 text-sm border border-transparent border-light-color rounded-lg shadow-md text-ternary-color bg-gray-50 md:w-96 focus:ring-0 focus:border-transparent focus-visible:outline-blue-400"
                placeholder={t("search")}
                defaultValue={trackingNumber ?? ""}
                onChange={onSearchChange}
            />

            <button
                onClick={onSubmit}
                className={`absolute flex items-center justify-center h-full bg-primary-color ${
                    isRTL ? "-left-10" : "-right-10"
                } w-14 rounded-e-md`}
            >
                <IoSearchSharp size={25} color="#ffff" />
            </button>
        </div>
    );
};

export default SearchInput;

import { FormEvent, useCallback, useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import _, { debounce } from "lodash";
import { useSearchParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Search = ({ isRTL }: { isRTL: boolean }) => {
    const { t } = useTranslation("header");
    const [searchValue, setSearchValue] = useState("");
    const [, setSearchParams] = useSearchParams();

    const onSearchChange = useCallback(
        debounce((e) => {
            setSearchValue(e.target.value);
        }, 500),
        [setSearchParams, setSearchValue, _.debounce]
    );

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();

        setSearchParams({ id: searchValue });
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="absolute hidden md:flex -bottom-[5%] flex-row justify-center"
        >
            <input
                type="text"
                id="search"
                className="p-4 text-sm text-gray-900 border border-transparent border-gray-300 rounded-lg shadow-md bg-gray-50 w-96 focus:ring-0 focus:border-transparent focus-visible:outline-blue-400"
                placeholder={t("search")}
                onChange={onSearchChange}
            />

            <button
                type="submit"
                className={`absolute flex items-center justify-center h-full bg-red-600 ${
                    isRTL ? "-left-10" : "-right-10"
                } w-14 rounded-e-md`}
            >
                <IoSearchSharp size={25} color="#ffff" />
            </button>
        </form>
    );
};

export default Search;

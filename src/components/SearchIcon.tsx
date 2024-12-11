import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { useEffect, useRef } from "react";
import { RootState } from "@/state/store";
import { useSearch } from "../hooks/useSearch";
import { IoSearchSharp } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";

const SearchIcon = () => {
    const { t, i18n } = useTranslation("header");
    const isRTL = i18n.language === "ar";
    const divRef = useRef<HTMLDivElement | null>(null);

    const trackingNumber = useSelector<RootState, string>(
        (state) => state.shipment.trackingNumber
    );

    const {
        isOpen,
        isClosing,
        handleClick,
        handleClose,
        handleSubmit,
        onSearchChange,
    } = useSearch();

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                divRef.current &&
                !divRef.current.contains(event.target as Node)
            ) {
                handleClose();
            }
        };

        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen, handleClose]);

    return (
        <div>
            <button onClick={handleClick}>
                {isOpen ? <FaSearch /> : <FaSearch />}
            </button>

            {isOpen && (
                <div
                    ref={divRef}
                    className={`absolute top-14 left-1/2 transform -translate-x-1/2 z-[1000] w-72 sm:w-80 h-36 bg-white p-4 rounded-md shadow-md mt-5 transition-all duration-300 ${
                        isClosing
                            ? "opacity-0 scale-90"
                            : "opacity-100 scale-100"
                    }`}
                >
                    <div className="flex flex-col items-center justify-center gap-4">
                        <p className="self-start text-sm text-ternary-color ps-2">
                            Track your shipment
                        </p>
                        <div className="flex flex-row justify-center">
                            <input
                                type="text"
                                id="search"
                                className="h-12 p-4 text-sm border border-transparent rounded-lg shadow-md text-ternary-color border-light-color w-52 sm:w-60 bg-gray-50 focus:ring-0 focus:border-transparent focus-visible:outline-blue-400"
                                placeholder={t("search")}
                                defaultValue={trackingNumber ?? ""}
                                onChange={onSearchChange}
                            />

                            <button
                                onClick={handleSubmit}
                                className={`flex items-center justify-center bg-primary-color ${
                                    isRTL ? "-left-10" : "-right-8"
                                } w-10 rounded-e-md`}
                            >
                                <IoSearchSharp size={25} color="#fff" />
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SearchIcon;

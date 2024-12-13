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
                {isOpen ? (
                    <FaSearch className="text-text-color" />
                ) : (
                    <FaSearch className="text-text-color" />
                )}
            </button>

            {isOpen && (
                <div
                    ref={divRef}
                    className={`absolute top-14 left-1/2 transform -translate-x-1/2 z-[1000] w-72 sm:w-80 h-36 bg-background-color p-4 rounded-md shadow-md mt-5 transition-all duration-300 ${
                        isClosing
                            ? "opacity-0 scale-90"
                            : "opacity-100 scale-100"
                    }`}
                >
                    <div className="flex flex-col items-center justify-center gap-4">
                        <p className="self-start text-sm text-text-color ps-2">
                            {t("search-title")}
                        </p>
                        <div className="relative flex flex-row self-start justify-center ">
                            <input
                                type="text"
                                id="search"
                                className="h-12 p-4 text-sm bg-white border rounded-lg shadow-md border-border-color sm:w-60 bg-background-color text-black focus:ring-0 focus-visible:outline-blue-400 focus-visible:border active:bg-white focus:outline-none w-[250px]"
                                placeholder={t("search")}
                                defaultValue={trackingNumber ?? ""}
                                onChange={onSearchChange}
                            />

                            <button
                                onClick={handleSubmit}
                                className={`absolute flex items-center h-full justify-center bg-primary-color ${
                                    isRTL ? "left-0" : "right-0"
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

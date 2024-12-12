import { useState, useCallback } from "react";
import { debounce } from "lodash";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/state/store";
import { updateTrackingNumber } from "@/state/shipment/shipmentSlice";

export const useSearch = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isClosing, setIsClosing] = useState(false);
    const [searchValue, setSearchValue] = useState("");
    const dispatch = useDispatch<AppDispatch>();

    const onSearchChange = useCallback(
        debounce((e: React.ChangeEvent<HTMLInputElement>) => {
            setSearchValue(e.target.value);
        }, 500),
        []
    );

    const handleClick = () => {
        setIsOpen(true);
    };

    const handleClose = () => {
        setIsClosing(true);
        setTimeout(() => {
            setIsOpen(false);
            setIsClosing(false);
        }, 300);
    };

    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        dispatch(updateTrackingNumber(searchValue));
    };

    return {
        isOpen,
        isClosing,
        searchValue,
        handleClick,
        handleClose,
        handleSubmit,
        onSearchChange,
    };
};

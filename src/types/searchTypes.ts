import { MouseEvent } from "react";

export interface SearchProps {
    isVisible?: boolean;
    isClosing?: boolean;
    trackingNumber: string;
    onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onSubmit: (e: MouseEvent<HTMLButtonElement>) => void;
    isRTL: boolean;
}

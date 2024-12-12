interface HamburgerButtonProps {
    isOpen: boolean;
    onClick: () => void;
}

function HamburgerButton({ isOpen, onClick }: HamburgerButtonProps) {
    return (
        <button
            className="relative flex md:hidden"
            onClick={onClick}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
        >
            <div className="relative flex overflow-hidden items-center justify-center w-[50px] h-[50px] transform transition-all duration-200 ">
                <div className="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden ">
                    {/* Hamburger bars */}
                    <div
                        className={`bg-text-color h-[2px] w-7 transform transition-all duration-300 origin-left ${
                            isOpen ? "translate-x-10" : ""
                        }`}
                    />
                    <div
                        className={`bg-text-color h-[2px] w-7 rounded transform transition-all duration-300 delay-75 ${
                            isOpen ? "translate-x-10" : ""
                        }`}
                    />
                    <div
                        className={`bg-text-color h-[2px] w-7 transform transition-all duration-300 origin-left delay-150 ${
                            isOpen ? "translate-x-10" : ""
                        }`}
                    />

                    {/* Close icon */}
                    <div
                        className={`absolute items-center justify-between transform transition-all duration-500 top-2.5 flex w-0 ${
                            isOpen ? "translate-x-0 w-12" : "-translate-x-10"
                        }`}
                    >
                        <div
                            className={`absolute bg-text-color h-[2px] w-5 transform transition-all duration-500 delay-300 ${
                                isOpen ? "rotate-45" : "rotate-0"
                            }`}
                        />
                        <div
                            className={`absolute bg-text-color h-[2px] w-5 transform transition-all duration-500 delay-300 ${
                                isOpen ? "-rotate-45" : "rotate-0"
                            }`}
                        />
                    </div>
                </div>
            </div>
        </button>
    );
}
export default HamburgerButton;

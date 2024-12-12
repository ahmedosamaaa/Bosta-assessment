import { dateParse, toArabicDateTime } from "@/utils/arabicTranslation";
import { useTranslation } from "react-i18next";
import { IconBaseProps, IconType } from "react-icons";

interface ShipmentStep {
    step: number;
    stepName: string;
    icon: IconType;
}

type StipItemProps = {
    date: string;
    step: ShipmentStep;
    isActive: boolean;
    progressBarColor: string;
    currentStep: number;
};

const StepItem = ({
    step,
    isActive,
    progressBarColor,
    date,
    currentStep,
}: StipItemProps) => {
    const { i18n } = useTranslation();
    const isRTL = i18n.language === "ar";
    const Icon = step.icon;
    const iconProps: IconBaseProps = {
        size: 10,
    };

    return (
        <>
            <div className="relative flex flex-row h-full gap-5 px-5 py-4 md:py-0 md:px-0 md:items-center md:justify-center md:flex-col ">
                <div
                    className={`w-5 h-5 flex justify-center items-center rounded-full  transition-colors duration-200 ${
                        isActive
                            ? `${progressBarColor} text-white`
                            : "bg-white text-light-color border-2 border-border-color"
                    }`}
                >
                    {isActive && <Icon {...iconProps} />}
                </div>
                <div className="flex flex-col items-start justify-start">
                    <p
                        className={`${
                            isActive
                                ? "font-bold text-text-color"
                                : " font-medium text-light "
                        }px-2 text-text-color text-center text-xs sm:text-sm`}
                    >
                        {step.stepName}
                    </p>
                    <p className="w-full h-5 py-2 text-xs text-text-color md:w-20 ">
                        {step.step === currentStep + 1
                            ? isRTL
                                ? toArabicDateTime(date).date
                                : dateParse(date).date
                            : ""}
                    </p>
                </div>
            </div>
        </>
    );
};

export default StepItem;

import { IconBaseProps, IconType } from "react-icons";

interface ShipmentStep {
    step: number;
    stepName: string;
    icon: IconType;
}

type StipItemProps = {
    step: ShipmentStep;
    isActive: boolean;
    progressBarColor: string;
};

const StepItem = ({ step, isActive, progressBarColor }: StipItemProps) => {
    const Icon = step.icon;
    const iconProps: IconBaseProps = {
        size: 10,
    };
    return (
        <div className="flex flex-row h-full gap-5 px-5 py-4 md:py-0 md:px-0 md:items-center md:justify-center md:flex-col ">
            <div
                className={`w-5 h-5 flex justify-center items-center rounded-full  transition-colors duration-200 ${
                    isActive
                        ? `${progressBarColor} text-white`
                        : "bg-white text-gray-400 border-2"
                }`}
            >
                {isActive && <Icon {...iconProps} />}
            </div>
            <div className="flex flex-col items-start justify-start">
                <p className="px-2 text-xs font-medium text-center text-gray-700 f sm:text-sm">
                    {step.stepName}
                </p>
                <p className="h-4 px-2 text-xs text-gray-700 sm:text-sm">
                    {isActive && "Saturday Nov, 10"}
                </p>
            </div>
        </div>
    );
};

export default StepItem;

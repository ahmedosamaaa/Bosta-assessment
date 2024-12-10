type ProgressBarProps = {
    currentStep: number;
    totalSteps: number;
    progressBarColor: string;
    isRTL: boolean;
};

const ProgressBar = ({
    currentStep,
    totalSteps,
    progressBarColor,
    isRTL,
}: ProgressBarProps) => {
    const progressBar = `${
        currentStep !== 3
            ? (currentStep / (totalSteps - 1)) * 100 + 20
            : (currentStep / (totalSteps - 1)) * 100
    }%`;

    return (
        <div
            className={`absolute h-[calc(100%-146px)] border-l-2 md:border-t-4 border-dashed border-gray-200 w-1 md:w-[calc(100%-135px)] md:h-2 transform -translate-y-1/2 top-[49%] md:top-[34%] -z-10   ${
                isRTL
                    ? "right-[43px] md:right-[80px]"
                    : "left-[45px] md:left-[80px]"
            }`}
        >
            <div
                style={{ width: progressBar }}
                className={`relative -top-1 hidden md:block h-full ${progressBarColor} `}
            ></div>
            <div
                style={{ height: progressBar }}
                className={`relative right-[2px] md:hidden block h-full ${progressBarColor}`}
            ></div>
        </div>
    );
};

export default ProgressBar;

import { FaCheck } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import ProgressBar from "./ProgressBar";
import StepItem from "./StepItem";

const ShipmentProgressBar = ({ currentStatus = "Returned" }) => {
    const { t, i18n } = useTranslation("trackingShipment");
    const isRTL = i18n.language === "ar";

    const steps = [
        {
            step: 1,
            stepName: t("created"),
            icon: FaCheck,
        },
        {
            step: 2,
            stepName: t("picked_up"),
            icon: FaCheck,
        },
        {
            step: 3,
            stepName: t("in_transit"),
            icon: FaCheck,
        },
        {
            step: 4,
            stepName: t("out_for_delivery"),
            icon: FaCheck,
        },
        {
            step: 5,
            stepName: t("delivered"),
            icon: FaCheck,
        },
    ];

    let currentStep = 0;
    let progressBarColor = "bg-[#0098A5]";

    switch (currentStatus) {
        case "Created":
            currentStep = 0;
            progressBarColor = "bg-[#0098A5]";
            break;
        case "Collected from business":
            currentStep = 1;
            progressBarColor = "bg-[#0098A5]";
            break;
        case "Out for delivery":
            currentStep = 2;
            progressBarColor = "bg-[#0098A5]";
            break;
        case "Delivered":
            currentStep = 3;
            progressBarColor = "bg-[#0098A5]";
            break;
        case "Canceled":
            currentStep = 2;
            progressBarColor = "bg-red-600";
            break;
        case "Returned":
            currentStep = 2;
            progressBarColor = "bg-yellow-400";
            break;
        default:
            currentStep = 0;
            progressBarColor = "bg-gray-300";
    }

    return (
        <div className="relative flex flex-col items-start justify-between w-full px-4 py-10 mx-auto overflow-hidden md:items-center md:flex-row">
            <ProgressBar
                currentStep={currentStep}
                totalSteps={steps.length}
                progressBarColor={progressBarColor}
                isRTL={isRTL}
            />

            {steps.map((step, index) => (
                <StepItem
                    key={index}
                    step={step}
                    isActive={index <= currentStep}
                    progressBarColor={progressBarColor}
                />
            ))}
        </div>
    );
};

export default ShipmentProgressBar;

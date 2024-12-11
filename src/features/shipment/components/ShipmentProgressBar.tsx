import { FaCheck } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import ProgressBar from "./ProgressBar";
import StepItem from "./StepItem";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/state/store";
import { updateShipmentStatus } from "@/state/shipment/shipmentSlice";

const ShipmentProgressBar = () => {
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

    const { currentStep, progressBarColor } = useSelector(
        (state: RootState) => state.shipment
    );
    const status = useSelector(
        (state: RootState) => state.shipment.data?.CurrentStatus
    );
    const dispatch = useDispatch<AppDispatch>();
    dispatch(updateShipmentStatus(status?.code));

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
                    date={status!.timestamp}
                    currentStep={currentStep}
                />
            ))}
        </div>
    );
};

export default ShipmentProgressBar;

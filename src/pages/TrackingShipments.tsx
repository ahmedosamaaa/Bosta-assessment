import { useTranslation } from "react-i18next";

const TrackingShipments = () => {
    const { t } = useTranslation();

    return (
        <div>
            <h1>{t("greeting")}</h1>
        </div>
    );
};

export default TrackingShipments;

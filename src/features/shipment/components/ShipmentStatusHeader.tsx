import {
    dateParse,
    toArabicDateTime,
    toArabicNumbers,
} from "@/utils/arabicTranslation";
import ShipmentProgressBar from "./ShipmentProgressBar";
import { useSelector } from "react-redux";
import { RootState } from "@/state/store";
import { ShipmentTypes } from "@/types/shipmentTypes";
import { useTranslation } from "react-i18next";
import Error from "@/components/Error";

const ShipmentStatusHeader = () => {
    const { t, i18n } = useTranslation(["trackingShipment", "error"]);
    const isRTL = i18n.language === "ar";
    const shipment = useSelector<RootState, ShipmentTypes | null>(
        (state) => state.shipment.data
    );

    if (!shipment) {
        return <Error>{t("no_shipment_data")}</Error>;
    }
    return (
        <section>
            <div className="relative border rounded-md border-border-color">
                <div className="p-4">
                    <div className="">
                        <p className="text-text-secondary-color">
                            {t("order")}#{" "}
                            {isRTL
                                ? toArabicNumbers(shipment?.TrackingNumber)
                                : shipment?.TrackingNumber}
                        </p>
                        <p className="py-2 text-2xl font-bold text-text-color">
                            {t("arrived_by")}{" "}
                            {shipment.PromisedDate && (
                                <span className="text-secondary-color">
                                    {isRTL
                                        ? toArabicDateTime(
                                              shipment?.PromisedDate
                                          )?.date
                                        : dateParse(shipment?.PromisedDate)
                                              ?.date}
                                </span>
                            )}
                        </p>
                        <p className="py-2 text-text-secondary-color">
                            {t("order_expected_date")}
                        </p>
                    </div>
                </div>
                <hr className="border-border-color" />
                <ShipmentProgressBar />
            </div>
        </section>
    );
};

export default ShipmentStatusHeader;

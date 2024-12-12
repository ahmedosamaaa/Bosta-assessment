import { useDispatch, useSelector } from "react-redux";
import ShipmentStatusHeader from "./components/ShipmentStatusHeader";
import { useShipment } from "./hooks/useShipment";
import { AppDispatch, RootState } from "@/state/store";
import { saveShipmentData } from "@/state/shipment/shipmentSlice";
import { useEffect } from "react";
import Header from "./components/Header";
import Error from "@/components/Error";
import Loader from "@/components/Loader";
import TrackingDetails from "./components/TrackingDetails";
import { useTranslation } from "react-i18next";

const TrackingShipmentPage = () => {
    const { t } = useTranslation("error");
    const dispatch = useDispatch<AppDispatch>();
    const trackingNumber = useSelector<RootState, string>(
        (state) => state.shipment.trackingNumber
    );

    const { shipment, isLoading, isSuccess, isError } = useShipment({
        trackingNumber,
    });

    // Save shipment data to Redux store
    useEffect(() => {
        if (isSuccess && shipment) {
            dispatch(saveShipmentData(shipment.data));
        }
    }, [isSuccess, shipment, dispatch]);

    // Render loading state
    if (isLoading && !shipment) {
        return (
            <div>
                <Header />
                <Loader />
            </div>
        );
    }
    // Render error state
    if (isError) {
        return (
            <div>
                <Header />
                <Error>{t("no_record_found")}</Error>
                <div className="w-4/6 mx-auto mt-32 sm:w-72">
                    <img src="/images/DeliveryMan.svg" alt="" />
                </div>
            </div>
        );
    }

    // Render success state
    if (isSuccess && shipment) {
        return (
            <div>
                <Header />
                <div className="px-10 py-5 mx-auto mt-10 max-w-7xl">
                    <ShipmentStatusHeader />
                    {shipment.data.TransitEvents &&
                    shipment.data.TransitEvents.length > 0 ? (
                        <TrackingDetails />
                    ) : (
                        <p className="h-24 py-5 mt-5 text-text-color">
                            No Tracking Details
                        </p>
                    )}
                </div>
            </div>
        );
    }

    // Render fallback
    return (
        <div>
            <Header />
            <div className="w-4/6 mx-auto mt-32 sm:w-72">
                <img src="/images/DeliveryMan.svg" alt="" />
            </div>
        </div>
    );
};

export default TrackingShipmentPage;

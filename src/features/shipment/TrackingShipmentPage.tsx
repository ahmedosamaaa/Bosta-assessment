import { useDispatch } from "react-redux";
import ShipmentStatusHeader from "./components/ShipmentStatusHeader";
import { useShipment } from "./hooks/useShipment";
import { AppDispatch } from "@/state/store";
import { saveShipmentData } from "@/state/shipment/shipmentSlice";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Header from "./components/Header";
import Error from "@/components/Error";
import Loader from "@/components/Loader";

const TrackingShipmentPage = () => {
    const dispatch = useDispatch<AppDispatch>();

    const [searchParams] = useSearchParams();

    const trackingNumber = searchParams.get("id");

    const { shipment, isPending, isSuccess, isError } = useShipment({
        trackingNumber,
    });
    useEffect(() => {
        if (isSuccess && shipment) {
            dispatch(saveShipmentData(shipment.data));
        }
    }, [isSuccess, shipment, dispatch]);
    return (
        <div>
            <Header />
            <div className="px-10 mx-auto my-10 max-w-7xl">
                {isPending ? (
                    <Loader />
                ) : isError ? (
                    <Error />
                ) : isSuccess && shipment ? (
                    <div className="px-5 mx-auto my-10 max-w-7xl ">
                        <ShipmentStatusHeader />
                    </div>
                ) : null}
            </div>
        </div>
    );
};

export default TrackingShipmentPage;

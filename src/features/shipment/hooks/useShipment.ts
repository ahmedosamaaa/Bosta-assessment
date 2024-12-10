import { getTrackingData } from "@/services/trackingApi";
import { useQuery } from "@tanstack/react-query";

export function useShipment({
    trackingNumber,
}: {
    trackingNumber: string | null;
}) {
    const {
        isPending,
        data: shipment,
        isSuccess,
        isError,
    } = useQuery({
        queryKey: ["shipment", trackingNumber],
        queryFn: () => getTrackingData({ trackingNumber }),
        retry: false,
    });

    return { isPending, shipment, isSuccess, isError };
}

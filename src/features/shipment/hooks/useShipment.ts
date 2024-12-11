import { getTrackingData } from "@/services/trackingApi";
import { useQuery } from "@tanstack/react-query";

export function useShipment({
    trackingNumber,
}: {
    trackingNumber: string | null;
}) {
    const {
        isLoading,
        data: shipment,
        isSuccess,
        isError,
    } = useQuery({
        queryKey: ["shipment", trackingNumber],
        queryFn: () => getTrackingData({ trackingNumber }),
        retry: false,
        enabled: !!trackingNumber,
    });
    return { isLoading, shipment, isSuccess, isError };
}

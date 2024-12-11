import axios from "axios";

const BASE_URL = "https://tracking.bosta.co/shipments/track";

export async function getTrackingData({
    trackingNumber,
}: {
    trackingNumber: string | null;
}) {
    try {
        if (!trackingNumber || !trackingNumber.length) {
            return;
        }
        const response = await axios.get(`${BASE_URL}/${trackingNumber}`, {
            headers: {
                "content-type": "application/json;",
                "x-requested-by": "Bosta",
            },
        });
        if (response.status >= 200 && response.status < 300) {
            return response;
        } else {
            throw new Error(response.data.message);
        }
    } catch (error) {
        if (axios.isAxiosError(error)) {
            throw new Error(
                error.response?.data?.message || "Failed to fetch tracking data"
            );
        }
        throw error;
    }
}

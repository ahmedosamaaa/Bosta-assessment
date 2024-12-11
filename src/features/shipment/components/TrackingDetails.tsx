import { useState } from "react";
import { RootState } from "@/state/store";
import { TransitEvents } from "@/types/shipmentTypes";
import { dateParse, toArabicDateTime } from "@/utils/arabicTranslation";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";

interface TrackingDetail {
    timestamp: string;
    state: string;
    code: number;
    msg?: string;
    exceptionCode?: string;
}

const TrackingDetails = () => {
    const { t, i18n } = useTranslation("trackingShipment");
    const RTL = i18n.language === "ar";
    const trackDetails = useSelector<RootState, TransitEvents | undefined>(
        (state) => state.shipment.data?.TransitEvents
    );

    const [showAll, setShowAll] = useState(false);
    if (!trackDetails || trackDetails.length === 0) {
        return (
            <p className="text-lg text-gray-500">
                No tracking details available.
            </p>
        );
    }

    const groupedDetails: TrackingDetail[][] = [];

    let currentGroup: TrackingDetail[] = [];
    trackDetails.forEach((detail, index) => {
        const currentDate = RTL
            ? toArabicDateTime(detail.timestamp).date
            : dateParse(detail.timestamp).date;

        const previousDate =
            index > 0
                ? RTL
                    ? toArabicDateTime(trackDetails[index - 1].timestamp).date
                    : dateParse(trackDetails[index - 1].timestamp).date
                : null;

        if (currentDate === previousDate) {
            currentGroup.push(detail);
        } else {
            if (currentGroup.length > 0) {
                groupedDetails.push(currentGroup);
            }
            currentGroup = [detail];
        }
    });

    if (currentGroup.length > 0) {
        groupedDetails.push(currentGroup);
    }

    const totalLength = trackDetails.length;

    const visibleDetails = showAll ? trackDetails : trackDetails.slice(0, 5);

    // Re-group visibleDetails to match the original structure
    const regroupDetails = [];
    let index = 0;
    for (const group of groupedDetails) {
        const groupVisible = group.filter(
            () => index++ < visibleDetails.length
        );
        if (groupVisible.length) regroupDetails.push(groupVisible);
    }

    return (
        <section className="flex flex-col items-center justify-center mt-10">
            {regroupDetails.map((group, groupIndex) => {
                const isLastGroup = groupIndex === regroupDetails.length - 1;
                return (
                    <div
                        key={groupIndex}
                        className={`self-start relative my-10 after:content-[''] after:absolute after:-top-6 after:-left-[9px] after:w-4 after:h-4 after:bg-gray-400 after:rounded-full ${
                            RTL ? "after:-right-[9px]" : "after:-left-[9px]"
                        } border-s-2 p-5`}
                    >
                        {/* Display the date based on the RTL condition */}
                        <p className="absolute text-lg font-semibold -top-[29px]">
                            {RTL
                                ? toArabicDateTime(group[groupIndex].timestamp)
                                      .date
                                : dateParse(group[groupIndex].timestamp).date}
                        </p>

                        {/* Map over each item in the group */}
                        {group.map((item, itemIndex) => {
                            const isLastItemInLastGroup =
                                isLastGroup && itemIndex === group.length - 1;
                            return (
                                <div
                                    key={itemIndex}
                                    className={`flex flex-col p-4 my-4 border rounded-md w-fit ${
                                        isLastItemInLastGroup && !showAll
                                            ? "opacity-30"
                                            : ""
                                    }`}
                                >
                                    <p>{t(item.code.toString())}</p>
                                    <p className="text-gray-500">
                                        <p className="pt-4">
                                            {RTL
                                                ? toArabicDateTime(
                                                      item.timestamp
                                                  ).time
                                                : dateParse(item.timestamp)
                                                      .time}
                                        </p>
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                );
            })}
            {totalLength > 4 && (
                <button
                    onClick={() => setShowAll((showAll) => !showAll)}
                    className="flex justify-center items-center gap-2 px-4 py-2 mt-4 font-semibold text-[#0098A5] bg-transparent rounded"
                >
                    {showAll ? (
                        <>
                            {t("show_less")}
                            <FaChevronUp size={15} />
                        </>
                    ) : (
                        <>
                            {t("show_more")}
                            <FaChevronDown size={15} />
                        </>
                    )}
                </button>
            )}
        </section>
    );
};

export default TrackingDetails;

import { format, parseISO } from "date-fns";
import { ar } from "date-fns/locale";

// Arabic digits mapping
const englishToArabicDigits: { [key: string]: string } = {
    "0": "٠",
    "1": "١",
    "2": "٢",
    "3": "٣",
    "4": "٤",
    "5": "٥",
    "6": "٦",
    "7": "٧",
    "8": "٨",
    "9": "٩",
};

//Parsing Date and Time
export const dateParse = (dateStr: string) => {
    const date = parseISO(dateStr);

    const parsedDate = format(date, "EEEE d MMMM yyyy");
    const time = format(date, "h:mm:ss aaa");

    return { date: parsedDate, time };
};

//  Converts English numbers to Arabic numbers

export const toArabicNumbers = (number: number | string): string => {
    return number
        .toString()
        .replace(/[0-9]/g, (digit) => englishToArabicDigits[digit] || digit);
};

//  Converts an English date string to Arabic
export const toArabicDateTime = (
    dateStr: string
): { date: string; time: string } => {
    try {
        const date = parseISO(dateStr);
        // Format the date and time separately
        const arabicDate = format(date, "EEEE d MMMM yyyy", { locale: ar });
        const arabicTime = format(date, "h:mm:ss a", { locale: ar });

        return {
            date: toArabicNumbers(arabicDate),
            time: toArabicNumbers(arabicTime),
        };
    } catch (error) {
        console.error("Error converting date to Arabic:", error);
        return { date: dateStr, time: "" };
    }
};

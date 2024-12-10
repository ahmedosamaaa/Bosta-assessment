export type ShipmentTypes = {
    provider: string;
    Type: string;
    ScheduleDate: string;
    CurrentStatus: {
        state: string;
        code: number;
        timestamp: string;
    };
    TransitEvents?: {
        timestamp: string;
        state: string;
        code: number;
        msg?: string;
        exceptionCode?: string;
    }[];
    TrackingNumber: string;
    CreateDate: string;
    DropOffAddress: {
        country: {
            _id: string;
            name: string;
            nameAr: string;
            code: string;
        };
        city: {
            _id: string;
            name: string;
            sector: number;
            nameAr: string;
        };
        zone: {
            _id: string;
            name: string;
            nameAr: string;
        };
        district: {
            _id: string;
            name: string;
            nameAr: string;
        };
        firstLine: string;
        geoLocation: null | string; // Assuming `geoLocation` can be a string or null
    };
    PromisedDate: string;
    isEditableShipment: boolean;
    exceptionCode: number;
    nextWorkingDay: {
        dayDate: string;
        dayName: string;
    }[];
    collectedFromBusiness: string;
    canRequestPOSMachine: boolean;
    deliveryCountryCode: string;
    canPayOnline: boolean;
    isOnlinePaymentFeatureEnabled: boolean;
};

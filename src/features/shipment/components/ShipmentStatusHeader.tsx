import ShipmentProgressBar from "./ShipmentProgressBar";

const ShipmentStatusHeader = () => {
    return (
        <section>
            <div className="relative border rounded-md">
                <div className="p-4">
                    <div>
                        <p className="text-gray-400">ORDER #66452</p>
                        <p className="py-2 text-2xl font-bold ">
                            Arriving by
                            <span className="text-[#0098A5]"> Sun Nov.13</span>
                        </p>
                        <p>
                            your order is expected to arrive within 2-3 working
                            days
                        </p>
                    </div>
                </div>
                <hr />
                <ShipmentProgressBar />
            </div>
        </section>
    );
};

export default ShipmentStatusHeader;

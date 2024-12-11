import React from "react";

const Error = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="max-w-5xl p-5 mx-auto bg-red-300 border-red-400 rounded-md border-1 w-[80%]">
            {children}
        </div>
    );
};

export default Error;

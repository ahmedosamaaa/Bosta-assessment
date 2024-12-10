function FullPageLoading() {
    return (
        <div className="absolute inset-0 flex items-center justify-center bg-slate-200/20 backdrop-blur-sm">
            <div className="relative inline-flex">
                <div className="w-8 h-8 bg-red-500 rounded-full"></div>
                <div className="absolute top-0 left-0 w-8 h-8 bg-red-500 rounded-full animate-ping"></div>
                <div className="absolute top-0 left-0 w-8 h-8 bg-red-500 rounded-full animate-pulse"></div>
            </div>
        </div>
    );
}

export default FullPageLoading;

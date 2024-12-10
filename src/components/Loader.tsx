const Loader = () => {
    return (
        <div className="flex items-center justify-center py-10 space-x-2 ">
            <span className="sr-only">Loading...</span>
            <div className="h-5 w-5 bg-red-600 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
            <div className="h-5 w-5 bg-red-600 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
            <div className="w-5 h-5 bg-red-600 rounded-full animate-bounce"></div>
        </div>
    );
};

export default Loader;

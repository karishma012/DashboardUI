import React from 'react';

function LineCharts() {
    return (
        <div className="container">
            <div className="p-2">
                {/* Line charts content */}
                <div className="rounded-3xl p-8 max-w-xl mr-20 ml-8 my-6 bg-white border-solid border-4 border-transparent hover:border-blue-400 hover:border-solid ">
                    {/* Heading */}
                    <div className="text-lg font-semibold mb-4">Stats Overview</div>

                    {/* Active State */}
                    <div className="mb-6"> {/* Increased height */}
                        <div className="text-xs mb-2 font-bold text-gray-500">Active</div>
                        <div className="relative">
                            <div className="h-2 bg-gray-300 rounded-full">
                                <div className="w-3/5 h-full bg-[#16C09861] rounded-full"></div>
                            </div>
                            <div className="absolute right-0 text-xs text-right font-bold text-gray-500">63%</div>
                        </div>
                    </div>

                    {/* Inactive State */}
                    <div className="mb-6"> {/* Increased height */}
                        <div className="text-xs font-bold text-gray-500 mb-2">Inactive</div>
                        <div className="relative">
                            <div className="h-2 bg-gray-300 rounded-full">
                                <div className="w-5/6 h-full bg-red-500 rounded-full"></div>
                            </div>
                            <div className="absolute right-0 text-xs text-right font-bold text-gray-500">88%</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LineCharts;

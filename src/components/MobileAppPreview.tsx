import React from "react";

interface MobileAppPreviewProps {
  className?: string;
}

const MobileAppPreview = ({ className = "" }: MobileAppPreviewProps) => {
  return (
    <div
      className={`relative w-full h-full flex items-center justify-center ${className}`}
    >
      {/* Circular gradient background */}
      <div className="absolute w-[600px] h-[600px] rounded-full bg-gradient-to-br from-[#e9ff4d]/50 to-[#a6ff4d]/30 blur-xl"></div>

      {/* Budget tracking phone (positioned behind) */}
      <div className="relative z-10 -mr-10 transform -rotate-6">
        <div className="w-[280px] h-[560px] bg-black rounded-[40px] p-4 shadow-xl border border-gray-800">
          {/* Phone notch */}
          <div className="w-32 h-6 mx-auto bg-black rounded-b-xl mb-1 flex justify-center items-center">
            <div className="w-16 h-4 bg-black rounded-lg relative">
              <div className="absolute left-2 top-1.5 w-2 h-2 rounded-full bg-gray-700"></div>
            </div>
          </div>

          {/* Phone screen content */}
          <div className="h-full w-full bg-black rounded-3xl overflow-hidden text-white">
            {/* Status bar */}
            <div className="flex justify-between items-center px-4 py-2 text-xs">
              <span>9:41</span>
              <div className="flex space-x-1">
                <div className="w-4 h-3 bg-white/80 rounded-sm"></div>
                <div className="w-3 h-3 bg-white/80 rounded-full"></div>
                <div className="w-3 h-3 bg-white/80 rounded-full"></div>
              </div>
            </div>

            {/* Budget screen */}
            <div className="p-4">
              <div className="flex items-center mb-6">
                <div className="w-6 h-6 rounded-full bg-gray-700 flex items-center justify-center mr-2">
                  <span className="text-xs">&lt;</span>
                </div>
                <h2 className="text-lg font-medium">My budget</h2>
              </div>

              <div className="mb-6">
                <h1 className="text-3xl font-bold mb-1">$5,864</h1>
                <p className="text-xs text-gray-400">
                  September forecast $3,520
                </p>
              </div>

              <h3 className="text-lg font-medium mb-4">My costs</h3>

              {/* Budget bars */}
              <div className="flex justify-between space-x-4 mt-8">
                <div className="flex flex-col items-center">
                  <div className="w-6 bg-gray-700 rounded-t-md h-32 mb-2"></div>
                  <span className="text-xs text-gray-400">Jun 10</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-6 bg-gray-700 rounded-t-md h-24 mb-2"></div>
                  <span className="text-xs text-gray-400">Jul 14</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-6 bg-[#e9ff4d] rounded-t-md h-40 mb-2"></div>
                  <span className="text-xs text-gray-400">Aug 15</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Card management phone (positioned in front) */}
      <div className="relative z-20 transform rotate-3">
        <div className="w-[280px] h-[560px] bg-black rounded-[40px] p-4 shadow-xl border border-gray-800">
          {/* Phone notch */}
          <div className="w-32 h-6 mx-auto bg-black rounded-b-xl mb-1 flex justify-center items-center">
            <div className="w-16 h-4 bg-black rounded-lg relative">
              <div className="absolute left-2 top-1.5 w-2 h-2 rounded-full bg-gray-700"></div>
            </div>
          </div>

          {/* Phone screen content */}
          <div className="h-full w-full bg-black rounded-3xl overflow-hidden text-white">
            {/* Status bar */}
            <div className="flex justify-between items-center px-4 py-2 text-xs">
              <span>9:41</span>
              <div className="flex space-x-1">
                <div className="w-4 h-3 bg-white/80 rounded-sm"></div>
                <div className="w-3 h-3 bg-white/80 rounded-full"></div>
                <div className="w-3 h-3 bg-white/80 rounded-full"></div>
              </div>
            </div>

            {/* Card screen */}
            <div className="p-4">
              <div className="flex items-center mb-6">
                <div className="w-6 h-6 rounded-full bg-gray-700 flex items-center justify-center mr-2">
                  <span className="text-xs">&lt;</span>
                </div>
                <h2 className="text-lg font-medium">Your cards</h2>
              </div>

              {/* Credit card */}
              <div className="bg-[#f8ffa3] rounded-xl p-4 mb-6 text-black">
                <div className="flex justify-between items-start mb-8">
                  <div className="w-10 h-6 bg-gray-200 rounded opacity-70"></div>
                  <span className="text-lg font-bold">$ 5,566.55</span>
                </div>

                <div className="mb-4">
                  <div className="w-12 h-8 bg-gray-300 rounded opacity-70 mb-2"></div>
                  <div className="flex space-x-2">
                    <span>••••</span>
                    <span>••••</span>
                    <span>••••</span>
                    <span>4552</span>
                  </div>
                </div>

                <div className="flex justify-between text-xs">
                  <span>MARIO LOPEZ</span>
                  <span>12/22</span>
                </div>
              </div>

              {/* Pagination dots */}
              <div className="flex justify-center space-x-1 mb-4">
                <div className="w-1.5 h-1.5 rounded-full bg-[#e9ff4d]"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-gray-600"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-gray-600"></div>
              </div>

              {/* Transactions */}
              <div className="mt-4">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-medium">Transactions</h3>
                  <div className="flex items-center text-xs text-gray-400">
                    <span>Filter</span>
                    <span className="ml-1">▼</span>
                  </div>
                </div>

                <div className="text-xs text-gray-400 mb-2">Today</div>

                {/* Transaction items */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-[#e9ff4d] flex items-center justify-center text-black mr-3">
                        <span>↑</span>
                      </div>
                      <div>
                        <div className="text-sm">Transfer</div>
                        <div className="text-xs text-gray-400">
                          Incoming transfer
                        </div>
                      </div>
                    </div>
                    <span className="text-[#a6ff4d]">+ $3,110</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-blue-400 flex items-center justify-center text-white mr-3">
                        <span>+</span>
                      </div>
                      <div>
                        <div className="text-sm">Health</div>
                        <div className="text-xs text-gray-400">Pharmacy</div>
                      </div>
                    </div>
                    <span>- $312.9</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileAppPreview;

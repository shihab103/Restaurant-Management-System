import React from 'react';

const BestBuyer = () => {
  return (
    <div>
      <div className="bg-[#f7f4ed] py-16 md:py-20">
        {/* Title */}
        <div className="text-center mb-12 md:mb-16">
          <h4 className="text-orange-500 font-semibold flex items-center justify-center gap-2 text-sm md:text-base">
            OUR TOP BUYER
          </h4>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold pt-2 mb-4 md:pt-4 lg:pb-20">
          Meet the customers who love us the most.
          </h2>
        </div>

        {/* Cards */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8 ">
          <div className="card bg-base-100 w-96 shadow-sm">
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                <h1>Abu Nayeem Riyad</h1>
              </h2>
              <p></p>
              <div className="flex gap-2">
                <div className="badge badge-outline">Total reviews</div>
                <div className="badge badge-outline bg-amber-500 hover:bg-amber-600 text-white">13</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestBuyer;

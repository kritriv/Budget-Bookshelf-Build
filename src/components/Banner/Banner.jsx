import React from "react";
import BannerCard from "../home/BannerCard";
import { Link } from "react-router-dom";

const Banner = () => {
  const NavigateClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="px-4 lg:px-24 bg-cyan-50  flex items-center" >
      <div className="flex w-full flex-col md:flex-row justify-between items-center gap-12 py-40">
        {/* left side */}
        <div className="md:w-1/2 space-y-8 h-full">
          <h2 className="text-5xl font-bold leading-snug text-black">
            Buy and Sell Your Books <span className="text-blue-700">for the Best Prices</span>
          </h2>
          <p className="md:w-4/5">
            Do you have a collection of literary treasures longing to be discovered by fellow book enthusiasts? Look no further! Budget Bookshelves is your go-to destination to buy and sell old books
            Our user-friendly platform ensures a hassle-free experience. List your old books effortlessly and connect with eager readers looking for their next adventure.
          </p>
          <div>

            <Link to="/shop" className="mt-8 block" onClick = {NavigateClick}>
              <button className="bg-blue-700 px-6 py-2 text-white font-medium hover:bg-black transition-all ease-in duration-200">Explore All Books</button>
            </Link>
          </div>
        </div>
        {/* right side */}
        <div>
          <BannerCard />
        </div>
      </div>
    </div>
  );
};

export default Banner;

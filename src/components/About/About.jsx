import React from "react";
import Favbooks from "../../assets/Favbooks.png";
import aboutimg2 from "../../assets/aboutimg2.jpg";
import { Link } from "react-router-dom";

const About = () => {
  const NavigateClick = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div>
      <div className="px-4 lg:px-24 bg-cyan-50  flex items-center">

        {/* About section */}
        <div className="flex w-full flex-col md:flex-row justify-between items-center gap-12 py-40">
          <div className="md:w-1/2">
            <img src={Favbooks} alt="" className="rounded md:w-10/12" />
          </div>
          <div className="md:w-1/2 space-y-8 h-full">
            <h2 className="text-5xl font-bold leading-snug text-black">
              About <span className="text-blue-700">Budget Bookshelf!</span>
            </h2>
            <p className="md:w-4/5">
              At Budget Bookshelves, we believe that creating an organized and
              stylish home library doesn't have to break the bank. Our collection
              of budget-friendly bookshelves offers a perfect blend of
              functionality, aesthetics, and affordability. Whether you're an avid
              reader, a student, or someone looking to add a touch of charm to
              your living space, we have the ideal bookshelf for you.
            </p>

            <div></div>
            <Link to="/shop" className="mt-8 block" onClick = {NavigateClick}>
              <button
                className="bg-blue-700 text-white font-semibold px-5 py-2 rounded 
      hover:bg-black transition-all duration-300"
              >
                Explore More
              </button>
            </Link>
          </div>
        </div>



      </div>
      {/* about section info */}
      <div className="px-4 lg:px-24 my-20 flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-5xl font-bold my-4 md:w:3/4">
            Why Choose <span className="text-blue-700">Budget Bookshelf!</span>
          </h2>
          <div className="mb-10   md:w-5/6">
            <h4 className="text-2xl font-bold my-4 md:w:2/4">
              1. Global Reach:
            </h4>
            <p className="mb-10  text-lg md:w-6/6">
              Budget Booshelf Websites provide a platform for sellers to reach a global
              audience.
            </p>
            <h4 className="text-2xl font-bold my-4 md:w:2/4">
              2. Convenience:
            </h4>
            <p className="mb-10  text-lg md:w-6/6">
              Both sellers and buyers enjoy the convenience of online transactions.
            </p>
            <h4 className="text-2xl font-bold my-4 md:w:3/4">
              3.Search and Filter Options
            </h4>
            <p className="mb-10  text-lg md:w-6/6">
              Online platforms usually offer advanced search and filter options, making it easier for buyers to find the books they are looking for.
            </p>
          </div>

          <div></div>

        </div>
        <div className="md:w-1/2">
          <img src={aboutimg2} alt="" className="rounded md:w-10/12" />
        </div>
      </div>

    </div>





  );
};

export default About;

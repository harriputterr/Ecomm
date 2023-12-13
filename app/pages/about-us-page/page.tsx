"use client";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

const page = () => {
    return (
      <main className="primary-color">
        <Navbar />
        <div className="flex flex-col items-center justify-center">
          <div className="max-w-4xl my-4 secondary-color p-4">
            <h1 className="text-4xl my-4 uppercase">The Story of ShopSphere</h1>
            <h2 className="my-6 font-light">
              A Shopping Experience Like No Other
            </h2>
            <p className="my-2 font-light">
              Ever since we founded our store in 2023, we had one goal in mind:
              ensuring a consistent variety of fantastic items along with unique,
              limited edition and seasonal merchandise that fit any budget. We’re
              proud of how far we’ve come, and remain committed to adding more
              great products to our stock year after year.
            </p>
            <p className="my-8 font-light">
              Our collections are carefully selected with our customers’ needs in
              mind. Delivery options and payment methods are generous and
              flexible. Browse our product gallery and start selecting new
              favorites you won't find anywhere else. For questions, comments or
              suggestions, don't hesitate to contact us.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center mt-36">
            <h2 className="text-4xl uppercase my-6">Our Team</h2>
            <p className="font-light">Committed to your satisfaction</p>
          </div>
        </div>
        <div className="flex flex-row items-center justify-center text-center mt-16">
          <div className="secondary-color p-24 m-3">
            <p>Harsingh Sekhon</p>
          </div>
          <div className="secondary-color p-24 m-3">
            <p>Jaskaran Sran</p>
          </div>
          <div className="secondary-color p-24 m-3">
            <p>Kevin Le Huu</p>
          </div>
          <div className="secondary-color p-24 m-3">
            <p>Tristan Idolor</p>
          </div>
          <div className="secondary-color p-24 m-3">
            <p>Troy Franks</p>
          </div>
        </div>
        {/* <div className="flex flex-row items-center justify-center mt-2">
          <p className="mr-44">Harsingh Sekhon</p>
          <p className="mr-44">Jaskaran Sran</p>
          <p className="mr-44">Kevin Le Huu</p>
          <p className="mr-44">Tristan Idolor</p>
          <p>Troy Franks</p>
        </div> */}
        <Footer />
      </main>
    );
  };
  
  export default page;
  
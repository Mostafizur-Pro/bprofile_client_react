import image1 from "../../../assets/home/service/img-1.jpg";

const HomeAbout = () => {
  return (
    <div className="mx-10 mx-auto mb-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center h-96">
        <div className="mx-5 mx-auto">
          <span className="font-chivo inline-block bg-green-300 text-green-900 py-[14px] px-[28px] rounded-[50px] text-lg font-bold leading-[14px] mb-[25px]">
            — About US
          </span>
          <h1 className="text-5xl font-extrabold">
            Delivering excellence, one shipment at a time.
          </h1>
        </div>
        <div className="card-body text-gray-500 text-2xl mt-10 lg:mt-0">
          <p>
            Thanks to our advanced technological infrastructure and expert
            staff, we offer a wide range of services such as supply chain
            management, warehousing, distribution, transportation, and customs
            services. We aim to be a valuable partner for our customers to grow
            their businesses.
          </p>
        </div>
      </div>

      <hr />

      <div className="mt-20">
        <div className="h-full carousel carousel-vertical rounded-box">
          <div className="carousel-item h-full">
            <div className="hero bg-base-200">
              <div className="hero-content flex-col lg:flex-row">
                <img
                  src={image1}
                  className="max-w-full lg:max-w-2xl rounded-lg shadow-2xl lg:mr-5 mb-5 lg:mb-0"
                />
                <div>
                  <div className="mx-5 mx-auto">
                    <h1 className="text-5xl font-extrabold">
                      We assure fast and secure transportation for you.
                    </h1>
                  </div>
                  <div className="my-10">
                    <div className="collapse collapse-plus mb-10">
                      <input
                        type="radio"
                        name="my-accordion-3"
                        defaultChecked
                      />
                      <div className="collapse-title text-2xl hover:bg-green-200 border-b-4 border-white font-bold bg-black text-white">
                        Air Freight Service
                      </div>
                      <div className="collapse-content ">
                        <p>
                          Air freight terminals and facilities are subject to
                          strict security measures and we take all necessary
                          measures to ensure the highest standards for the
                          security of our customers shipments.
                        </p>
                      </div>
                    </div>
                    <div className="collapse collapse-plus mb-10">
                      <input type="radio" name="my-accordion-3" />
                      <div className="collapse-title text-2xl hover:bg-green-200 border-b-4 border-white font-bold bg-black text-white">
                        Warehousing Service
                      </div>
                      <div className="collapse-content ">
                        <p>
                          Click edit button to change this text. Lorem ipsum
                          dolor sit amet, consectetur adipiscing elit. Ut elit
                          tellus, luctus nec ullamcorper mattis, pulvinar
                          dapibus leo.
                        </p>
                      </div>
                    </div>
                    <div className="collapse collapse-plus mb-10">
                      <input type="radio" name="my-accordion-3" />
                      <div className="collapse-title text-2xl hover:bg-green-200 border-b-4 border-white font-bold bg-black text-white">
                        Ocean Freight Service
                      </div>
                      <div className="collapse-content ">
                        <p>
                          Click edit button to change this text. Lorem ipsum
                          dolor sit amet, consectetur adipiscing elit. Ut elit
                          tellus, luctus nec ullamcorper mattis, pulvinar
                          dapibus leo.
                        </p>
                      </div>
                    </div>
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

export default HomeAbout;

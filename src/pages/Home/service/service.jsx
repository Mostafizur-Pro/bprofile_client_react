import ServiceList from "./serviceList";

const HomeService = () => {
  return (
    <div>
      <div className="mx-10 mx-auto mb-10 bg-black text-white my-10 py-10">
        <div className="mx-5 mx-auto">
          <p className="font-chivo inline-block bg-green-300 text-green-900 py-[14px] px-[28px] rounded-[50px] text-lg font-bold leading-[14px] mb-[25px]">
            — Freight Services
          </p>
          <h1 className="text-3xl lg:text-5xl font-extrabold">
            As SwiftTrans, we serve a wide variety of businesses and
            organizations.
          </h1>
        </div>

        <hr className="my-20" />

        <ServiceList />
      </div>
    </div>
  );
};

export default HomeService;

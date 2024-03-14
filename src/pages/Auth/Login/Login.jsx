const LoginForm = () => {
  return (
    <div>
      <div>
        <div className="hero">
          <div className=" bg-opacity-60"></div>
          <div className="hero-content text-center ">
            <div className="hero ">
              <div className="hero-content  gap-0 flex-col lg:flex-row">
                <div className="text-center lg:text-left mx-auto lg:mr-5 lg:mx-0 lg:w-3/6">
                  <h1 className="text-3xl lg:text-5xl text-blue-900 font-bold">
                    Make Business Friends
                  </h1>
                  <p className="py-3 lg:py-6 text-sm lg:text-base text-blue-900">
                    Friend Finder is a social network template that can be used
                    to connect people. The template offers Landing pages, News
                    Feed, Image/Video Feed, Chat Box, Timeline and lot more.
                  </p>
                </div>

                <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100 lg:w-3/6">
                  <form
                    className="bg-white rounded-lg m-10"
                    action="{{ url('login') }}"
                    method="post"
                  >
                    <h3 className="text-3xl font-semibold mb-4"> Login</h3>
                    <div className="mb-4">
                      <div className="label pb-0">
                        <span className="label-text">
                          Email or Number{" "}
                          <span className="text-red-500">*</span>{" "}
                        </span>
                      </div>
                      <input
                        type="text"
                        name="text"
                        required
                        placeholder="{{ __('translateLogin.enterYourEmailOrNumber') }}"
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                      />
                    </div>

                    <div className="mb-4">
                      <div className="label pb-0">
                        <span className="label-text">
                          Password<span className="text-red-500">*</span>{" "}
                        </span>
                      </div>
                      <input
                        type="password"
                        name="password"
                        required
                        placeholder="{{ __('translateLogin.enterYourPassword') }}"
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                      />
                    </div>
                    <div className="mb-6 flex items-center lg:items-start justify-between gap-4 lg:gap-10">
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="rememberMe"
                          className="h-4 w-4 mr-2"
                        />
                        <label className="text-sm lg:text-base">
                          Remember me
                        </label>
                      </div>

                      <a href="#!" className="text-sm lg:text-base">
                        Forgot Password?
                      </a>
                    </div>

                    <button
                      type="submit"
                      className="bg-[#282560]  w-full rounded px-6 pb-2 pt-2.5 text-md font-medium leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
                      data-te-ripple-init
                      data-te-ripple-color="light"
                    >
                      submit
                    </button>
                    <p className="mt-5">
                      Create new Account! 
                      <a
                        className="text-purple-600 font-bold"
                        href="{{url('/register')}}"
                      >
                        Please Register
                      </a>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;

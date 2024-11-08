// import NewsLatterBox from "./NewsLatterBox";
import AddressBox from "./AddressBox";
import "animate.css/animate.compat.css";

const Contact = () => {
  return (
    <section id="contact" className="overflow-hidden py-4 md:py-6 lg:py-8">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
            <div className="mb-12 rounded-sm bg-white p-6 shadow-three dark:bg-gray-dark sm:p-[55px] lg:mb-5 lg:p-8">
              <h2 className="mb-3 text-xl font-semibold text-dark dark:text-white sm:2xl md:text-3xl">
                Get In Touch
              </h2>
              <p className="mb-8 text-sm text-black md:text-base">
                With us for product overview documentation.
              </p>
              <form>
                <div className="-mx-4 flex flex-wrap">
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-4">
                      <label
                        htmlFor="name"
                        className="mb-3 block text-sm font-medium text-black dark:text-white"
                      >
                        Your Name
                      </label>
                      <input
                        type="text"
                        placeholder="Enter your name"
                        className="rounded-lg border-stroke w-full border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-4">
                      <label
                        htmlFor="email"
                        className="mb-3 block text-sm font-medium text-black dark:text-white"
                      >
                        Your Email
                      </label>
                      <input
                        type="email"
                        placeholder="Enter your email"
                        className="rounded-lg border-stroke w-full border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-4">
                      <label
                        htmlFor="name"
                        className="mb-3 block text-sm font-medium text-black dark:text-white"
                      >
                        Phone Number
                      </label>
                      <input
                        type="text"
                        placeholder="Enter your name"
                        className="rounded-lg border-stroke w-full border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-4">
                      <label
                        htmlFor="email"
                        className="mb-3 block text-sm font-medium text-black dark:text-white"
                      >
                        Your Address
                      </label>
                      <input
                        type="email"
                        placeholder="Enter your email"
                        className="rounded-lg border-stroke w-full border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <div className="mb-5">
                      <label
                        htmlFor="message"
                        className="mb-3 block text-sm font-medium text-black dark:text-white"
                      >
                        Your Message
                      </label>
                      <textarea
                        name="message"
                        rows={2}
                        placeholder="Enter your Message"
                        className="rounded-lg border-stroke w-full resize-none border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      ></textarea>
                    </div>
                  </div>
                  <div className="w-full px-4 text-end">
                    <button className="inline-block rounded-lg bg-primary px-8 py-3 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark">
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
            <AddressBox />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

"use client";

import { useRef, useState } from "react";
import AddressBox from "./AddressBox";
import ReCAPTCHA from "react-google-recaptcha";
import "animate.css/animate.compat.css";
import { toast } from "react-toastify";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    message: "",
  });

  const recaptchaRef = useRef<ReCAPTCHA | null>(null);

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" })); // Clear error on input change
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    // Get reCAPTCHA token
    const recaptchaToken = recaptchaRef.current?.getValue();

    if (!recaptchaToken) {
      setErrors((prev) => ({
        ...prev,
        recaptcha: "Please complete the reCAPTCHA",
      }));

      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, recaptchaToken }),
      });

      if (response.ok) {
        setFormData({
          name: "",
          email: "",
          phone: "",
          address: "",
          message: "",
        });

        toast.success("Message sent successfully!");
      } else {
        const data = await response.json();

        if (data.errors) {
          setErrors(data.errors);
        } else {
          toast.error("Failed to send message");
        }
      }

      setIsSubmitting(false);
    } catch (error) {
      console.error("Failed to send email", error);
      toast.error("Failed to send email");

      setIsSubmitting(false);
    } finally {
      // Reset the reCAPTCHA after submission
      recaptchaRef.current?.reset();
    }
  };

  return (
    <section id="contact" className="overflow-hidden py-4 md:py-6 lg:py-8">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-8/12 xl:w-8/12">
            <div className="mb-12 rounded-sm bg-white p-6 shadow-three dark:bg-gray-dark sm:p-[55px] lg:mb-5 lg:p-8">
              <h2 className="sm:2xl mb-3 text-xl font-semibold text-dark dark:text-white md:text-3xl">
                Get In Touch
              </h2>
              <p className="mb-8 text-sm text-black md:text-base">
                With us for product overview documentation.
              </p>
              <form onSubmit={handleSubmit}>
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
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      />
                      {errors.name && (
                        <p className="text-sm text-red-500">{errors.name}</p>
                      )}
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
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      />
                      {errors.email && (
                        <p className="text-sm text-red-500">{errors.email}</p>
                      )}
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-4">
                      <label
                        htmlFor="phone"
                        className="mb-3 block text-sm font-medium text-black dark:text-white"
                      >
                        Phone Number
                      </label>
                      <input
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Enter your phone number"
                        className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      />
                      {errors.phone && (
                        <p className="text-sm text-red-500">{errors.phone}</p>
                      )}
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-4">
                      <label
                        htmlFor="address"
                        className="mb-3 block text-sm font-medium text-black dark:text-white"
                      >
                        Your Address
                      </label>
                      <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        placeholder="Enter your address"
                        className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      />
                      {errors.address && (
                        <p className="text-sm text-red-500">{errors.address}</p>
                      )}
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
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        placeholder="Enter your Message"
                        className="border-stroke w-full resize-none rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      ></textarea>
                      {errors.message && (
                        <p className="text-sm text-red-500">{errors.message}</p>
                      )}
                    </div>
                  </div>
                  <div className="sm:flex w-full items-center justify-end gap-4">
                    <div className="sm:w-1/2 px-4">
                      {/* Google reCAPTCHA */}
                      <ReCAPTCHA
                        sitekey={
                          process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY as string
                        }
                        ref={recaptchaRef}
                      />
                      {errors.recaptcha && (
                        <p className="text-sm text-red-500">
                          {errors.recaptcha}
                        </p>
                      )}
                    </div>
                    <div className="sm:w-1/2 px-4 text-center sm:text-end mt-4 sm:mt-0">
                      <button
                        disabled={isSubmitting}
                        className="inline-block rounded-sm bg-primary px-8 py-3 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark"
                      >
                        {isSubmitting ? "Submitting..." : "Submit"}
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="w-full px-4 lg:w-4/12 xl:w-4/12">
            <AddressBox />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

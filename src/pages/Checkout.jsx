import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { applePlay, btcPay, googlePay, tringle } from "../ui/images";

export default function Checkout() {
  return (
    <>
      <Navbar />
      <section className="py-32 lg:py-44 relative">
        <div className="container z-10 relative">
          <div className="wrapper flex justify-center items-center">
            <div className="heading">
              <h1 className="text-3xl xs:text-[2rem] xs:leading-[0.95] md:text-[2.2rem] font-codePro tracking-tighter">
                CheckOut
              </h1>
            </div>
          </div>

          <div className="checkout-form grid gap-8">
            {/* Top */}
            <div className="top mt-10">
              <div className="head flex justify-between items-center gap-5 bg-main-bg/70 py-4 px-6">
                <div className="left">
                  1 X Challenge $100,000 <br /> Evaluation Program
                </div>
                {/* right */}
                <div className="right">
                  <div className="price sm:text-xl">$ 527,00</div>
                </div>
              </div>
            </div>

            {/* Forms */}
            <div className="forms grid grid-cols-2 gap-12 bg-main-bg/40 p-10  rounded-2xl">
              {/* left form */}
              <form className="grid  gap-8 justify-start items-center">
                <div className="payment grid gap-2">
                  <div className="head flex justify-center">
                    <h4>Express Payment</h4>
                  </div>

                  {/* methods */}
                  <div className="methonds flex gap-2">
                    {/* method */}
                    <img
                      className="max-w-[7rem]"
                      src={applePlay}
                      alt="pay-with-apple"
                    />
                    {/* method */}
                    <img
                      className="max-w-[7rem]"
                      src={googlePay}
                      alt="pay-with-google"
                    />
                    {/* method */}
                    <img
                      className="max-w-[7rem]"
                      src={btcPay}
                      alt="pay-with-btc"
                    />
                  </div>
                </div>
                {/* billings */}
                <div className="billings mt-3">
                  <div className="head">
                    <h2 className="text-lg xs:text-[1.2rem] xs:leading-[0.95] md:text-[1.35rem] font-codePro tracking-tighter">
                      Billing Details
                    </h2>

                    <div className="inputs grid gap-6 mt-8">
                      {/* name */}
                      <div className="name grid grid-cols-2 gap-4">
                        {/* fname */}
                        <div className="fname">
                          <input
                            name="fname"
                            className="name w-full focus:outline-primary/70 bg-main-bg/[75%] border-none outline outline-2 outline-primary/30 py-2 md:py-2 px-4  placeholder:text-[0.9rem] rounded-xl transition-all duration-200 max-w-[22rem]"
                            type="text"
                            placeholder="Name"
                          />
                        </div>
                        {/* suname */}
                        <div className="surname">
                          <input
                            name="surname"
                            className="name w-full focus:outline-primary/70 bg-main-bg/[75%] border-none outline outline-2 outline-primary/30 py-2 md:py-2 px-4  placeholder:text-[0.9rem] rounded-xl transition-all duration-200 max-w-[22rem]"
                            type="text"
                            placeholder="SurName"
                          />
                        </div>
                      </div>
                      {/* email */}
                      <div className="email">
                        <input
                          name="email"
                          className="name w-full focus:outline-primary/70 bg-main-bg/[75%] border-none outline outline-2 outline-primary/30 py-2 md:py-2 px-4  placeholder:text-[0.9rem] rounded-xl transition-all duration-200"
                          type="email"
                          placeholder="Email"
                        />
                      </div>
                      {/* address */}
                      <div className="address">
                        <input
                          name="address"
                          className="name w-full focus:outline-primary/70 bg-main-bg/[75%] border-none outline outline-2 outline-primary/30 py-2 md:py-2 px-4  placeholder:text-[0.9rem] rounded-xl transition-all duration-200"
                          type="text"
                          placeholder="Address"
                        />
                      </div>
                      {/* city */}
                      <div className="city">
                        <input
                          name="city"
                          className="name w-full focus:outline-primary/70 bg-main-bg/[75%] border-none outline outline-2 outline-primary/30 py-2 md:py-2 px-4  placeholder:text-[0.9rem] rounded-xl transition-all duration-200"
                          type="text"
                          placeholder="City"
                        />
                      </div>

                      <div className="country-info flex gap-4">
                        {/* country */}
                        <input
                          name="city"
                          className="name w-full focus:outline-primary/70 bg-main-bg/[75%] border-none outline outline-2 outline-primary/30 py-2 md:py-2 px-4  placeholder:text-[0.9rem] rounded-xl transition-all duration-200"
                          type="text"
                          placeholder="Country/Region"
                        />
                        {/* state */}
                        <input
                          name="state"
                          className="name w-full focus:outline-primary/70 bg-main-bg/[75%] border-none outline outline-2 outline-primary/30 py-2 md:py-2 px-4  placeholder:text-[0.9rem] rounded-xl transition-all duration-200"
                          type="text"
                          placeholder="state"
                        />
                        {/* zip */}
                        <input
                          name="zip"
                          className="name w-full focus:outline-primary/70 bg-main-bg/[75%] border-none outline outline-2 outline-primary/30 py-2 md:py-2 px-4  placeholder:text-[0.9rem] rounded-xl transition-all duration-200"
                          type="number"
                          placeholder="Zip"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </form>
              {/* right form */}
              <form className="flex justify-start items-center">
                <div className="payment grid gap-2">
                  <div className="head flex justify-center">
                    <h4>Express Payment</h4>
                  </div>
                  {/* methods */}
                  <div className="methonds flex gap-2">
                    {/* method */}
                    <img
                      className="max-w-[7rem]"
                      src={applePlay}
                      alt="pay-with-apple"
                    />
                    {/* method */}
                    <img
                      className="max-w-[7rem]"
                      src={googlePay}
                      alt="pay-with-google"
                    />
                    {/* method */}
                    <img
                      className="max-w-[7rem]"
                      src={btcPay}
                      alt="pay-with-btc"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* triangle */}
        <img
          className="triangle absolute left-1/2 transform -translate-x-1/2 -top-[70%]  w-[60rem] rotate-[45deg] opacity-[0.2]"
          src={tringle}
          alt="tringle"
        />
        {/* triangle */}
        <img
          className="triangle absolute -bottom-[5%] -right-[30%]  w-[50rem] rotate-[80deg] opacity-[0.1]  md:opacity-[0.2]"
          src={tringle}
          alt="tringle"
        />
        {/* triangle */}
        <img
          className="triangle absolute bottom-[90%] md:-bottom-[2%] -left-[20%]  w-[35rem] rotate-[-80deg] opacity-[0.07]  md:opacity-[0.25]"
          src={tringle}
          alt="tringle"
        />
      </section>
      <Footer />
    </>
  );
}

import CardImage from "@/public/ImageFet.png";
import Image from "next/image";

export default function Services() {
  return (
    <section className="py-24">
      <div className="px-4 lg:max-w-5xl max-w-4xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-52 gap-10 items-center justify-center">
          <div className="flex flex-col text-start gap-2 w-auto lg:w-[500px] ">
            <h1 className="text-black text-5xl font-semibold">
              Streamlined Banking <br />
              for Your Convenience
            </h1>

            <p className="text-neutral-600 text-base">
              Experience a seamless and efficient banking process designed to
              cater to your modern lifestyle
            </p>
            <div className="flex gap-5 items-center">
              <div className=" w-fit bg-yellow-500 rounded-xl p-2 justify-center">
                <svg className="w-6 h-6 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 10c0-.55228-.4477-1-1-1h-3v2h3c.5523 0 1-.4477 1-1Z"/>
                  <path d="M13 15v-2h2c1.6569 0 3-1.3431 3-3 0-1.65685-1.3431-3-3-3h-2.256c.1658-.46917.256-.97405.256-1.5 0-.51464-.0864-1.0091-.2454-1.46967C12.8331 4.01052 12.9153 4 13 4h7c.5523 0 1 .44772 1 1v9c0 .5523-.4477 1-1 1h-2.5l1.9231 4.6154c.2124.5098-.0287 1.0953-.5385 1.3077-.5098.2124-1.0953-.0287-1.3077-.5385L15.75 16l-1.827 4.3846c-.1825.438-.6403.6776-1.0889.6018.1075-.3089.1659-.6408.1659-.9864v-2.6002L14 15h-1ZM6 5.5C6 4.11929 7.11929 3 8.5 3S11 4.11929 11 5.5 9.88071 8 8.5 8 6 6.88071 6 5.5Z"/>
                  <path d="M15 11h-4v9c0 .5523-.4477 1-1 1-.55228 0-1-.4477-1-1v-4H8v4c0 .5523-.44772 1-1 1s-1-.4477-1-1v-6.6973l-1.16797 1.752c-.30635.4595-.92722.5837-1.38675.2773-.45952-.3063-.5837-.9272-.27735-1.3867l2.99228-4.48843c.09402-.14507.2246-.26423.37869-.34445.11427-.05949.24148-.09755.3763-.10887.03364-.00289.06747-.00408.10134-.00355H15c.5523 0 1 .44772 1 1 0 .5523-.4477 1-1 1Z"/>
                </svg>
              </div>
              <div className="flex flex-col gap-2 text-start ">
                <h1 className="text-black text-base font-medium">
                  Effortless Account Creation
                </h1>
                <span className="text-neutral-600 text-sm">
                  Get started by creating an account using your email address or Google account
                </span>
              </div>
            </div>
            <div className="flex gap-5 items-center">
              <div className=" w-fit bg-black rounded-xl p-2 justify-center">
                <svg className="w-6 h-6 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5.365V3m0 2.365a5.338 5.338 0 0 1 5.133 5.368v1.8c0 2.386 1.867 2.982 1.867 4.175 0 .593 0 1.193-.538 1.193H5.538c-.538 0-.538-.6-.538-1.193 0-1.193 1.867-1.789 1.867-4.175v-1.8A5.338 5.338 0 0 1 12 5.365Zm-8.134 5.368a8.458 8.458 0 0 1 2.252-5.714m14.016 5.714a8.458 8.458 0 0 0-2.252-5.714M8.54 17.901a3.48 3.48 0 0 0 6.92 0H8.54Z"/>
                </svg>
              </div>
              <div className="flex flex-col gap-2 text-start ">
                <h1 className="text-black text-base font-medium">
                  Real-Time Transaction Tracking
                </h1>
                <span className="text-neutral-600 text-sm">
                  Stay informed with the latest news and emails about your transactions
                </span>
              </div>
            </div>
            <div className="flex gap-5 items-center">
              <div className=" w-fit bg-sky-100 rounded-xl p-2 justify-center">
                <svg className="w-6 h-6 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2a7 7 0 0 0-7 7 3 3 0 0 0-3 3v2a3 3 0 0 0 3 3h1a1 1 0 0 0 1-1V9a5 5 0 1 1 10 0v7.083A2.919 2.919 0 0 1 14.083 19H14a2 2 0 0 0-2-2h-1a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h1a2 2 0 0 0 1.732-1h.351a4.917 4.917 0 0 0 4.83-4H19a3 3 0 0 0 3-3v-2a3 3 0 0 0-3-3 7 7 0 0 0-7-7Zm1.45 3.275a4 4 0 0 0-4.352.976 1 1 0 0 0 1.452 1.376 2.001 2.001 0 0 1 2.836-.067 1 1 0 1 0 1.386-1.442 4 4 0 0 0-1.321-.843Z" clipRule="evenodd"/>
                </svg>
              </div>
              <div className="flex flex-col gap-2 text-start ">
                <h1 className="text-black text-base font-medium">
                  24/7 Customer Support
                </h1>
                <span className="text-neutral-600 text-sm">
                  Access rapid assistance with our customer support team
                </span>
              </div>
            </div>
          </div>
        
          <Image src={CardImage} alt="Credit Card Image" className="object-cover w-[470px] rotate-45" />
      </div>
            </div>
    </section>
  );
}
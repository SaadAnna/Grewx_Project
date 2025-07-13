import FeatureImage from "@/public/FeatureImage.png";
import Image from "next/image";
const Features = [
  {
    id: 1,
    title: "Safety and security",
    icon: (
      <svg
        className=" w-8 h-8 text-gray-950 "
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 14v3m-3-6V7a3 3 0 1 1 6 0v4m-8 0h10a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1Z"
        />
      </svg>
    ),
    details:
      "Advanced encryption, fraud protection, and 24/7 monitoring keep your accounts secure. FDIC-insured deposits with biometric authentication and real-time alerts for complete peace of mind.",
  },
  {
    id: 2,
    title: "Financial Services",
    icon: (
      <svg
        className=" w-8 h-8 text-gray-950 "
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="2"
          d="M3 21h18M4 18h16M6 10v8m4-8v8m4-8v8m4-8v8M4 9.5v-.955a1 1 0 0 1 .458-.84l7-4.52a1 1 0 0 1 1.084 0l7 4.52a1 1 0 0 1 .458.84V9.5a.5.5 0 0 1-.5.5h-15a.5.5 0 0 1-.5-.5Z"
        />
      </svg>
    ),
    details:
      "Complete banking solutions including checking, savings, loans, and investments. Mobile banking, online transfers, and bill pay with competitive rates and personalized service.",
  },
  {
    id: 3,
    title: "Economic Stability",
    icon: (
      <svg
        className=" w-8 h-8 text-gray-950 "
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 4.5V19a1 1 0 0 0 1 1h15M7 14l4-4 4 4 5-5m0 0h-3.207M20 9v3.207"
        />
      </svg>
    ),
    details:
      "Reliable banking with strong financial fundamentals. Diversified portfolios, retirement planning, and expert guidance to help you build long-term wealth and achieve financial goals.",
  },
];

export default function Advantages() {
  return (
    <section className="py-24">
      <div className="px-4 lg:max-w-5xl max-w-4xl mx-auto flex flex-col items-center gap-14">
        <div className="flex flex-col text-center gap-2 max-w-5xl mx-auto ">
          <h1 className="text-4xl lg:text-5xl text-black font-semibold">
            Discover The Advantages Of <br/> Banking With Us.
          </h1>
          <p className="text-neutral-700 font-medium text-base max-w-2xl mx-auto">
            Explore The uniique benefits of our digital banking designed to
            enhace <br/> your financial experience.
          </p>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {Features.map((feature) => (
              <div
                key={feature.id}
                className="flex flex-col text-center gap-2 p-5 rounded-lg bg-neutral-50 border-none cursor-pointer transition-all ease-in-out hover:bg-neutral-100 "
              >
                <div className="mx-auto">{feature.icon}</div>
                <div className="text-2xl text-gray-950 font-medium">
                  {feature.title}
                </div>
                <div className=" text-neutral-400 text-base max-w-2xl mx-auto">
                  {feature.details}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 bg-neutral-100 rounded-xl p-4 grid grid-cols-1 gap-11 lg:gap-52 sm:grid-cols-2 lg:grid-cols-2">
            <div className="flex flex-col text-start gap-2 ">
              <div className=" w-fit bg-yellow-500 rounded-lg p-2 justify-center">
              <svg className="w-6 h-6 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 8v8m0-8h8M8 8H6a2 2 0 1 1 2-2v2Zm0 8h8m-8 0H6a2 2 0 1 0 2 2v-2Zm8 0V8m0 8h2a2 2 0 1 1-2 2v-2Zm0-8h2a2 2 0 1 0-2-2v2Z"/>
</svg>

              </div>
              <h1 className="text-2xl lg:text-3xl text-gary-950 max-w-2xl font-medium">
                Free Transfere Anywhere in the World
              </h1>
              <p className="text-neutral-600 font-medium text-base max-w-2xl mx-auto">
                Send and receive money worldwide with zero transfer fees. Our
                secure international payment system lets you transfer funds
                instantly from anywhere, anytime. Fast, reliable,
              </p>
              <a
                href="#"
                className="px-2 w-fit py-1 text-black border border-black transition-all ease-in hover:bg-black hover:text-white hover:border-white rounded-full"
              >
                Coustomize Your Card
              </a>
            </div>
            <Image
              src={FeatureImage}
              alt="Feature Image"
              className="w-80 h-80 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

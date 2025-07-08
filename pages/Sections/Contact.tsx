import ContactImage from "@/public/ContactImage.png";
import Image from "next/image";
export default function Contact() {
  return (
    <section className="py-24">
      <div className="px-4 lg:max-w-5xl max-w-4xl mx-auto">

      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-52 gap-10 items-center justify-center p-3.5 bg-neutral-100 rounded-xl">

      <div className="flex flex-col text-start gap-2">

      <input type="text" required placeholder="Your Name" className="w-auto px-1 pl-2 pr-32 h-10 bg-white border border-black border-solid rounded-lg placeholder:text-sm placeholder:text-neutral-500  focus:outline-none focus:border focus:border-black" />
      <input type="email" required placeholder="Your Email" className="w-auto px-1 pl-2 pr-32 h-10 bg-white border border-black border-solid rounded-lg placeholder:text-sm placeholder:text-neutral-500  focus:outline-none focus:border focus:border-black" />
      <textarea required placeholder="Your Message" className="w-auto pt-2 pl-2 pr-32 h-32 bg-white border border-black border-solid rounded-lg placeholder:text-sm placeholder:text-neutral-500  focus:outline-none focus:border focus:border-black" />
      <button type="submit" className="bg-gray-900 cursor-pointer rounded-lg text-white text-sm w-auto h-10 hover:bg-gray-950 transition-all ease-in">
       Send Message
      </button>
      </div>
      <Image src={ContactImage} alt="Contact Image" className="w-auto h-80 object-cover"/>
      </div>
      </div>
    </section>
  );
}

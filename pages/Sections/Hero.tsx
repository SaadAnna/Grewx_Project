import ImageOne from "@/public/man1.png";
import ImageTwo from "@/public/man2.png";
import ImageThree from "@/public/man3.png";
import HeroImage from "@/public/HeroImage.png";
import Image from "next/image";

export default function Hero() {
    return (
        <section className="py-20">
            <div className="px-4  lg:max-w-5xl max-w-5xl mx-auto grid grid-cols-1 lg:gap-52 gap-10 lg:grid-cols-2">
                <div className="flex flex-col gap-3 text-start ">
                    <div className=" flex gap-1 items-center w-fit h-auto border-none bg-neutral-100  text-black rounded-full p-2">
                        <svg
                            className="w-5 h-5 text-sky-950"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                        </svg>

                        <h1 className="text-sky-950 font-medium text-base">
                            {" "}
                            Welcome to a Modern Financial Experience
                        </h1>
                    </div>
                    <h1 className="text-black lg:text-6xl text-5xl font-medium ">
                        Revolutionize Your Banking Experience
                    </h1>
                    <p className="text-neutral-700 font-medium text-base">
                        Our Digital platform offers seamles, secures, and converient
                        fancicial services at your mgerprtipe insights with ease. Join us
                        today and take control of your finacial future.
                    </p>
                    <a
                        href="#"
                        className="px-10 py-2 w-fit text-white bg-black rounded-xl text-base transition-all ease-in-out hover:opacity-95"
                    >
                        Get Started
                    </a>
                    <div className="flex gap-2 items-center mt-4">
                        <div className="flex">
                            <Image
                                alt="image one"
                                src={ImageOne}
                                className="w-12 h-12 rounded-full object-cover border-2 border-sky-950  -mr-5"
                            />
                            <Image
                                alt="image one"
                                src={ImageTwo}
                                className="w-12 h-12 rounded-full object-cover border-2 border-sky-950  -mr-2"
                            />
                            <Image
                                alt="image one"
                                src={ImageThree}
                                className="w-12 h-12 rounded-full object-cover border-2 border-sky-950  "
                            />
                        </div>
                        <div className="flex flex-col gap-1 text-start">
                            <div className="flex items-center">
                                <svg
                                    className="w-4 h-4 text-gray-800"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                                </svg>
                                <svg
                                    className="w-4 h-4 text-gray-800"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                                </svg>
                                <svg
                                    className="w-4 h-4 text-gray-800"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                                </svg>
                                <svg
                                    className="w-4 h-4 text-gray-800"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                                </svg>
                                <svg
                                    className="w-4 h-4 text-gray-800"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M13 4.024v-.005c0-.053.002-.353-.217-.632a1.013 1.013 0 0 0-1.176-.315c-.192.076-.315.193-.35.225-.052.05-.094.1-.122.134a4.358 4.358 0 0 0-.31.457c-.207.343-.484.84-.773 1.375a168.719 168.719 0 0 0-1.606 3.074h-.002l-4.599.367c-1.775.14-2.495 2.339-1.143 3.488L6.17 15.14l-1.06 4.406c-.412 1.72 1.472 3.078 2.992 2.157l3.94-2.388c.592-.359.958-.996.958-1.692v-13.6Zm-2.002 0v.025-.025Z"
                                        clip-rule="evenodd"
                                    />
                                </svg>
                            </div>
                            <span className="text-sm text-gray-800 font-medium">
                                100%. Review
                            </span>
                        </div>

                    </div>
                </div>
                <Image alt="hero image" src={HeroImage} className="w-96 h-96 object-cover" />

            </div>
        </section>
    );
}

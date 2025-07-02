import CompanyOne from "@/public/companyone.png";
import CompanyTwo from "@/public/companytwo.png";
import CompanyThree from "@/public/companythree.png";
import CompanyFour from "@/public/companyfour.png";
import CompanyFive from "@/public/companyfive.png";
import CompanySix from "@/public/companysix.png";
import Image from "next/image";

export default function Company() {
  return (
    <section className="py-14">
      <div className="px-4  lg:max-w-7xl max-w-5xl mx-auto w-auto h-fit p-10 bg-gray-950 ">
        <div className="flex flex-wrap lg:gap-20 gap-10 items-cente justify-center">
          <Image
            alt="company image"
            src={CompanyOne}
            className="w-24 h-24 object-fill"
          />
          <Image
            alt="company image"
            src={CompanyTwo}
            className="w-24 h-24 object-fill"
          />
          <Image
            alt="company image"
            src={CompanyThree}
            className="w-24 h-24 object-fill"
          />
          <Image
            alt="company image"
            src={CompanyFour}
            className="w-24 h-24 object-fill"
          />
          <Image
            alt="company image"
            src={CompanyFive}
            className="w-24 h-24 object-fill"
          />
          <Image
            alt="company image"
            src={CompanySix}
            className="w-24 h-24 object-fill"
          />
        </div>
      </div>
    </section>
  );
}

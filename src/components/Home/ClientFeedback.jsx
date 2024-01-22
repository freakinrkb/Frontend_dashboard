import "@styles/Home/ClientFeedback.css";
import { useEffect } from "react";
import img1 from "@assets/Picture.png";
import img2 from "@assets/Picture (1).png";
import img3 from "@assets/Picture (2).png";
import scrollDots from "@assets/scroll-dots.svg";
const ClientFeedback = () => {
  const centerScroll = () => {
    const container = document.querySelector(".scroll-container");
    if (container) {
      const scrollLeft = (container.scrollWidth - container.clientWidth) / 2;
      container.scrollLeft = scrollLeft;
    }
  };

  // Call the centerScroll function when the component mounts
  useEffect(() => {
    centerScroll();
  }, []);
  return (
    <section className="py-10">
      <div className="container">
        <div className="flex flex-col items-center pb-8 pt-8">
          <div className="font-dm-sans text-2xl text-[#4750EB]">
            Our Clients Says
          </div>
          <div className="font-arvo text-4xl text-black">
            <b className="leading-[50px]">
              We have been working with clients around the world
            </b>
          </div>
        </div>
        <div className="scroll-container gap-4 overflow-x-auto">
          <div className="flex min-w-[min(25rem,100%)] flex-grow flex-col items-center">
            <div className="rounded-lg p-6 text-center shadow-lg">
              <div className=" text-2xl leading-[32px] text-[#2576BC]">
                Efficient Collaborating
              </div>
              <div className="clip-triangle  text-darkslateblue inline-block py-4 text-sm ">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </div>
            </div>
            <div className=" pt-8 text-center">
              <div className="">
                <img
                  className="mx-auto overflow-hidden rounded-[50%] "
                  src={img1}
                  alt="Hlo"
                />
              </div>
              <div className="py-1 text-[#2576BC]">Jane Cooper</div>
              <div className=" text-darkslateblue text-sm">
                CEO at ABC Corporation
              </div>
            </div>
          </div>
          <div className="flex min-w-[min(25rem,100%)] flex-grow flex-col items-center ">
            <div className="rounded-lg p-6 text-center shadow-lg">
              <div className=" text-2xl leading-[32px] text-[#2576BC]">
                Efficient Collaborating
              </div>
              <div className="clip-triangle text-darkslateblue inline-block py-4 text-sm ">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </div>
            </div>
            <div className="pt-8 text-center">
              <div className="">
                <img
                  className="mx-auto overflow-hidden rounded-[50%] "
                  src={img2}
                  alt="Hlo"
                />
              </div>
              <div className="py-1 text-[#2576BC]">Jane Cooper</div>
              <div className=" text-darkslateblue text-sm">
                CEO at ABC Corporation
              </div>
            </div>
          </div>
          <div className="flex min-w-[min(25rem,100%)] flex-grow flex-col items-center">
            <div className="rounded-lg p-6 text-center shadow-lg">
              <div className=" text-2xl leading-[32px] text-[#2576BC]">
                Efficient Collaborating
              </div>
              <div className="clip-triangle  text-darkslateblue inline-block py-4 text-sm ">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </div>
            </div>
            <div className=" pt-8 text-center">
              <div className="">
                <img
                  className="mx-auto overflow-hidden rounded-[50%] "
                  src={img3}
                  alt="Hlo"
                />
              </div>
              <div className="py-1 text-[#2576BC]">Jane Cooper</div>
              <div className=" text-darkslateblue text-sm">
                CEO at ABC Corporation
              </div>
            </div>
          </div>
        </div>
        <div className="my-16 flex items-center justify-center">
          <img src={scrollDots} alt="" />
        </div>
      </div>
    </section>
  );
};

export default ClientFeedback;

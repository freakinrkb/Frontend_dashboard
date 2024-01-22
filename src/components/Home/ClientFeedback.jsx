import "@styles/Home/ClientFeedback.css";
import img1 from "@assets/Picture.png";
import img2 from "@assets/Picture (1).png";
import img3 from "@assets/Picture (2).png";
const ClientFeedback = () => {
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
        <div className="grid grid-cols-1 gap-8 pb-8 pt-5 sm:grid-cols-2 md:grid-cols-3">
          <div className="flex flex-col items-center">
            <div className="rounded-lg p-6 text-center shadow-lg">
              <div className=" text-2xl leading-[32px] text-[#2576BC]">
                Efficient Collaborating
              </div>
              <div className="clip-triangle  text-darkslateblue inline-block py-4 text-sm leading-[160.28%]">
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
          <div className="flex flex-col items-center ">
            <div className="rounded-lg p-6 text-center shadow-lg">
              <div className=" text-2xl leading-[32px] text-[#2576BC]">
                Efficient Collaborating
              </div>
              <div className="clip-triangle text-darkslateblue inline-block py-4 text-sm leading-[160.28%]">
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
          <div className="flex flex-col items-center">
            <div className="rounded-lg p-6 text-center shadow-lg">
              <div className=" text-2xl leading-[32px] text-[#2576BC]">
                Efficient Collaborating
              </div>
              <div className="clip-triangle  text-darkslateblue inline-block py-4 text-sm leading-[160.28%]">
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
      </div>
    </section>
  );
};

export default ClientFeedback;

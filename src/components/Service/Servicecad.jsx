const Servicecad = ({ src, title, description, linkto, additionalClass }) => {
  return (
    <div
      className={`flex min-h-[20rem] flex-grow flex-col space-y-4 border-[1px] border-[#EDEEF0] bg-[#F9FBFD] p-10 py-14 hover:bg-white hover:ease-in ${additionalClass} mb-6`}
    >
      <img className="w-10" src={`${src}`} alt="icon" />
      <h3 className="font-bold">{`${title}`}</h3>
      <p className="max-w-[25ch]">{`${description}`}</p>
      <a className="text-sm text-sky-500" href={`${linkto}`}>
        Learn more &gt;{" "}
      </a>
    </div>
  );
};

export default Servicecad;

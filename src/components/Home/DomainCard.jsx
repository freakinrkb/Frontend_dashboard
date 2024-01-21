const DomainCard = ({ src, title, description, linkto, additionalClass }) => {
  return (
    <div
      className={`flex min-h-[20rem] min-w-[20rem] flex-grow flex-col gap-5 border-[1px] border-[#EDEEF0] p-10 py-16  hover:bg-white hover:ease-in ${additionalClass}`}
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

export default DomainCard;

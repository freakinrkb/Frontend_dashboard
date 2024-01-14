import pana from "/src/assets/mobile-inbox-pana.svg";
const WeWork = () => {
  return (
    <section className="py-12">
      <div className="two-cols container gap-4">
        <div className="odd">
          <img src={pana} alt="pana-image" />
        </div>
        <div className="even"></div>
      </div>
    </section>
  );
};

export default WeWork;

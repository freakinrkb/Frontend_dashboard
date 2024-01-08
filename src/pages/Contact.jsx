import Hero from "@components/Contact/Hero";
import Map from "@components/Contact/Map";
import AnyQuestion from "@components/Contact/AnyQuestion";

const Contact = () => {
  return (
    <main>
      {/* Hero Section */}
      <Hero />
      {/* Contact Section */}
      <AnyQuestion />
      {/* Map Section */}
      <Map />
    </main>
  );
};

export default Contact;

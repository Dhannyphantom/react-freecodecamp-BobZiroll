import photoGrid from "../assets/photolab.jpg";

export default function Hero() {
  return (
    <section className="hero">
      <img src={photoGrid} alt="" />
      <h2>Online Experiences</h2>
      <p>
        Join a unique interactive activities led by one-of-a-kind host all
        without leaving home.
      </p>
    </section>
  );
}

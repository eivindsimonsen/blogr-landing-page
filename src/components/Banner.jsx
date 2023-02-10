import image from "../assets/images/illustration-phones.svg";
import background from "../assets/images/bg-pattern-circles.svg";

function Banner() {
  return (
    <>
      <img className="banner-bg-phones-mobile" src={image} alt="#" />
      <section className="banner">
        <div className="banner-wrapper banner-content">
          <h3>State of the Art Infrastructure</h3>
          <p>With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity. This ensures your site will load instantly, no matter where your readers are, keeping your site competetive.</p>
        </div>
        <img className="banner-bg-circle" src={background} alt="#" />
      </section>
    </>
  );
}

export default Banner;

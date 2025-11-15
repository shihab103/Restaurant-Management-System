import AboutUs from "../../Component/AboutUs/AboutUs";
import OurChef from "../../Component/OurChef/OurChef";
import PopularFood from "../../Component/PopularFood/PopularFood";
import Slider from "../../Component/Slider/Slider";
import Testimonial from "../../Component/Testimonial/Testimonial";

const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <PopularFood/>
      <OurChef/>
      <AboutUs></AboutUs>
      <Testimonial></Testimonial>
    </div>
  );
};

export default Home;

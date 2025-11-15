import AboutUs from "../../Component/AboutUs/AboutUs";
import Display from "../../Component/Display/Display";
import OurChef from "../../Component/OurChef/OurChef";
import PopularFood from "../../Component/PopularFood/PopularFood";
import Slider from "../../Component/Slider/Slider";
import Testimonial from "../../Component/Testimonial/Testimonial";


const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <PopularFood/>
      <Display></Display>
      <AboutUs></AboutUs>
      <OurChef/>
      <Testimonial></Testimonial>
    </div>
  );
};

export default Home;

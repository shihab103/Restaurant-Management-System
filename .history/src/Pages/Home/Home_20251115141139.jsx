import AboutUs from "../../Component/AboutUs/AboutUs";
import Display from "../../Component/Display/Display";
import OurChef from "../../Component/OurChef/OurChef";
import PopularFood from "../../Component/PopularFood/PopularFood";
import Slider from "../../Component/Slider/Slider";
import Testimonial from "../../Component/Testimonial/Testimonial";
import TodaySpecialFood from "../../Component/TodaySepcialFood/TodaySpecialFood";


const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <PopularFood/>
      <Display></Display>
      <AboutUs></AboutUs>
      <TodaySpecialFood></TodaySpecialFood>
      <OurChef/>
      <Testimonial></Testimonial>
    </div>
  );
};

export default Home;

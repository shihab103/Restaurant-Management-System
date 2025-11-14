import OurChef from "../../Component/OurChef/OurChef";
import PopularFood from "../../Component/PopularFood/PopularFood";
import Slider from "../../Component/Slider/Slider";
import AboutUs from "../AboutUs/AboutUs";

const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <PopularFood/>
      <AboutUs></AboutUs>
      <OurChef/>
    </div>
  );
};

export default Home;

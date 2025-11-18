import Display from "../../Component/About/Display";
import TodaySpecialFood from "../../Component/About/TodaySpecialFood";
import AboutUs from "../../Component/AboutUs/AboutUs";
import OurChef from "../../Component/OurChef/OurChef";


const AboutUsPage = () => {
    return (
        <div className='bg-[#f4f1ea]'>
            <div  style={{
                backgroundImage: "url('/images/breadcumb.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "50vh",
                width: "100%"
            }}>
                 <h1 className='font-bold text-center pt-[150px] text-[60px] text-white'>
            ABOUT US
            </h1>
            </div>
            <Display></Display>
            <TodaySpecialFood></TodaySpecialFood>
            <OurChef></OurChef>
            <AboutUs></AboutUs>
        </div>
    );
};

export default AboutUsPage;
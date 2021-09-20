import AboutTwo from "../components/AboutTwo";
import BlogTwo from "../components/BlogTwo";
import BrandsTwo from "../components/BrandsTwo";
import CallToActionFour from "../components/CallToActionFour";
import CallToActionThree from "../components/CallToActionThree";
import CountdownKipso from "../components/CountdownKipso";
import CourseCatOne from "../components/CourseCatOne";
import CourseOne from "../components/CourseOne";
import Footer from "../components/Footer";
import Layout from "../components/Layout";
import NavOne from "../components/NavOne";
import SliderOne from "../components/SliderOne";
import SubscribeOne from "../components/SubscribeOne";
import Topbar from "../components/Topbar";
import VideoTwo from "../components/VideoTwo";

const HomePage = () => (
  <Layout pageTitle="Kipso - React Next Online Education Learning & LMS Template">
    <Topbar />
    <NavOne />
    <SliderOne />
    <AboutTwo />
    <CourseOne />
    <VideoTwo />
    <CountdownKipso />
    <CourseCatOne />
    <CallToActionThree />
    <BrandsTwo />
    <BlogTwo />
    <CallToActionFour />
    <SubscribeOne />
    <Footer />
  </Layout>
);

export default HomePage;

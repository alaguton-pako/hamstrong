import Footer from "./components/Footer";
import HeroSection from "./components/landingPageComponent/HeroSection";
import HowItWorks from "./components/landingPageComponent/HowItWorks";
import MeetTheCeo from "./components/landingPageComponent/MeetTheCeo";
import NewUploads from "./components/landingPageComponent/NewUploads";
import NavBar from "./components/NavBar";

export default function Home() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <NewUploads />
      <HowItWorks />
      <MeetTheCeo />
      <Footer />
    </>
  );
}
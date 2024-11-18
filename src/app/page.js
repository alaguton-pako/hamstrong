import Footer from "./components/Footer";
import HeroSection from "./components/landingPageComponent/HeroSection";
import HowItWorks from "./components/landingPageComponent/HowItWorks";
import MeetTheCeo from "./components/landingPageComponent/MeetTheCeo";
import NewUploads from "./components/landingPageComponent/NewUploads";
import NavBar from "./components/NavBar";

export async function generateMetadata() {
  const pageTitle = "Hamstrong Realty Limited";
  return {
    title: `${pageTitle}`,
    description:
      "Hamstrong Realty Limited is a leading real estate development company dedicated to delivering exceptional residential and commercial properties that exceed our clients' expectations with a passion for innovative craftiness.",
    openGraph: {
      images: [
        { url: "https://hamstrongrealty.netlify.app/opengraph-image.png" },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${pageTitle}`,
      description:
        "Hamstrong Realty Limited is a leading real estate development company dedicated to delivering exceptional residential and commercial properties that exceed our clients' expectations with a passion for innovative craftiness.",
      images: [
        { url: "https://hamstrongrealty.netlify.app/opengraph-image.png" },
      ],
    },
  };
}

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

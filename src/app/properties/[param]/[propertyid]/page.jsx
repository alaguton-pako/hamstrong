import NavBar from "@/app/components/NavBar";
import Footer from "@/app/components/Footer";
import TestComponent from "@/app/components/TestComponent";
import { propertyData } from "@/app/models/newArrivals";
import { Divider } from "@mui/material";

export async function generateMetadata({ params }) {
  const { param, propertyid } = params;
  const property = propertyData.allProperties.find(
    (item) => item.uuid === propertyid
  );
  if (!property) {
    return {
      title: "Property Not Found",
      description: "This property does not exist.",
    };
  }
  // Check if `property.image` is a valid string; provide a fallback if not
  const imageUrl =
    typeof property.image === "string" && property.image
      ? property.image
      : "/opengraph-image.png";
  return {
    title: `${property.title} - ${param}`,
    description: property.description,
    openGraph: {
      images: [{ url: imageUrl }],
    },
  };
}

const Page = () => {
  return (
    <div>
      {" "}
      <NavBar />
      <Divider />
      <TestComponent />
      <Footer />
    </div>
  );
};

export default Page;

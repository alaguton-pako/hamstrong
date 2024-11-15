import fourbedroomduplexcarcass from "@/app/images/propertyImages/4bedroomcarcass/image5.jpeg";
import fivebedroomduplexcarcass from "@/app/images/propertyImages/5bedroomcarcass/image9.jpeg";
import onebedroomcarcass from "@/app/images/propertyImages/1bedroomcarcass/image4.jpeg";
import oligarchstandard from "@/app/images/propertyImages/oligarchstandard5and6bedroom/image3.jpeg";
import twobedroomapartmentcarcass from "@/app/images/propertyImages/2bedroomapartmentcarcass/image7.jpeg";
import threebedroomsemidetachedduplex from "@/app/images/propertyImages/3bedroomsemidetachedduplex/image2.jpeg";
import threebedroomterracedduplex from "@/app/images/propertyImages/3bedroomterraceduplex/image8.jpeg";
import fivebedroompenthouse from "@/app/images/propertyImages/5bedroompenthouse/image1.jpeg";
import fivebedroomterraceduplex from "@/app/images/propertyImages/5bedroomterraceduplex/image1.jpeg";
import twobedroomapartmentgymelevator from "@/app/images/propertyImages/2bedroomapartmentwithgymandelevator/image7.jpeg";
import fourbedroomcontemporaryduplex from "@/app/images/propertyImages/4bedroomcontemporaryduplex/image1.jpeg";
import fourbedroomduplexalongvoiceofnigeria from "@/app/images/propertyImages/4bedroomduplexalongvoiceofnigeria/image5.jpeg";
import fourbedroomterracedduplex from "@/app/images/propertyImages/4bedroomterraceduplex/image10.jpeg";
import { propertyImagesModel } from "./propertyImagesModel";

const newArrivals = [
  {
    uuid: "123e4567-e89b-12d3-a456-426614174001",
    image: fivebedroomduplexcarcass,
    title: "5 bedroom duplex carcass",
    description:
      "5 Bedroom fully detached duplex carcass located in an estate behind FIRS office opposite dunamis church airport road lugbe Abuja.",
    price: "60,000,000",
    category: "house",
    type: "sale",
    number_of_bedrooms: 5,
    number_of_bathrooms: 5,
    number_of_toilets: 6,
    location: "Airport road Lugbe, Abuja",
    state: "FCT",
    image_count: 9,
    video: true,
    videoLink: "https://www.youtube.com/watch?v=hostbXQIWcU",
    imagesArray: propertyImagesModel.fiveBedroomImages,
  },
  {
    uuid: "123e4567-e89b-12d3-a456-426614174002",
    image: fourbedroomduplexcarcass,
    title: "4 Bedroom Semi-detached duplex",
    description: "Newly built 4 Bedroom Semi-detached duplex",
    price: "150,000,000",
    category: "house",
    type: "sale",
    number_of_bedrooms: 4,
    number_of_toilets: 5,
    number_of_bathrooms: 4,
    location: "Apo, Abuja",
    state: "FCT",
    image_count: 10,
    video: true,
    videoLink: "https://www.youtube.com/watch?v=w0cAmpTNx3s&t=22s",
    imagesArray: propertyImagesModel.fourBedroomImages,
  },
  {
    uuid: "123e4567-e89b-12d3-a456-426614174003",
    image: onebedroomcarcass,
    title: "1 Bedroom advance carcass",
    description:
      "One bedroom advance carcass in a serene and secured estate at lifecamp abuja",
    price: "13,500,000",
    category: "house",
    type: "rent",
    number_of_bedrooms: 1,
    number_of_bathrooms: 1,
    number_of_toilets: 1,
    location: "LifeCamp, Abuja",
    state: "FCT",
    image_count: 6,
    videoLink: "",
    imagesArray: propertyImagesModel.oneBedroomCarcassImages,
  },
  {
    uuid: "123e4567-e89b-12d3-a456-426614174004",
    image: oligarchstandard,
    title: "Oligarch Standard 6 Bedroom Super Luxury Mansion ",
    description:
      "Oligarch Standard 5 and 6 Bedroom Super Luxury Mansion with Cinema, Pool and Rooftop Terrace",
    price: "650,000,000",
    category: "house",
    type: "sale",
    number_of_bedrooms: 6,
    number_of_bathrooms: 6,
    number_of_toilets: 7,
    location: "Osapa Lekki, Lagos",
    state: "Lagos",
    image_count: 10,
    videoLink: "",
    imagesArray: propertyImagesModel.oligarchStandard,
    keyFeatures: [
      "Greatly Finished To Detail",
      "Zenith Quality Appurtenances",
      "Swimming Pool",
      "Home Cinema",
      "Unconventional Stunning Architecture",
      "Bespoke Woodwork",
      "Unparalleled Beautiful Aesthetics",
      "Inbuilt Audio System",
      "Green Area",
      "Fully Furnished Kitchen",
      "Family Lounge",
      "Luxury Sanitary Wares",
      "Decent Sit Out Area",
      "Rooftop Terrace",
      "Boy's Quarters",
      "Ample Parking Space",
      "Glorious Neighborhood",
    ],
  },
];

export const propertyData = {
  newArrivals: [
    {
      uuid: "123e4567-e89b-12d3-a456-426614174001",
      image: fivebedroomduplexcarcass,
      title: "5 bedroom duplex carcass",
      description:
        "5 Bedroom fully detached duplex carcass located in an estate behind FIRS office opposite dunamis church airport road lugbe Abuja.",
      price: "60,000,000",
      category: "house",
      type: "sale",
      number_of_bedrooms: 5,
      number_of_bathrooms: 5,
      number_of_toilets: 6,
      location: "Airport road Lugbe, Abuja",
      state: "FCT",
      image_count: 9,
      video: true,
      videoLink: "https://www.youtube.com/watch?v=hostbXQIWcU",
      imagesArray: propertyImagesModel.fiveBedroomImages,
    },
    {
      uuid: "123e4567-e89b-12d3-a456-426614174002",
      image: fourbedroomduplexcarcass,
      title: "4 Bedroom Semi-detached duplex",
      description: "Newly built 4 Bedroom Semi-detached duplex",
      price: "150,000,000",
      category: "house",
      type: "sale",
      number_of_bedrooms: 4,
      number_of_toilets: 5,
      number_of_bathrooms: 4,
      location: "Apo, Abuja",
      state: "FCT",
      image_count: 10,
      video: true,
      videoLink: "https://www.youtube.com/watch?v=w0cAmpTNx3s&t=22s",
      imagesArray: propertyImagesModel.fourBedroomImages,
    },
    {
      uuid: "123e4567-e89b-12d3-a456-426614174003",
      image: onebedroomcarcass,
      title: "1 Bedroom advance carcass",
      description:
        "One bedroom advance carcass in a serene and secured estate at lifecamp abuja",
      price: "13,500,000",
      category: "house",
      type: "sale",
      number_of_bedrooms: 1,
      number_of_bathrooms: 1,
      number_of_toilets: 1,
      location: "LifeCamp, Abuja",
      state: "FCT",
      image_count: 6,
      videoLink: "",
      imagesArray: propertyImagesModel.oneBedroomCarcassImages,
    },
    {
      uuid: "123e4567-e89b-12d3-a456-426614174004",
      image: oligarchstandard,
      title: "Oligarch Standard 6 Bedroom Super Luxury Mansion ",
      description:
        "Oligarch Standard 5 and 6 Bedroom Super Luxury Mansion with Cinema, Pool and Rooftop Terrace",
      price: "650,000,000",
      category: "house",
      type: "sale",
      number_of_bedrooms: 6,
      number_of_bathrooms: 6,
      number_of_toilets: 7,
      location: "Osapa Lekki, Lagos",
      state: "Lagos",
      image_count: 10,
      videoLink: "",
      imagesArray: propertyImagesModel.oligarchStandard,
      keyFeatures: [
        "Greatly Finished To Detail",
        "Zenith Quality Appurtenances",
        "Swimming Pool",
        "Home Cinema",
        "Unconventional Stunning Architecture",
        "Bespoke Woodwork",
        "Unparalleled Beautiful Aesthetics",
        "Inbuilt Audio System",
        "Green Area",
        "Fully Furnished Kitchen",
        "Family Lounge",
        "Luxury Sanitary Wares",
        "Decent Sit Out Area",
        "Rooftop Terrace",
        "Boy's Quarters",
        "Ample Parking Space",
        "Glorious Neighborhood",
      ],
    },
  ],
  allProperties: [
    ...newArrivals,
    {
      uuid: "123e4567-e89b-12d3-a456-426614174005",
      image: twobedroomapartmentcarcass,
      title: "2 Bedroom Apartment Carcass",
      description: "2 Bedroom Apartment Carcass at LifeCamp Abuja",
      price: "27,000,000",
      category: "house",
      type: "sale",
      number_of_bedrooms: 2,
      number_of_bathrooms: 2,
      number_of_toilets: 3,
      location: "LifeCamp, Abuja",
      state: "FCT",
      country: "Nigeria",
      image_count: 8,
      video: true,
      imagesArray: propertyImagesModel.twobedroomapartmentcarcassImages,
    },
    {
      uuid: "123e4567-e89b-12d3-a456-426614174006",
      image: twobedroomapartmentgymelevator,
      title: "2 Bedroom Apartment with Gym and Elevator",
      description:
        "Beautifully finished 2 Bedroom Apartment with Gym and Elevator",
      price: "270,000,000",
      category: "house",
      type: "sale",
      number_of_bedrooms: 2,
      number_of_bathrooms: 2,
      number_of_toilets: 3,
      location: "Lekki Phase 1, Lagos",
      state: "Lagos",
      country: "Nigeria",
      image_count: 8,
      video: true,
      imagesArray: propertyImagesModel.twobedroomapartmentgymelevatorImages,
      keyFeatures: [
        "Gym",
        "Elevator",
        "CCTV Surveillance",
        "24 Hours Electricity",
        "Fully Serviced",
        "All Rooms ensuite",
        "Spacious Living Area",
        "Modern Contemporary Architecture",
        "Ample Parking Space",
        "Fully Fitted Kitchen",
        "Gorgeous Lightings",
        "Luxury Sanitary Wears",
        "Access Control Secure Estate",
        "Great Neighbourhood",
      ],
    },
    {
      uuid: "123e4567-e89b-12d3-a456-426614174007",
      image: fivebedroomterraceduplex,
      title: "5 Bedrooms Terrace duplex",
      description: "Luxury finished 5 Bedrooms Terrace with maid room for sale",
      price: "250,000,000",
      category: "house",
      type: "sale",
      number_of_bedrooms: 5,
      number_of_bathrooms: 5,
      number_of_toilets: 6,
      location: "Mabushi, Abuja",
      state: "FCT",
      country: "Nigeria",
      image_count: 14,
      video: true,
      imagesArray: propertyImagesModel.fivebedroomterracedduplexImages,
      keyFeatures: [
        "Provision for private elevator",
        "CCTV ready",
        "Brand new",
        "Good compound space",
        "Fully fitted kitchen",
        "Serenity",
        "Water heaters",
        "Pop ceiling",
        "Basement",
        "Kitchenette",
        "Laundry room",
        "Massive living room and family lounge",
        "Title: CofO",
      ],
    },
    {
      uuid: "123e4567-e89b-12d3-a456-426614174008",
      image: fourbedroomcontemporaryduplex,
      title: "4 Bedrooms Contemporary duplex",
      description:
        "Contemporary 4 bedroom semi-furnished duplex in an estate at VON Road lugbe Abuja",
      price: "170,000,000",
      category: "house",
      type: "sale",
      number_of_bedrooms: 4,
      number_of_bathrooms: 4,
      number_of_toilets: 5,
      location: "Lugbe, Abuja",
      state: "FCT",
      country: "Nigeria",
      image_count: 11,
      video: true,
      imagesArray: propertyImagesModel.fourbedroomcontemporarydplexImages,
      keyFeatures: [
        "2 Kitchens",
        "Solar Inverter",
        "Biometric door",
        "CCTV Camera",
        "TV Panels",
      ],
    },
  ],
};

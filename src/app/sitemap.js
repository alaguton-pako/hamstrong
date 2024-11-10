import { propertyData } from "./models/newArrivals";

export default async function sitemap() {
  const postEntries = propertyData.allProperties.map(({ uuid }) => ({
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/properties-all-properties/${uuid}`,
  }));

  return [...postEntries];
}

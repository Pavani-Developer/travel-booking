import type { PageLoad } from "./$types";
import { travelPackages } from "$lib/data/travelPackages";

export const load: PageLoad = ({ params }) => {
  const id = Number(params.id);
  const selectedPackage = travelPackages.find(pkg => pkg.id === id);

  if (!selectedPackage) {
    throw new Error("Package not found");
  }

  return { selectedPackage };
};

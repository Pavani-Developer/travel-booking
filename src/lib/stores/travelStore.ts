import { writable } from "svelte/store";
import { travelPackages } from "$lib/data/travelPackages";

export const packages = writable(travelPackages);
export const searchQuery = writable("");
export const selectedPackage = writable(null);

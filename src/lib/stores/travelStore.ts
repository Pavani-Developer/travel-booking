// src/lib/stores/travelstore.ts
import { writable } from "svelte/store";
import { travelPackages } from "$lib/data/travelPackages";
import type { Package } from "$lib/data/travelPackages"; // Use type-only import for Package

// Define the stores with proper types
export const packages = writable<Package[]>(travelPackages);
export const searchQuery = writable<string>("");
export const selectedPackage = writable<Package | null>(null);

export type BikeType = {
  name: string;
  price: number;
  gender: string;
  brand: string;
  image: string;
};

export type BrandFilterCounts = {
  [brand: string]: number;
};

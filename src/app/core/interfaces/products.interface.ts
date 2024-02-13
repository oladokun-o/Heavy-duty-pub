export interface AsphaltProduct {
  name: string;
  description?: string;
  brand?: Brand[];
  imageUrl: string;
  price?: number;
  meta?: {
    weight?: string;
    usage?: string;
  }
};

export interface Brand {
  name: string;
  price: number;
};

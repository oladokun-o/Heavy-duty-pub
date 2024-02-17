export interface AsphaltProduct {
  name: string;
  description?: string;
  brand?: Brand[];
  imageUrl: string;
  price?: number;
  qty?: number;
  meta?: {
    weight?: string;
    usage?: string;
  }
};

export interface Brand {
  name: string;
  price: number;
  selected?: boolean;
};

export interface EquipmentManufacturer {
  name: string;
}

export interface Equipment {
  id: number | string;
  name: string;
  description?: string;
  imageUrl: string;
  gallery?: string[];
  qty?: number;
  prices: {
    default: number;
    day: number;
    weekly: number;
    monthly: number;
  };
  meta: {
    brand?: string;
    weight?: string;
    usage?: string;
    model?: string;
    year?: number | string;
  }
}

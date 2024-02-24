export interface AsphaltProduct {
  name: string;
  description?: string;
  brand?: Brand[];
  imageUrl: string;
  gallery?: string[];
  price?: number;
  amount?: number;
  qty?: number;
  meta?: {
    weight?: string;
    usage?: string;
    type?: string;
  },
  id?: number | string;
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
  amount?: number;
  prices: {
    default: number;
    day: number;
    week: number;
    month: number;
  };
  meta: {
    brand?: string;
    weight?: string;
    usage?: string;
    model?: string;
    year?: number | string;
    type?: string;
  }
}

export interface Haulage {
  id: number | string;
  name: string;
  description?: string;
  imageUrl: string;
  gallery?: string[];
  qty?: number;
  amount?: number;
  price: number;
  meta: {
    weight?: string;
    type?: string;
  }
}

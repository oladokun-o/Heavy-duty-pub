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
  _id: number | string;
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
  _id: number | string;
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
  _id: number | string;
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

export type ProductType = "asphalts" | "equipments" | "haulages" | "porta-cabins";

export enum ProductTypeEnum {
  Asphalts = "asphalts",
  Equipments = "equipments",
  Haulages = "haulages",
  PortaCabins = "porta-cabins"
}

export const ProductQueries = [
  {
    name: ProductTypeEnum.Asphalts,
    query: `
      *[_type == 'asphaltProduct']{
        _id,
        name,
        description,
        brand[] -> {
          name,
          price
        },
        imageUrl,
        price,
        amount,
        qty,
        meta,
        popular
    }`
  },
  {
    name: ProductTypeEnum.Equipments,
    query: `
      *[_type == 'equipment']{
        _id,
        name,
        description,
        imageUrl,
        gallery,
        qty,
        amount,
        price,
        prices,
        meta {
          "brands":
            brand {
              brand -> {
                name
              }
            }
          ,
          weight,
          usage,
          model,
          year,
          type
        }
      }`
  },
  {
    name: ProductTypeEnum.PortaCabins,
    query: `
      *[_type == 'cabins']{
        _id,
        name,
        description,
        imageUrl,
        gallery,
        qty,
        amount,
        price,
        prices {
          default,
          day,
          week,
          month
        },
        meta {
          type,
          weight
        }
      }
    `
  },
  {
    name: ProductTypeEnum.Haulages,
    query: `
      *[_type == 'haulage']{
        _id,
        name,
        description,
        imageUrl,
        qty,
        amount,
        price,
        meta {
          weight,
          type
        }
      }
    `
  }
];

export const aboutUsQuery = `
  *[_type == 'aboutUs'][0]{
    founders[] {
      name,
      role,
      image {
        asset -> {
          _id,
          url
        }
      },
      bio,
      socialMedia {
        twitter,
        linkedin,
        instagram
      }
    },
    description,
    mission,
    vision
  }
`;

export const servicesQuery = `
  *[_type == 'services'][0]{
    servicesList[] {
      title,
      description,
      image {
        asset -> {
          _id,
          url
        }
      },
      link
    },
    pageDescription
  }
`;


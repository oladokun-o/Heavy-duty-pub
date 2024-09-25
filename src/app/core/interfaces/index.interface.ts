import { TemplateRef } from "@angular/core";

export interface NgbToast {
	template: any;
	classname?: string;
	delay?: number;
}

export interface SanityAPIResponse {
  ms: number;
  query: string;
  result: any[];
  syncTags: string[];
}

export interface AboutUsData {
  founders: Founder[];
  description: string;
  mission: string;
  vision: string;
}

interface Founder {
  name: string;
  role: string;
  image: Image;
  bio?: string;
  socialMedia?: SocialMediaLinks;
}

interface Image {
  asset: {
    _id: string;
    url: string;
  };
}

interface SocialMediaLinks {
  [key: string]: string;
}

export interface ServicesData {
  servicesList: Service[];
  pageDescription: string;
}

export interface Service {
  title: string;
  description: BlockContent[];
  image: Image;
  link: string;
}

interface BlockContent {
  _type: string;
  children: Array<{
    _type: string;
    text: string;
  }>;
  markDefs: any[];
  style: string;
  asset?: {
    _type: string;
    url: string;
  };
}

export interface LayoutData {
  headerLogo: string;
  footerLogo: string;
  footerText: any[];
}

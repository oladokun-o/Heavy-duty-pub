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

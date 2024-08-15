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

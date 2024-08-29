import { Component, OnInit } from '@angular/core';
import { AboutUsData } from 'src/app/core/interfaces/index.interface';
import { GeneralService } from 'src/app/core/services/general.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  loading: boolean = false;
  aboutUsData: AboutUsData | null = null;
  Object = Object;

  constructor(
    private generalService: GeneralService
  ) { }

  ngOnInit(): void {
    this.getAboutUsData();
  }

  private getAboutUsData(): void {
    this.loading = true;
    this.generalService.getAboutUs().subscribe(
      (data) => {
        this.loading = false;
        if (data) {
          this.aboutUsData = data;
        }
      },
      (err) => {
        this.loading = false;
        console.error(err);
      }
    );
  }

  getIcon(key: string): string {
    switch (key) {
      case 'twitter':
        return 'twitter';
      case 'linkedin':
        return 'linkedin';
      case 'instagram':
        return 'instagram';
      default:
        return ''; // Handle unknown keys or provide a default icon
    }
  }

}

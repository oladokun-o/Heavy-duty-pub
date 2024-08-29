import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Service, ServicesData } from 'src/app/core/interfaces/index.interface';
import { GeneralService } from 'src/app/core/services/general.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  loading: boolean = false;
  servicesData: ServicesData | null = null;
  service: string = '';
  serviceData: Service | undefined = undefined;

  constructor(
    private generalService: GeneralService,
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.data.subscribe(
      (data) => {
        if (data && data.services) {
          this.servicesData = data.services;
          this.setServiceData();
        }
      }
    );

    this.activatedRoute.params.subscribe(
      (params) => {
        if (params && params.service) {
          this.service = params.service;
        }
      }
    );
  }

  ngOnInit(): void {
    if (!this.servicesData) {
      this.getServicesData();
    }
  }

  private getServicesData(): void {
    this.loading = true;
    this.generalService.getServices().subscribe(
      (data) => {
        this.loading = false;
        if (data) {
          this.servicesData = data;
          this.setServiceData();
        }
      },
      (err) => {
        this.loading = false;
        console.error(err);
      }
    );
  }

  private setServiceData(): void {
    if (this.servicesData) {
      this.serviceData = this.servicesData.servicesList.find(
        (service) => service.link.toLowerCase() === this.service
      );
    }
  }

}

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-head',
  templateUrl: './page-head.component.html',
  styleUrls: ['./page-head.component.css']
})
export class PageHeadComponent implements OnInit {
  @Input() parent!: string;

  @Input() title!: string;

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service-provider',
  templateUrl: './service-provider.component.html',
  styleUrls: ['./service-provider.component.scss']
})
export class ServiceProviderComponent implements OnInit {
  description = `Top hair studio services in India at your Home`;
  constructor() { }

  ngOnInit(): void {
  }

}

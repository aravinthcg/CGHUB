import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-service-provider',
  templateUrl: './service-provider.component.html',
  styleUrls: ['./service-provider.component.scss'],
})
export class ServiceProviderComponent implements OnInit {
  description = `Top hair studio services in India at your Home`;
  constructor(private router: Router) {}

  ngOnInit(): void {}

  onClickRegister() {
    this.router.navigate(['/service-providers/register']);
  }
}

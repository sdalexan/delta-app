import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'portfolio-component',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {
 
  loadedFeature = '';

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }

}

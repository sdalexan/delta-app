import { Component } from '@angular/core';


@Component({
  selector: 'policy-component',
  templateUrl: './policy.component.html',
  styleUrls: ['./policy.component.scss']
})
export class PolicyComponent {

  loadedPolicyFeature = '';

  onNavigate(feature: string) {
    this.loadedPolicyFeature = feature;
  }

}
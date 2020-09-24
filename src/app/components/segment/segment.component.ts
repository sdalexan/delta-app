import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'segment-component',
  templateUrl: './segment.component.html',
  styleUrls: ['./segment.component.scss']
})
export class SegmentPanelComponent {
  loadedFeature = '';

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }

}
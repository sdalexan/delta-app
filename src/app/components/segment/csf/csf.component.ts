import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'csf-component',
  templateUrl: './csf.component.html',
  styleUrls: ['./csf.component.scss']
})
export class CsfComponent implements OnInit {
  rows: any;
  alertInfo: any;
  info: any;
  currentSate = null;
  currentIndex = -1;
  name = '';

  constructor(private stateService: DataService) { }

  ngOnInit() {
    this.retrieveCategory("segment");
  }

  retrieveCategory(category) {
    this.stateService.getAllData(category)
      .subscribe(
        data => {
          this.rows = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList(category) {
    this.retrieveCategory(category);
    this.currentSate = null;
    this.currentIndex = -1;
  }

onChange(stateValue) {
    console.log(stateValue);
    this.lookupDescription(stateValue);
    this.getAlerts(stateValue)
}

lookupDescription(value) {
  this.stateService.getDescription(value)
  .subscribe(
    data => {
      this.info = data;
      console.log(data);
    },
    error => {
      console.log(error);
    });
}

getAlerts(value) {
  this.stateService.getAllAlerts(value)
  .subscribe(
    data => {
      this.alertInfo = data;
      console.log(value);
      console.log(data);
    },
    error => {
      console.log(error);
    });
}
loadedFeature = 'recipe';
onNavigate(feature: string) {
  this.loadedFeature = feature;
}


}
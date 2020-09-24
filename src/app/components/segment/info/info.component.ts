import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'segment-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {
    rows: any;
  comments: any;
  alertInfo: any;
  segmentInfo: any;
  currentSegment = null;
  currentIndex = -1;
  name = '';

  constructor(private segmentService: DataService) { }

  ngOnInit() {
    this.retrieveCategory("segment");
  }

  retrieveCategory(category) {
    this.segmentService.getAllData(category)
      .subscribe(
        data => {
          this.rows = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList() {
    this.retrieveCategory("");
    this.currentSegment = null;
    this.currentIndex = -1;
  }

onChange(segmentValue) {
    console.log(segmentValue);
    this.lookupDescription(segmentValue);
    this.getAlerts(segmentValue);
    this.getComments(segmentValue);
}

lookupDescription(value) {
  this.segmentService.getDescription(value)
  .subscribe(
    data => {
      this.segmentInfo = data;
      console.log(data);
    },
    error => {
      console.log(error);
    });
}

getAlerts(value) {
  this.segmentService.getAllAlerts(value)
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

getDataInfo(){
  
}
getComments(value) {
  this.segmentService.getAllComments(value)
  .subscribe(
    data => {
      this.comments = data;
      console.log(value);
      console.log(data);
    },
    error => {
      console.log(error);
    });
}




}
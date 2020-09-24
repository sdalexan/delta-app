import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Pipe } from '@angular/core';

@Component({
  selector: 'alert-table',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.scss']
})
export class ListAlertsComponent implements OnInit {

  rows: any;
  currentSegment = null;
  currentIndex = -1;
  name: any;

  constructor(private segmentService: DataService) { }

  ngOnInit(): void {
    this.retrieveCategory("");
  }

  retrieveCategory(category) {
    this.segmentService.getCategoryAlerts(category)
      .subscribe(
        data => {
          this.rows = data;
          // this.getNameData(data);
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




    // console.log(url)
    // // this.segmentService.getDataInfo(url)
    // // .subscribe(
    // //   data => {
    // //     this.name = data;
    // //     // getData(data[0].data);
    // //     console.log(data);
    // //   },
    // //   error => {
    // //     console.log(error);
    // //   });
  }
  
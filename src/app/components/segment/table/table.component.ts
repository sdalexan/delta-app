import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'segment-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class ListSegmentComponent implements OnInit {

  segments: any;
  currentSegment = null;
  currentIndex = -1;
  name = '';

  constructor(private segmentService: DataService) { }

  ngOnInit(): void {
    this.retrieveCategory("");
  }

  retrieveCategory(category) {
    this.segmentService.getAllData(category)
      .subscribe(
        data => {
          this.segments = data;
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

}
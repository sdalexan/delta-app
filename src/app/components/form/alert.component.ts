import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { DataService } from 'src/app/services/data.service';


@Component({
  selector: 'alert-form',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertFormComponent implements OnInit {

   // constructor(public dialogRef: MatDialogRef<AlertFormComponent>) { }
   data: any;
  rows: any;
  info: any;
  currentSate = null;
  currentIndex = -1;
  name = '';
  amount = 0;
  max = 10;
  min = 0;
  current = 0;
  type = 'Premium Total';
  condition = '';
  created_by = '';
  id = '';
  amountType = 'total';


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


  getData(id){
    this.stateService.getDescription(id)
      .subscribe(
        data => {
          this.data = data;
          console.log(this.type);
            switch (this.type){
                case "Premium Total":
                    this.current = this.data.premium_total;
                    this.amount = this.data.premium_total;
                    this.max = this.amount * 1.5
                    this.amountType = 'total'
                    break;
                case "Premium Percent":
                    this.amount = this.data.premium_percent;
                    this.max = this.amount * 1.5
                    this.amountType = 'total'
                    break;
                case "Direct Written Premium":
                    this.amount = this.data.dwp;
                    this.max = this.amount * 1.5
                    this.amountType = 'total'
                    break;
                case "Premium Growth":
                    this.amount = this.data.premium_growth_actual;
                    this.max = this.amount * 1.5
                    this.amountType = 'total'
                    break;
                case "Policy Count":
                    this.amount = this.data.policy_count_actual;
                    this.max = this.amount * 1.5
                    this.amountType = 'total'
                    break;
                case "DWP Per Policy":
                    this.amount = this.data.dwp_per_policy_actual;
                    this.max = this.amount * 1.5
                    this.amountType = 'total'
                    break;
                case "Loss Ratio":
                    this.amount = this.data.loss_ratio_actual
                    this.max = 100
                    this.amountType = 'ratio'
                    break;
                case "Loss Ratio CAT":
                    this.amount = this.data.loss_ratio_cat;
                    this.max = 100
                    this.amountType = 'ratio'
                    break;
                case "Loss Ratio Large Loss":
                    this.amount = this.data.loss_ratio_large_actual;
                    this.max = 100
                    this.amountType = 'ratio'
                    break;
                case "Claim Count":
                    this.amount = this.data.claim_count;
                    this.max = this.amount * 1.5
                    this.amountType = 'total'
                    break;
                case "Average Loss Size":
                    this.amount = this.data.loss_size_avg_actual;
                    this.max = this.amount * 1.5
                    this.amountType = 'total'
                    break;
                case "Commodity Total":
                    this.amount = this.data.commodity_count_total;
                    this.max = this.amount * 1.5
                    this.amountType = 'total'
                    break;
                case "Commodity Percent":
                    this.amount = this.data.commodity_dwp_percent;
                    this.max = 100
                    this.amountType = 'ratio'
                    break;
                case "Submission Total":
                    this.amount = this.data.submission_count_total;
                    this.max = this.amount * 1.5
                    this.amountType = 'total'
                    break;
                case "Submission Percent":
                    this.amount = this.data.submission_dwp_percent;
                    this.max = 100
                    this.amountType = 'ratio'
                    break;
                default:
                    // code block
            }
          console.log(this.amount);
          console.log(data);

        },
        error => {
          console.log(error);
        });
  }

// getAlerts(value) {
//   this.stateService.getAllAlerts(value)
//   .subscribe(
//     data => {
//       this.info = data;
//       console.log(value);
//       console.log(data);
//     },
//     error => {
//       console.log(error);
//     });
// }

onChange(id){
    this.id = id;   
    this.getData(id);

    console.log(id);
}

typeChange(type){
    this.onChange(this.id);
    this.type = type;
    console.log(type)
}

amountChange(amount){
    this.amount = amount;
    if(this.amount > this.current){
    this.condition = 'over'}
    if(this.amount < this.current){
    this.condition = 'under'}
}

createAlert(){
    this.stateService.createAlert(this.type, this.amount, "John Doe", this.condition, this.id);
}



}



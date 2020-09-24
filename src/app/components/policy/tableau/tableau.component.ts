import { Component } from '@angular/core';
import tableau from "tableau-api";

@Component({
  selector: 'policy-tableau',
  templateUrl: './tableau.component.html',
  styleUrls: ['./tableau.component.scss']
})
export class PolicyTableauComponent {

  ngOnInit() {
    this.loadTableau();
  }

  loadTableau(){
    // var policyDiv = document.getElementById("policyDiv"),
    // policyOptions = {
    //     hideTabs: true,
    //     hideToolbar: true,
    //     device: "desktop"
    //     // onFirstInteractive: function ()
    //     // {
    //     //     listenToPolicyInfoMarksSelection();
    //     // }
    // },
    // policyURL = "https://tableau.aws.e1.nwie.net/t/ess/views/Pages/PolicyDash";
    // let policyViz = new window.tableau.Viz(policyDiv, policyURL, policyOptions);

  }
}
import { Component, OnInit } from '@angular/core';
import tableau from "tableau-api";

@Component({
  selector: 'portfolio-tableau',
  templateUrl: './tableau.component.html',
  styleUrls: ['./tableau.component.scss']
})
export class PortfolioTableauComponent implements OnInit {
 
  ngOnInit() {
    this.loadTableau();
  }

  loadTableau(){
    // var portfolioDiv = document.getElementById("portfolioDiv"),
    // portfolioOptions = {
    //     hideTabs: true,
    //     hideToolbar: true,
    //     device: "desktop",
    // },
    // portfolioURL = "https://tableau.aws.e1.nwie.net/t/ess/views/DeltaDashboardV4/Portfolio-Performance";
    // let portfolioViz = new window.tableau.Viz(portfolioDiv, portfolioURL, portfolioOptions);
  }


}

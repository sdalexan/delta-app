import { Component, OnInit } from '@angular/core';
import tableau from "tableau-api";

@Component({
  selector: 'trending-tableau',
  templateUrl: './tableau.component.html',
  styleUrls: ['./tableau.component.scss']
})
export class TrendingComponent implements OnInit {
 
  ngOnInit() {
    this.loadTableau();
  }

  loadTableau(){
    // Uncomment the text below to load tableau visuals

    // var trendingDiv = document.getElementById("trendingDiv"),
    // trendingOptions = {
    //     hideTabs: true,
    //     hideToolbar: true,
    //     device: "desktop",
    // },
    // trendingURL = "https://tableau.aws.e1.nwie.net/t/ess/views/Pages/Trending";
    // var trendingViz = new window.tableau.Viz(trendingDiv, trendingOptions, trendingURL);
  }


}

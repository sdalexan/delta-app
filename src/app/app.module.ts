import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { SegmentPanelComponent } from './components/segment/segment.component';
import { ListSegmentComponent } from './components/segment/table/table.component';
import { TrendingComponent } from './components/segment/trending/tableau.component';
import { CsfComponent } from './components/segment/csf/csf.component';
import { InfoComponent } from './components/segment/info/info.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { PortfolioTableauComponent } from './components/portfolio/tableau/tableau.component';
import { ListAlertsComponent } from './components/portfolio/alerts/alerts.component';
import { PolicyComponent } from './components/policy/policy.component';
import { PolicyTableauComponent } from './components/policy/tableau/tableau.component';
import { PolicyCommentsComponent } from './components/policy/comment/comments.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AlertFormComponent } from './components/form/alert.component';
import { AlertModalComponent } from './components/form/modal.component';
import { MatDialogModule } from '@angular/material/dialog';


import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SegmentPanelComponent,
    ListSegmentComponent,
    CsfComponent,
    TrendingComponent,
    InfoComponent,
    PortfolioComponent,
    PortfolioTableauComponent,
    ListAlertsComponent,
    PolicyComponent,
    PolicyTableauComponent,
    PolicyCommentsComponent,
    AlertFormComponent,
    AlertModalComponent,
],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [AlertModalComponent]
})
export class AppModule { }

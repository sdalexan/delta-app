import {Component} from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AlertFormComponent } from './components/form/alert.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent {
  sidebarSelection = '';

  onSideNavigate(feature: string) {
    this.sidebarSelection = feature;
  }

  constructor(public matDialog: MatDialog) { }

  createAlert() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.id = "modal-component";
    dialogConfig.height = "750px";
    dialogConfig.autoFocus = true;
    dialogConfig.width = "600px";
    dialogConfig.position = {
      left: '40%'
    };
    const modalDialog = this.matDialog.open(AlertFormComponent, dialogConfig);
  }

}


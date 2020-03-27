import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { LandingModalComponent } from '../landing-modal/landing-modal.component';
export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  animal: string;
  name: string;

  constructor(public dialog: MatDialog) { }

  openDialog() {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    this.dialog.open(LandingModalComponent, dialogConfig);
}

  ngOnInit(): void {
  }

}

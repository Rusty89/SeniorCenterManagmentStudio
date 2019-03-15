import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivityFormComponent } from '.././activity-form/Activity-form.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  constructor(public dialog: MatDialog) { }
  
  
  
  
  openDialog(): void {
    const dialogRef = this.dialog.open(ActivityFormComponent, {
     
    });


    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  ngOnInit() {
  }

}

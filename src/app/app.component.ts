import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'GMTracker';

  i : number = 2;
  row : any;
  cell0 : any;
  cell1 : any;
  cell2 : any;

  print(loca : any,lati : any,longi : any, table: any ) 
  {
    if (loca.value == "") 
    {
        alert("Location Name cannot be Empty");
    } 
    else if (lati.value == "") 
    {
        alert("Latitude Value cannot be Empty");
    } 
    else if (longi.value == "") 
    {
        alert("Longitude Value cannot be Empty")
    } 
    else if ((loca.value !== "") && (lati.value !== "") && (longi.value !== "")) 
    {
      if ((lati.value > -90.0) && (lati.value < 90.0)) 
      {
        if ((longi.value > -180.0) && (longi.value < 180.0)) 
        {
          this.row = table.insertRow(this.i);
          this.cell0 = this.row.insertCell(0);
          this.cell1 = this.row.insertCell(1);
          this.cell2 = this.row.insertCell(2);
          this.cell0.innerHTML = `${loca.value}`;
          this.cell1.innerHTML = `${lati.value}`;
          this.cell2.innerHTML = `${longi.value}`;
          this.i = this.i + 1
        }
        else
        {
          alert("Please Enter valid Longitude Value")
        }
      }
      else 
      {
        alert("Please Enter Valid Latitude Value");
      }
    }
  }
}

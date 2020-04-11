import { Component, OnInit } from '@angular/core';
import{ Router } from '@angular/router';
@Component({
  selector: 'app-dash-home',
  templateUrl: './dash-home.component.html',
  styleUrls: ['./dash-home.component.scss']
})
export class DashHomeComponent implements OnInit {

  constructor(private router:Router ) { }

  ngOnInit() {
  }
  title = 'Angular Charts';

  view: any[] = [250, 150];
  view1:any[]=[700,400]

  // options for the chart
  showXAxis = false;
  showYAxis = false;
  gradient = false;
  showLegend = false;
  showXAxisLabel = true;
  xAxisLabel = 'Country';
  showYAxisLabel = true;
  yAxisLabel = 'Sales';
  timeline = true;
  barPadding=40

  colorScheme = {
    domain: ['#19cc5a', '#19cc5a', '#19cc5a', '#19cc5a', '#19cc5a', '#19cc5a','#19cc5a','#19cc5a','#19cc5a','#19cc5a']
  };

  colorScheme1={
    domain:['#3bb1fe']
  }
  //pie
  showLabels = true;

  // data goes here
public single = [
  {
    "name": "Jan",
    "value": 224377
  },
  {
    "name": "Feb",
    "value": 1126001
  },
  {
    "name": "Mar",
    "value": 296211
  },
  {
    "name": "Apr",
    "value": 257363
  },
  {
    "name": "May",
    "value": 196751
  },
  {
    "name": "Jun",
    "value": 204612
  },
  // {
  //   "name": "Jul",
  //   "value": 202333
  // },
  // {
  //   "name": "Aug",
  //   "value": 204611
  // },
  // {
  //   "name": "Sep",
  //   "value": 1967502
  // },
  // {
  //   "name": "Oct",
  //   "value": 700001
  // },
  // {
  //   "name": "Nov",
  //   "value":90 600001
  // },
  // {
  //   "name": "Dec",
  //   "value": 1126001
  // },
];
public multi=[
{
  "name": "Transaction",
  "series": [
    {
      "name": "30 Jan",
      "value": 30
    },
    {
      "name": "31 Jan",
      "value": 80
    },
    {
      "name": "1 Feb",
      "value": 70
    }
    ,
    {
      "name": "2 Feb",
      "value": 95
    },
    {
      "name": "3 Feb",
      "value": 100
    }
    ,
    {
      "name": "4 Feb",
      "value": 80
    },
    {
      "name": "5 Feb",
      "value": 150
    }
  

  ]
},]



}

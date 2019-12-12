import { Component, ViewChild } from '@angular/core';
import { faExclamationCircle, faArrowAltCircleRight, faArrowAltCircleUp, faPercent } from '@fortawesome/free-solid-svg-icons';
import { MatSort, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-result-table',
  templateUrl: './result-table.component.html',
  styleUrls: ['./result-table.component.css']
})

export class ResultTableComponent {

  displayedColumns: string[] = ['importance', 'description', 'arrow', 'energy', 'period', 'view'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatSort, { static: true }) sort: MatSort;

  ngOnInit() {
    this.dataSource.sort = this.sort;
  }

  //Define icons 
  faExclam = faExclamationCircle;
  faArrowRight = faArrowAltCircleRight;
  faArrowUp = faArrowAltCircleUp;
  faPerc = faPercent;

  //Bar Chart Elements
  barChartOptions = {
    responsive: true,
    scales: {
      yAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: "Energy efficiency (W/m²K)",
            fontSize: 12
          },
          ticks: {
            beginAtZero: true
          }
        }
      ],
      xAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: "Cost Level (£)",
            fontSize: 12
          }
        }
      ]
    }
  };

  barChartData = [
    { data: [400, 350, 250, 156], label: 'Floor' },
    { data: [600, 550, 360, 240], label: 'Windows' },
    { data: [400, 350, 250, 156], label: 'Roof' },
    { data: [500, 455, 400, 340], label: 'Doors' },
    { data: [400, 350, 250, 156], label: 'Outer Walls' }
  ];

  barChartLabels = ['Current', 'Low', 'Mid', 'High'];

  barColors = [
    { backgroundColor: 'rgba(255, 99, 132)' },
    { backgroundColor: 'rgba(255, 159, 64)' },
    { backgroundColor: 'rgba(255, 205, 86)' },
    { backgroundColor: 'rgba(75, 192, 192)' },
    { backgroundColor: 'rgba(54, 162, 235)' }
  ];

  //Pie Chart Elements
  pieChartOptions = {
    responsive: true,

  };

  pieChartData = [{ data: [35, 20, 10, 15, 20] }];

  pieChartLabels = ['Floor', 'Windows', 'Roof', 'Doors', 'Outer Wall'];

  pieColors = [
    {
      backgroundColor: ['rgba(255, 99, 132)',
        'rgba(255, 159, 64)',
        'rgba(255, 205, 86)',
        'rgba(75, 192, 192)',
        'rgba(54, 162, 235)']
    }
  ];

  onVisualise(desc: string, el: HTMLElement): void {
    this.barChartData = [
      { data: [400, 350, 250, 156, 75], label: 'Floor' },
      { data: [600, 550, 360, 240, 50], label: 'Windows' },
      { data: [400, 350, 250, 156, 100], label: 'Roof' },
      { data: [500, 455, 400, 340, 200], label: 'Doors' },
      { data: [400, 350, 250, 156, 100], label: 'Outer Walls' }
    ];
    this.barChartLabels = ['Current', 'Low', 'Mid', 'High', desc];
    //Generate 5 random values with sum 100
    let base = [];
    for (let i = 0; i < 5; i++) {
      base.push(Math.floor(Math.random() * 100))
    }
    let baseT = base.reduce((a, b) => a + b, 0)
    let result = base.map(x => x / baseT).map(x => x * 100).map(x => Math.floor(x));
    this.pieChartData = [{ data: result }];

    el.scrollIntoView({behavior: "smooth"});
  }

  onClear(): void {
    //Reset results data
    this.barChartData = [
      { data: [400, 350, 250, 156], label: 'Floor' },
      { data: [600, 550, 360, 240], label: 'Windows' },
      { data: [400, 350, 250, 156], label: 'Roof' },
      { data: [500, 455, 400, 340], label: 'Doors' },
      { data: [400, 350, 250, 156], label: 'Outer Walls' }
    ];
    this.barChartLabels = ['Current', 'Low', 'Mid', 'High'];
    this.pieChartData = [{ data: [35, 20, 10, 15, 20] }];
  }


}

/* Static data */
export interface ChangeElement {
  importance: any;
  description: any;
  arrow: any;
  energy: any;
  period: any;
  view: any;
}

const ELEMENT_DATA: ChangeElement[] = [
  { importance: 1, description: 'Vestibulum blandit, ligula at mollis sodales,', arrow: '>', energy: 600, period: 5, view: 1 },
  { importance: 2, description: 'ipsum orci in felis. Nunc id est mauris.', arrow: '>', energy: 560, period: 3, view: 2 },
  { importance: 3, description: 'venenatis dui. Etiam metus nulla, mollis ac placerat a,', arrow: '>', energy: 460, period: 10, view: 3 },
  { importance: 4, description: 'lobortis velit. Nam ullamcorper ullamcorpere', arrow: '>', energy: 350, period: 1, view: 4 },
  { importance: 5, description: 'Fusce non consequat sem, sed vestibulum felis.', arrow: '>', energy: 600, period: 5, view: 1 },
  { importance: 6, description: 'This is the change to be made', arrow: '>', energy: 560, period: 3, view: 2 },
  { importance: 7, description: 'This is the change to be made', arrow: '>', energy: 460, period: 10, view: 3 },
  { importance: 8, description: 'This is the change to be made', arrow: '>', energy: 350, period: 1, view: 4 },
  { importance: 9, description: 'This is the change to be made', arrow: '>', energy: 600, period: 5, view: 1 },
  { importance: 10, description: 'This is the change to be made', arrow: '>', energy: 560, period: 3, view: 2 },
  { importance: 11, description: 'This is the change to be made', arrow: '>', energy: 460, period: 10, view: 3 },
  { importance: 12, description: 'This is the change to be made', arrow: '>', energy: 350, period: 1, view: 4 },
  { importance: 13, description: 'This is the change to be made', arrow: '>', energy: 600, period: 5, view: 1 },
  { importance: 14, description: 'This is the change to be made', arrow: '>', energy: 560, period: 3, view: 2 },
  { importance: 15, description: 'This is the change to be made', arrow: '>', energy: 460, period: 10, view: 3 },
  { importance: 16, description: 'This is the change to be made', arrow: '>', energy: 350, period: 1, view: 4 },
];

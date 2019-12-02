import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-result-table',
  templateUrl: './result-table.component.html',
  styleUrls: ['./result-table.component.css']
})
export class ResultTableComponent {

  @ViewChild('barChart', { static: false }) barChart: ElementRef;

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

  pieChartData = [
    { data: [400, 600, 350, 455, 250] }
  ];

  pieChartLabels = ['Outer Wall', 'Doors', 'Windows', 'Walls', 'Doors'];

  pieColors = [
    {
      backgroundColor: ['rgba(255, 99, 132)',
        'rgba(255, 159, 64)',
        'rgba(255, 205, 86)',
        'rgba(75, 192, 192)',
        'rgba(54, 162, 235)']
    }
  ];

  onChartClick(event) {
    console.log(event);
  }

}




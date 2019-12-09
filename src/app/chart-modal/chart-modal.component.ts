import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { APIService } from '../api-service.service'
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-chart-modal',
  templateUrl: './chart-modal.component.html',
  styleUrls: ['./chart-modal.component.css']
})
export class ChartModalComponent implements OnInit {

  public barChartOptions: ChartOptions = {
    responsive: true,
    scales: { xAxes: [{}], yAxes: [{ id:'A', position: 'left'}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    },
  };
  public barChartLabels: Label[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType: ChartType = 'horizontalBar';
  public barChartLegend = true;
  public barChartPlugins;

  public barChartData: ChartDataSets[] = [];


  constructor(
    private APIService: APIService,
    private dialogRef: MatDialogRef<ChartModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,){
      this.data = data;
  }
  
  ngOnInit() {
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'A', yAxisID: 'A' },
    { data: [-28, -48, -40, -19, -86, -27, -90], label: 'B', yAxisID: 'A' }
    for(let i = 0; i<this.data.length; i++){
      this.barChartData.push(
        {
          label: this.data[i].property,
          data: [
            this.data[i].suggestion[0]
          ]
        }
      )      
    }
  }
  onCancel(): void {
    console.log("Cancel clicked");
    this.dialogRef.close();
  }
  save(): void{
    console.log("Save clicked");
    this.dialogRef.close();
  }

    // events
    public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
      console.log(event, active);
    }
  
    public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
      console.log(event, active);
    }
  
    public randomize(): void {
      // Only Change 3 values
      const data = [
        Math.round(Math.random() * 100),
        59,
        80,
        (Math.random() * 100),
        56,
        (Math.random() * 100),
        40];
      this.barChartData[0].data = data;
    }

}
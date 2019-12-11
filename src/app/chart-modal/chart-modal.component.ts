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
    scales: { xAxes: [{}], yAxes: [{ id:'A', position: 'left', display:true}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    },
  };
  public barChartLabels: Label[] = [];
  public barChartType: ChartType = 'horizontalBar';
  public barChartLegend = true;
  public barChartPlugins;

  //Push to barChartData, used for modifying the chart as interactive
  //Designed to push in order, total E %, total cost, -> suggest E, suggest cost
  public barChartData: ChartDataSets[] = [];

  constructor(
    private APIService: APIService,
    private dialogRef: MatDialogRef<ChartModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,){
      this.data = data;
  }
  ngOnInit(){
    this.initData();
  }
  
  initData() {
    let dataToPush = [];
    let labelToPush = [];
    for(let i = 0; i<this.data.data.length; i++){
      let solution = [];
      for(let j = 0; j<this.data.data[i].suggestion.length; j++){
        if(i == 0){
          solution.push(
            this.data.data[i].suggestion[j].percent,
            (this.data.data[i].suggestion[j].cost/1000) )
        }
        else{
          solution.push(
            this.data.data[i].suggestion[j].percent,
            (this.data.data[i].suggestion[j].cost/1000) )
        }
      }
      dataToPush.push(
        {
          label: this.data.data[i].property,
          yAxisID: "A",
          data: solution
        }
      )
      labelToPush.push(
        'Suggest '+ (i+1) + '\nEstimated Improvement (%)',
        'Suggest '+ (i+1) + '\nEstimated Cost (K/€)'
      )
    }
    for(let i in dataToPush){
      this.barChartData.push(dataToPush[i]);    
    }
    for(let j in labelToPush){
      this.barChartLabels.push(labelToPush[j]);    
    }
    this.barChartData[0].data.push(40,0)
    this.barChartData[1].data.push(35,0)

    this.barChartLabels.push('Total E %', 'Total E cost (k/€)');
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
  
    public affect(index:number, ): void {
      let efficiency = 0;
      let cost = 1;
      if(index){
        cost = 2 * (index - 1) + 1 ;
        efficiency = cost + 1  ;
      }
      let dataSet = this.barChartData;
      for(let i in dataSet){
        let affectedPercent: number = ( <number> (dataSet[i].data[(dataSet[i].data.length - 2)]) ) - ( <number> (dataSet[i].data[efficiency]) );
        let affectedCost: number = (<number> (dataSet[i].data[(dataSet[i].data.length - 1)]) ) + ( <number> (dataSet[i].data[cost]) );

        const dataTem: number[] = [
          (<number> dataSet[i].data[0]),
          (<number>dataSet[i].data[1]),
          (<number>dataSet[i].data[2]),
          (<number>dataSet[i].data[3]),
          affectedPercent >= 0 ? affectedPercent: 0,
          affectedCost,
        ]
        this.barChartData[i].data = dataTem;
      }
    }

    public reset(): void{
      this.barChartData.length = 0;
      this.barChartLabels.length = 0;
      this.initData();
    }

}

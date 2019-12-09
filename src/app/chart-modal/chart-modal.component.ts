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
  public barChartLabels: Label[] = [];
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
  ngOnInit(){
    this.initData()
  }
  
  initData() {
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
            -this.data.data[i].suggestion[j].percent,
            -(this.data.data[i].suggestion[j].cost/1000) )
        }
      }
      this.barChartData.push(
        {
          label: this.data.data[i].property,
          yAxisID: "A",
          data: solution
        }
      )
      this.barChartLabels.push(
        'Suggest '+ (i+1) + ' Estimated Improvement (%)',
        'Suggest '+ (i+1) + ' Estimated Cost (K/€)'
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
  
    public randomize(index:number): void {
      // Only Change 3 values
      // const data = [
      //   Math.round(Math.random() * 100),
      //   59,
      //   80,
      //   (Math.random() * 100),
      //   56,
      //   (Math.random() * 100),
      //   40];
      // this.barChartData[0].data = data;
    }

}

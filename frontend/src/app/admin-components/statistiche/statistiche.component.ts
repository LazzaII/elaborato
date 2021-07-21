import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Access } from 'src/app/shared/Access';
import { ChartOptions, ChartType, ChartDataSets, RadialChartOptions  } from 'chart.js';
import { SingleDataSet, Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip, Color } from 'ng2-charts';

@Component({
  selector: 'app-statistiche',
  templateUrl: './statistiche.component.html',
  styleUrls: ['./statistiche.component.css']
})
export class StatisticheComponent implements OnInit {

  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public barChartLabels: Label[] = [];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];
  public barChartData: ChartDataSets[] = [];
  public barChartColor: Color[] = [];

  public radarChartOptions: RadialChartOptions = {
    responsive: true,
  };
  public radarChartLabels: Label[] = [];
  public radarChartData: ChartDataSets[] = [];
  public radarChartType: ChartType = 'radar';
  public radarChartColor: Color[] = [];

  public pieChartOptions: ChartOptions = {
    responsive: true,
  };
  public pieChartLabels: Label[] = [];
  public pieChartData: SingleDataSet = [];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];
  public pieChartColor = [
    {backgroundColor:[
      'red', 'blue', 'green', 'orange'
    ]}
  ]

  public dataSource: Access[] = [];
  private error: any;
  public dataSourceDay = [
    {day: 'Domenica', tot: 0, pc:"0"},
    {day: 'Lunedì', tot: 0, pc:"0"}, 
    {day: 'Martedì', tot: 0, pc:"0"}, 
    {day: 'Mercoledì', tot: 0, pc:"0"}, 
    {day: 'Giovedì', tot: 0,pc:"0"}, 
    {day: 'Venerdì', tot: 0, pc:"0"}, 
    {day: 'Sabato', tot: 0, pc:"0"}
  ];
  public dataSourceMonth = [
    {month: 'Gennaio', tot: 0, pc:"0"}, 
    {month: 'Febbraio', tot: 0, pc:"0"}, 
    {month: 'Marzo', tot: 0, pc:"0"}, 
    {month: 'Aprile', tot: 0, pc:"0"}, 
    {month: 'Maggio', tot: 0, pc:"0"}, 
    {month: 'Giugno', tot: 0, pc:"0"}, 
    {month: 'Luglio', tot: 0, pc:"0"},
    {month: 'Agosto', tot: 0, pc:"0"}, 
    {month: 'Settembre', tot: 0, pc:"0"}, 
    {month: 'Ottobre', tot: 0, pc:"0"}, 
    {month: 'Novembre', tot: 0, pc:"0"}, 
    {month: 'Dicembre', tot: 0, pc:"0"} 
  ];
  public dataSourceTeacher = [
    {teacher: 'Napolitano Amalia', tot: 0, pc:"0"}, 
    {teacher: 'Povesi Carolina', tot: 0, pc:"0"}, 
    {teacher: 'Piccio Costantino', tot: 0, pc:"0"}, 
    {teacher: 'Trentino Ezio', tot: 0, pc:"0"}, 
  ];
  public readonly displayedColumnsD: string[] = [
    'day', 'tot', 'percentage'
  ];
  public readonly displayedColumnsM: string[] = [
    'month', 'tot', 'percentage'
  ];
  public readonly displayedColumnsT: string[] = [
    'teacher', 'tot', 'percentage'
  ];

  constructor(private restClient : ApiService) { 
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
    
  }

  ngOnInit(): void {
    this.loaData(); 
  }

  loaData() : void {
    this.restClient.getAccess().subscribe(
      data => {
        this.dataSource = data
        for (let i = 0; i < 3; i++)
          this.dividePer(i);
        for (let i = 0; i < 3; i++) 
          this.drawChart(i);
        for (let i = 0; i < 3; i++)
          this.percentageCalc(i); 
      },
      error => this.error = error
    )
  }

  dividePer( key : number) : void {
    switch (key) {
      case 0: //for the day
        this.dataSource.forEach(a  => {
          let day = new Date(a.access).getDay();
          this.dataSourceDay[day].tot++;
        });
        break;
      case 1: //for the month
        this.dataSource.forEach(a => {
          let month = new Date(a.access).getMonth();
          this.dataSourceMonth[month].tot++;
        });
        break;

      case 2: //for the teacher
        this.dataSource.forEach(a => {
          this.dataSourceTeacher[a.id_t-1].tot++;
        });
      break;
    }  
  }

  getTotDay() : number {
    return this.dataSourceDay.map(a => a.tot).reduce((tot, value) => tot + value, 0);
  }
  getTotMonth() : number {
    return this.dataSourceMonth.map(a => a.tot).reduce((tot, value) => tot + value, 0);
  }
  getTotTeacher() : number {
    return this.dataSourceTeacher.map(a => a.tot).reduce((tot, value) => tot + value, 0);
  }

  percentageCalc(key : number) : void {
    switch (key) {
      case 0:
        this.dataSource.forEach(a => {
          let day = new Date(a.access).getDay();
          if(this.dataSourceDay[day].tot != 0)
            this.dataSourceDay[day].pc = ((100 * this.dataSourceDay[day].tot) / this.getTotDay()).toFixed(2); 
        });
        break;
      case 1:
        this.dataSource.forEach(a => {
          let month = new Date(a.access).getMonth();
          if(this.dataSourceMonth[month].tot != 0)
            this.dataSourceMonth[month].pc = ((100 * this.dataSourceMonth[month].tot) / this.getTotMonth()).toFixed(2);
        });
        break;
      case 2:
        this.dataSource.forEach(a => {
          if(this.dataSourceTeacher[a.id_t-1].tot != 0)
            this.dataSourceTeacher[a.id_t-1].pc = ((100 * this.dataSourceTeacher[a.id_t-1].tot) / this.getTotTeacher()).toFixed(2);
        });
        break;
    }
  }

  drawChart(key : number) {
    switch (key) {
      case 0:
        let day: string[] = [];
        for (let i = 0; i < this.dataSourceDay.length; i++)
          day[i] = this.dataSourceDay[i].day;
        this.barChartLabels = day;

        let n: number[] = [];
        for (let i = 0; i < this.dataSourceDay.length; i++) 
          n[i] = this.dataSourceDay[i].tot;

        this.barChartData[0] = { data: n, label: 'Ingressi per giorno' };
        this.barChartColor[0] = { backgroundColor: [ 'red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet' ] };
        break;
      case 1:
        let month: string[] = [];
        for (let i = 0; i < this.dataSourceMonth.length; i++)
          month[i] = this.dataSourceMonth[i].month;
        this.radarChartLabels = month;

        let m: number[] = [];
        for (let i = 0; i < this.dataSourceMonth.length; i++)
          m[i] = this.dataSourceMonth[i].tot;
        
        this.radarChartData[0] = { data: m, label: 'Ingressi per mese' };
        this.radarChartColor[0] = { backgroundColor: 'blue' };
        break;
      case 2:
        let teacher : string[] = [];
        for (let i = 0; i < this.dataSourceTeacher.length; i++) 
          teacher[i] = this.dataSourceTeacher[i].teacher;
        this.pieChartLabels = teacher;

        let t: number[] = [];
        for (let i = 0; i < this.dataSourceTeacher.length; i++) 
          t[i] = this.dataSourceTeacher[i].tot;
        this.pieChartData = t;

        break;
    }
  }

}

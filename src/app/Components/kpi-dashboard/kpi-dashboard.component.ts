import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../../Nav/navbar.service';
import * as Highcharts from 'highcharts';
import { HttpClient } from '@angular/common/http';
import { AlarmService} from '../../Service/app/alarm.service';

@Component({
  selector: 'app-kpi-dashboard',
  templateUrl: './kpi-dashboard.component.html',
  styleUrls: ['./kpi-dashboard.component.scss']
})
export class KpiDashboardComponent implements OnInit {

  Highcharts: typeof Highcharts = Highcharts;
  machine_response:any;
  parts:any;allcycletime:any;
  hour:any;
  data:any[] =[];
  data1:any[] =[];
  content:any;
  higchart: any;
  myLoader = false;
  chart_loop:any;
  power: any;
  reflect: any;
  constructor(private nav : NavbarService ,private http:HttpClient,private service:AlarmService) {
    this.nav.show();
   }

  ngOnInit() {

    this.myLoader = true;
    this.service.god().subscribe(res =>{
      this.machine_response = res;
      console.log(this.machine_response)
      
      this.myLoader = false;
      setTimeout (() => {

      for(let i in this.machine_response){
        this.chart_loop = this.machine_response[i].data;
        console.log(this.chart_loop)  
        this.data = []
        this.data1 = []

        for(let j in this.machine_response[i].data){
          this.data.push( this.machine_response[i].data[j].time);
         this.data1.push(this.machine_response[i].data[j].count);
        
         this.reflect = this.machine_response[i].status;
       
        }
        console.log(this.data)
        console.log(this.data1)
         
          var name="partcycle" + i;
          
           
          Highcharts.chart(name, {
           chart: {
             renderTo: 'container'+ i,
             zoomType: 'xy',
             height: 120,
             // backgroundColor: ''
           },
           exporting: {
             enabled: false
           },
           credits: {
             enabled: false
           },
           title: {
             text: ''
           },
           subtitle: {
             text: ''
           },
           xAxis: [{
             categories: this.data,
             crosshair: false,
             labels: {
               enabled: true
             }
           }],
           yAxis: [{ // Primary yAxis
             gridLineColor: '#45B734',
             labels: {
               enabled: false,
               // style: {
               //   color: Highcharts.getOptions().colors[1]
               // }
             },
             title: {
               text: '',
               // style: {
               //   color: Highcharts.getOptions().colors[1]
               // }
             }
           },
           { // Secondary yAxis
             title: {
               text: '',
               // style: {
               //   color: Highcharts.getOptions().colors[0]
               // }
             },
     
             opposite: false
           }],
           tooltip: {
             shared: true
           },
         
           series: [{
             showInLegend: false,
             // borderColor: '#056B2D',
             name: 'Count',
             type: 'column',
             yAxis: 1,
             data: this.data1,
             color: this.reflect === 'OPERATE'? "#1EAD55" : this.reflect === 'DISCONNECT'? "#6D6D6D" : "#F81301",
             // color: "this.reflect === 'OPERATE'? #1EAD55 : this.reflect === 'DISCONNECT'? #6D6D6D : #F81301",
             tooltip: {
               valueSuffix: ' ',
             }
           }, 
           {
             showInLegend: false,
             name: 'Parts',
             type: 'spline',
             data: this.data1,
             color: this.reflect === 'OPERATE'? "#1EAD55" : this.reflect === 'DISCONNECT'? "#6D6D6D" : "#F81301",
             tooltip: {
               valueSuffix: ''
             }
           }
         ]
         });
      }
    }, 1000);
       
  })




  
}



}



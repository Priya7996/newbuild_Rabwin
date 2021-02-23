import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../../Nav/navbar.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ComparechartService} from '../../Service/app/comparechart.service';
import { DatePipe } from '@angular/common';
declare var Highcharts: any;


declare var gtag;

@Component({
  selector: 'app-comparechart',
  templateUrl: './comparechart.component.html',
  styleUrls: ['./comparechart.component.scss']
})
export class ComparechartComponent implements OnInit {
  secidle:any;
  secdis:any;
  secrun:any;
  utili1:any;
  utili2:any;
  utili3:any;
  public today: Date = new Date(new Date().toDateString());
  public weekStart: Date = new Date(new Date(new Date().setDate(new Date().getDate() - (new Date().getDay() + 7) % 7)).toDateString());
  public weekEnd: Date = new Date(new Date(new Date().setDate(new Date(new Date().setDate((new Date().getDate()
    - (new Date().getDay() + 7) % 7))).getDate() + 6)).toDateString())
    ;
  public monthStart: Date = new Date(new Date(new Date().setDate(1)).toDateString());
  public monthEnd: Date = this.today;
  public lastStart: Date = new Date(new Date(new Date(new Date().setMonth(new Date().getMonth() - 2)).setDate(1)).toDateString());
  public lastEnd: Date = this.today;
  public yearStart: Date = new Date(new Date(new Date().setDate(new Date().getDate() - 365)).toDateString());
  public yearEnd: Date = this.today;
  public currentYear: number = this.today.getFullYear();
  public currentMonth: number = this.today.getMonth();
  public maxDate: Object = new Date();
  public minDate: Object = new Date(new Date().setMonth(new Date().getMonth() - 2));
  shift_response: any;
  login: FormGroup;
  machine_response: any;
  second:any;
  get_report: any;
  select_machine: any;
  select_shift: any;
  report_table: any;
  test: FormGroup;
  machine_get: any;
  first_loading: any;
  myLoader = false;
  first_pge_loading: any;
  status:any;
  daterangepicker:any;
  new_date1:any;
  new_date:any;
  first:any;
  new_date3: any;
  new_date2: any;
  myLoader1= false;
  // maxDate:any;
  // minDate:any;

  constructor(private nav: NavbarService,private fb:FormBuilder,private service :ComparechartService,private datePipe: DatePipe) {
    this.nav.show();
  }

  ngOnInit() {



    
     this.login = this.fb.group({
        machine_name:["",],
        shift_num:[""],
        date:["",],
  
      })

      this.service.getmachines().subscribe(res => {
        this.machine_response = res;
        this.login.patchValue({
          machine_name: this.machine_response[0],
        })
        this.service.getshift().subscribe(res => {
          this.shift_response = res;
          this.login.patchValue({
            shift_num: this.shift_response[0].shift_no,
          })
          this.service.first_page_loading().subscribe(res => {
            this.first_loading = res;
            this.login.patchValue({
              date : [this.first_loading['from_date'],this.first_loading['to_date']]
            })
            // this.minDate = this.first_loading['from_date']
            // this.maxDate = this.first_loading['to_date']
            this.logintest('true');
          })
        })
    
    })
  
     

    this.service.machine_get().subscribe(res => {
      this.machine_get = res;
      this.test.patchValue({
        machine_name: this.machine_response[0],
      })
      this.service.shift_get().subscribe(res => {
        this.select_shift = res;
        this.test.patchValue({
          shift_num: this.select_shift[0].shift_no,
        })
        this.service.right_first_page_loading().subscribe(res => {
          this.first_pge_loading = res;
          this.test.patchValue({
            date : [this.first_pge_loading['from_date'],this.first_pge_loading['to_date']]
          })
          // this.minDate = this.first_loading['from_date']
          // this.maxDate = this.first_loading['to_date']
          this.testfunction('true');
        })
      })
  
  })
  
      
      this.test = this.fb.group({
        machine_name:["",],
        shift_num:["",],
        date:["",],
      })    
    
  }


  logintest(s){
    this.status=s;

    this.myLoader = true;
    this.maxDate = this.datePipe.transform(this.maxDate);
    
    let register = this.login.value;
    if(this.status == 'true'){
      this.new_date = new DatePipe('en-US').transform(this.login.value.date[0], 'MM/dd/yyyy');
      this.new_date1 = new DatePipe('en-US').transform(this.login.value.date[1], 'MM/dd/yyyy');

      let register={
        "machine_name":this.login.value.machine_name,
        "shift_num":this.login.value.shift_num,
        "date":this.new_date + '-' + this.new_date1
      }
      this.service.overall_compare(register).subscribe(res =>{
      this.myLoader = false;
      this.first = res.table;
      this.get_report = res;
      this.utili1 = res.run_time;
      this.utili2 = res.idle_time;
      this.utili3 = res.disconnect_time;

   
      Highcharts.chart('comparepie', {
        chart: {
          plotBackgroundColor: null,                                
          plotBorderWidth: 0,
          plotShadow: false,
          backgroundColor: '#212226',
          spacingBottom: 0,
          spacingTop: 0,
          spacingRight: 0,
          spacingLeft: 0,
          margin: 0,
          height: '100%',
  
        },
        navigation: {
          buttonOptions: {
            theme: {
              'stroke-width': 1,
              stroke: null,
              fill: '#0b0b0b',
              r: 0,
              states: {
                hover: {
                  fill: '#1a1919'
                },
                select: {
                  fill: '#1a1919'
                }
              }
            }
          }
        },
        title: {
          text: '',
  
          align: 'center',
          verticalAlign: 'middle',
          style: {
            fontSize: '14px',
            color: 'white'
          }
        },
        tooltip: {
          pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        accessibility: {
          point: {
            valueSuffix: '%'
          }
        },
        credits: {
          enabled: false
        },
        plotOptions: {
          pie: {
            colors: [
              '#5D5D5D',
              '#E8BE15',
              '#207A24',
            ],
            dataLabels: {
              enabled: true,
              distance: -50,
              style: {
                fontWeight: 'bold',
                color: 'white'
              }
            },
  
            size: '100%'
          }
        },
        series: [{
          type: 'pie',
          borderWidth: 0,
  
          innerSize: '60%',
          data: [
            ['Disconnect',res.disconnect_time],

            ['Idle',res.idle_time],
            ['Run',res.run_time],

          ]
        }]
  
      });
    })
    }
    
   
  }

  testfunction(e){
    this.status=e;
    this.myLoader1 = true;
    let value = this.test.value;
    if(this.status == 'true'){
      this.new_date2 = new DatePipe('en-US').transform(this.test.value.date[0], 'MM/dd/yyyy');
      this.new_date3 = new DatePipe('en-US').transform(this.test.value.date[1], 'MM/dd/yyyy');


      let value={
        "machine_name":this.test.value.machine_name,
        "shift_num":this.test.value.shift_num,
        "date":this.new_date2 + '-' + this.new_date3
      }
  
    this.service.compare_chart(value).subscribe(res=>{
      this.myLoader1 = false;
      this.second = res.table;
      this.report_table = res;
      this.secidle = res.idle_time;
      this.secdis = res.disconnect_time;
      this.secrun = res.run_time;
      Highcharts.chart('comparepie2', {
        chart: {
          plotBackgroundColor: null,
          plotBorderWidth: 0,
          plotShadow: false,
          backgroundColor: '#212226',
          spacingBottom: 0,
          spacingTop: 0,
          spacingRight: 0,
          spacingLeft: 0,
          margin: 0,
          height: '100%',
        },
        navigation: {
          buttonOptions: {
            theme: {
              'stroke-width': 1,
              stroke: null,
              fill: '#0b0b0b',
              r: 0,
              states: {
                hover: {
                  fill: '#1a1919'
                },
                select: {
                  fill: '#1a1919'
                }
              }
            }
          }
        },
        title: {
          text: '',
          align: 'center',
          verticalAlign: 'middle',
          style: {
            fontSize: '14px',
            color: 'white'
          }
        },
        tooltip: {
          pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        accessibility: {
          point: {
            valueSuffix: '%'
          }
        },
        credits: {
          enabled: false
        },
        plotOptions: {
          pie: {
            colors: [
              '#5D5D5D',
              '#E8BE15',
              '#207A24',
            ],
            dataLabels: {
              enabled: true,
              distance: -50,
              style: {
                fontWeight: 'bold',
                color: 'white'
              }
            },
  
            size: '100%'
          }
        },
        series: [{
          type: 'pie',
          borderWidth: 0,
  
          innerSize: '60%',
          data: [
            ['Disconnect',res.disconnect_time],

            ['Idle',res.idle_time],
            ['Run',res.run_time],
            
          ]
        }]
  
      });
    })
  }
  else{
     
    this.service.compare_chart(value).subscribe(res =>{
      this.myLoader = false;

      this.report_table = res;
      Highcharts.chart('comparepie2', {
        chart: {
          plotBackgroundColor: null,
          plotBorderWidth: 0,
          plotShadow: false,
          backgroundColor: '#0b0b0b',
          spacingBottom: 0,
          spacingTop: 0,
          spacingRight: 0,
          spacingLeft: 0,
          margin: 0,
          height: '100%',
        },
        navigation: {
          buttonOptions: {
            theme: {
              'stroke-width': 1,
              stroke: null,
              fill: '#0b0b0b',
              r: 0,
              states: {
                hover: {
                  fill: '#1a1919'
                },
                select: {
                  fill: '#1a1919'
                }
              }
            }
          }
        },
        title: {
          text: '',
          align: 'center',
          verticalAlign: 'middle',
          style: {
            fontSize: '14px',
            color: 'white'
          }
        },
        tooltip: {
          pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        accessibility: {
          point: {
            valueSuffix: '%'
          }
        },
        credits: {
          enabled: false
        },
        plotOptions: {
          pie: {
            colors: [
              '#5D5D5D',
              '#E8BE15',
              '#207A24',
            ],
            dataLabels: {
              enabled: true,
              distance: -50,
              style: {
                fontWeight: 'bold',
                color: 'white'
              }
            },
  
            size: '100%'
          }
        },
        series: [{
          type: 'pie',
          borderWidth: 0,
  
          innerSize: '60%',
          data: [
            ['Disconnect',res.disconnect_time],

            ['Idle',res.idle_time],
            ['Run',res.run_time],
            
  //         ]
  //       }]
  
  //     });
  //   })
  // }
  
]
}]

});
}) 
}

}
};

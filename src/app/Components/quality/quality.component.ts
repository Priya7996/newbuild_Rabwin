import { Component, OnInit,Inject } from '@angular/core';
import { NavbarService } from '../../Nav/navbar.service';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-quality',
  templateUrl: './quality.component.html',
  styleUrls: ['./quality.component.scss']
})
export class QualityComponent implements OnInit {
  login: FormGroup;
  daterangepicker:any;

  public today: Date = new Date(new Date().toDateString());
  public weekStart: Date = new Date(new Date(new Date().setDate(new Date().getDate() - (new Date().getDay() + 7) % 7)).toDateString());
  public weekEnd: Date = new Date(new Date(new Date().setDate(new Date(new Date().setDate((new Date().getDate()
    - (new Date().getDay() + 7) % 7))).getDate() + 6)).toDateString())
    ;
  public monthStart: Date = new Date(new Date(new Date().setDate(1)).toDateString());
  public monthEnd: Date = this.today;
  public lastStart: Date = new Date(new Date(new Date(new Date().setMonth(new Date().getMonth() - 1)).setDate(1)).toDateString());
  public lastEnd: Date = this.today;
  public yearStart: Date = new Date(new Date(new Date().setDate(new Date().getDate() - 365)).toDateString());
  public yearEnd: Date = this.today;
  public currentYear: number = this.today.getFullYear();
  public currentMonth: number = this.today.getMonth();
  public maxDate: Object = new Date();
  public minDate: Object = new Date(new Date().setMonth(new Date().getMonth() - 1));
  constructor(public dialog: MatDialog,private nav: NavbarService, private fb: FormBuilder,) {
    this.nav.show()
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(Add, {
      width: '500px',
      data: { new: 'new' }
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }

  openDialog2(): void {
    const dialogRef = this.dialog.open(Edit, {
      width: '500px',
      data: { new: 'new' }
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }


  openDialog3(): void {
    const dialogRef = this.dialog.open(Sedit, {
      width: '500px',
      data: { new: 'new' }
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }

  openDialog4(): void {
    const dialogRef = this.dialog.open(Sadd, {
      width: '500px',
      data: { new: 'new' }
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }
  ngOnInit() {

    this.login = this.fb.group({
      machine_line:["",Validators.required],
      shift:["",Validators.required],

      date:["",Validators.required],

    })
  }

  logintest(val){
    console.log(val);
  }

}


@Component({
  selector: 'add-page',
  templateUrl: 'add.html',
  styleUrls: ['./quality.component.scss']


})
export class Add {
  


  constructor(public dialogRef: MatDialogRef<Add>, @Inject(MAT_DIALOG_DATA) public data: Add, private fb: FormBuilder,) {
  }

 

  ngOnInit() {
    
  }
 

  }


  @Component({
    selector: 'edit-page',
    templateUrl: 'edit.html',
    styleUrls: ['./quality.component.scss']
  
  
  })
  export class Edit {
    
  
  
    constructor(public dialogRef: MatDialogRef<Edit>, @Inject(MAT_DIALOG_DATA) public data: Edit, private fb: FormBuilder,) {
    }
  
   
  
    ngOnInit() {
      
    }
   
  
    }
    @Component({
      selector: 'sedit-page',
      templateUrl: 'sedit.html',
      styleUrls: ['./quality.component.scss']
    
    
    })
    export class Sedit {
      
    
    
      constructor(public dialogRef: MatDialogRef<Sedit>, @Inject(MAT_DIALOG_DATA) public data: Sedit, private fb: FormBuilder,) {
      }
    
     
    
      ngOnInit() {
        
      }
     
    
      }

      @Component({
        selector: 'sadd-page',
        templateUrl: 'sadd.html',
        styleUrls: ['./quality.component.scss']
      
      
      })
      export class Sadd {
        
      
      
        constructor(public dialogRef: MatDialogRef<Sadd>, @Inject(MAT_DIALOG_DATA) public data: Sadd, private fb: FormBuilder,) {
        }
      
       
      
        ngOnInit() {
          
        }
       
      
        }
    
    
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //string interpolation
  title:string= 'this is the title of the parent component';//normal varaible
j: any;
  test(){
    return 'hello';//function type 
  }
  a=1+2;//expression
  image:string="./assets/image_2.jpg"//image tag
  cssa:string='head'//css file

  //class binding
  isactive:boolean=true;

  grayinactive:boolean=true;

  applyc1:boolean=true;

  //style binding
  myprop:object={
    color:'red',
    bgcolor:'grey',
    border:'5px solid green'
  }

  //EventBinding
  counter:number=0
  name:string='xyz';
  increment()
  {
    this.counter+=1;
  }
  decrement()
  {
    this.counter-=1;
  }
  display(a:any)
  {
    console.log(a);
    console.log(a.target);
    console.log(a.target.value);
    this.name=a.target.value;
  }
  city="nuzvid";
  editname()
  {
    this.city="srikakulam";
  }
  ctitle="Hello this is parent class it is used in header and communicationg from parent to child"
  data1="hello this input decorator data 1";
  data2=[10,20,30,40,50];
  data3="hello this input decorator data 3";
  data4=[100,200,300,400,500];

  data5=["Narayana","Murali","Anand","Anjith","Dileep","Ram","Gandhi","Varma"];
  data6=["Narayana","Murali","Anand","Anjith","Dileep","Ram","Gandhi","Varma"];
  data7=[
    {id:'N180700',
    name:'Kusanarayanarao',
    age:20,
    branch:'cse'
  },
  {
    id:'N180672',
    name:'Anjithkumartaddi',
    age:20,
    branch:'ece'
  },
  {
    id:'N180676',
    name:'anand',
    age:22,
    branch:'mech'
  }
  ]
  num1:number=12;
  num2:number=13;
  op:string='';
}

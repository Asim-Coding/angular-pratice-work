import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  name1  = 'asim baloch'
  getname(){
    return this.name1
  }
  obj = {
    name: 'ali',
    age : 22
  };
  arr = ['ali','ahmed','raja'];
  a= 10;
  b =20;
  siteurl = window.location.href;
  yourname ='Munsif'
  getmyname(name){
    console.log(name);
  }
  eventfunc(evt){
    console.warn(evt);
  }
  msin(my){
    console.log("mouse in")
  }
  misout(out){
    console.log("mouse out")
  }
}


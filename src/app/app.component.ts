import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  persona = 'Paolo';

  allowNewServer = false;

  constructor() { 
    setTimeout(() =>{  
      this.allowNewServer = true;  
    }, 5000);  
  }  

  clickButton(){
    alert('ciao');
    false;
    this.allowNewServer = !this.allowNewServer;
  }
  
  ngOnInit() {  
  }
}
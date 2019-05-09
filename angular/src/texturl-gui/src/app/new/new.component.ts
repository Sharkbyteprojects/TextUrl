import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  work(titel:string, message:string){
     ///../new/query

     var requests = new XMLHttpRequest();
    requests.open("GET", "../new/query?title=" + titel + "&message=" + message);
    requests.addEventListener('load', function(event) {
      document.getElementById("changet").innerHTML = `<br><h2>ID:</h2><p>${requests.responseText}</p>`;
    });
    requests.send();
  }
}

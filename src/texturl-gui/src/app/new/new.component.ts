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
     const urlis:string= document.location.origin;
     var requests = new XMLHttpRequest();
    requests.open("GET", "../new/query?title=" + titel + "&message=" + message);
    requests.addEventListener('load', function(event) {
      document.getElementById("changet").innerHTML = `<br><h2>ID:</h2><p>${requests.responseText}</p><h2>LINK:</h2><p><a href="${urlis}/ang/show?get=${requests.responseText}">${urlis}/ang/show?get=${requests.responseText}</a></p>`;
      document.getElementById("form").innerHTML = `<!--DOCS-->`;
    });
    requests.send();
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
  constructor() { }
  ngOnInit() {
  }
  get(id:number){
    function sys(string: string){
      var a = string;
      var b;
      var num = a.length;
      while(num !== 0){
        b = a.replace("<", "&lt;").replace(">", "&gt;");
        a = b;
        num--;
      }
      return a;
  }
    var requests = new XMLHttpRequest();
    requests.open("GET", "../userdef/seperate/" + id);
    requests.addEventListener('load', function(event) {
      //requests.responseText
      var arr = requests.responseText.split("--|||||||||--");

      document.getElementById("changeh").innerHTML = "<code>" + sys(arr[0]) + "</code>";
      document.getElementById("changet").innerHTML = "<code>" + sys(arr[1]) + "</code>";
    });
    requests.send();
  }
  delete(id:number){

    var requests = new XMLHttpRequest();
    requests.open("GET", "../delete/" + id);
    requests.addEventListener('load', function(event) {
      document.getElementById("changeh").innerHTML = "<code>"+ id +" Removed!</code>";
      document.getElementById("changet").innerHTML = "";
     });
    requests.send();
  }

}

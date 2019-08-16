import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
  constructor(private route: ActivatedRoute) {
   }
  ngOnInit() {
    var id:number;
    this.route.queryParams.subscribe((params)=>{
      const query = decodeURI(params['get']||'');
      if(query != ''){
      const nulmb = parseInt(query, 10);
      this.get(nulmb);
      id=nulmb;
      }
    });
    this.route.queryParams.subscribe((paramss)=>{
      const querys = decodeURI(paramss['delete']||"false");
      if(querys == 'true'){
        this.delete(id);
      }
    })
  }
  load(id:number){
    document.location.search="?get="+id;
  }
  rmove(){
    document.location.search=document.location.search+"&delete=true";
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

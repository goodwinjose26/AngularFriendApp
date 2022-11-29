import { Component } from '@angular/core';

@Component({
  selector: 'app-searchfriend',
  templateUrl: './searchfriend.component.html',
  styleUrls: ['./searchfriend.component.css']
})
export class SearchfriendComponent {
  name=""
  

  searchValues =()=>
  {
    let data:any={"name":this.name}
console.log(data)
  }

}

import { Component, OnInit } from '@angular/core';
import { WasayService } from './wasay.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  _data : any = '';

  constructor(private _service: WasayService){}

  ngOnInit(){
    this._service.getUsers().subscribe((data)=>{
      this._data = data.body;
      console.log(this._data);
    })
  }

}

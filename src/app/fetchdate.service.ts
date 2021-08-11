import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FetchdateService {

  constructor() { }

  getData(){
    var data = new Date();
    console.log(data);
    return data;
  }
}

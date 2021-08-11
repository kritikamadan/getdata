import { Component } from '@angular/core';
import { FetchdateService } from './fetchdate.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  todatdate : any ;

  constructor(private fd : FetchdateService){}
  ngOnInit(): void {
    this.todatdate = this.fd.getData();

  }

}

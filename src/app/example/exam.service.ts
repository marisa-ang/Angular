import { Component } from '@angular/core';
import { falsService } from './some-path';

@Component ({
  selector: 'app-root', 
  templateUrl: './app.component.html', 
  styleUrls: ['./app.component.css'], 
  providers: [falsService]
})
export class AppComponent {
  constructor(private fals: falsService) { }
  funcDemo(qty) {
    this.fals.falsPoster(qty);
  }
}

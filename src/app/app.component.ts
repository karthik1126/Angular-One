import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myapp = 'Angular-One By Karthik!!';

  selectedFeature:string = null;

  navigateToRightComponent(selectedFeature : string) {
    console.log(" ====== " + selectedFeature);
    this.selectedFeature = selectedFeature;
  }
}

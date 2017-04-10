import {
  Component,
  NgModule
} from '@angular/core';

import {
  BrowserModule
} from '@angular/platform-browser';

import {
  AgmCoreModule
} from 'angular2-google-maps/core';


@Component({
  selector: 'app-root',
   templateUrl: 'app.component.html',
   styleUrls: ['app.component.css'],
   
  
//   template: `
  
// `
})
export class App {
  // google maps zoom level
  zoom: number = 8;
  
  // initial center position for the map
  lat: number = 52.673858;
  lng: number = 4.815982;
  
  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`)
  }

  
  markerDragEnd(m: marker, $event: MouseEvent) {
    console.log('dragEnd', m, $event);
  }
  
  markers: marker[] = [
	  {
		  lat: 52.673858,
		  lng: 4.815982,
	  },
	  {
		  lat: 52.373858,
		  lng: 4.215982,
	  },
	  {
		  lat: 52.723858,
		  lng: 4.895982,
	  }
  ]
}
// just an interface for type safety.
interface marker {
	lat: number;
	lng: number;
}

@NgModule({
  imports: [ BrowserModule, AgmCoreModule.forRoot() ],
  declarations: [ App ],
  bootstrap: [ App ]
})
export class AppModule {}



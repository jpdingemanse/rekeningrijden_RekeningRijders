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
  
  template: `
    <sebm-google-map 
      [latitude]="lat"
      [longitude]="lng"
      [zoom]="zoom"
      [disableDefaultUI]="false"
      [zoomControl]="false"
      (mapClick)="mapClicked($event)">

      <sebm-google-map-polyline>
        
           <sebm-google-map-polyline-point
           *ngFor="let m of markers; let i = index"
          [latitude]="m.lat"
          [longitude]="m.lng">
           </sebm-google-map-polyline-point>
        </sebm-google-map-polyline>
      
     

    </sebm-google-map>
`})
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

// import { Component } from '@angular/core';
// import { SebmGoogleMap, SebmGoogleMapPolygon, SebmGoogleMapPolylinePoint,  LatLngLiteral } from 'angular2-google-maps/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: 'app.component.html',
//   styleUrls: ['app.component.css'],
//   template: `
//     <sebm-google-map 
//       [latitude]="lat"
//       [longitude]="lng"
//       [zoom]="zoom"
//       [disableDefaultUI]="false"
//       [zoomControl]="false"
//       (mapClick)="mapClicked($event)">
    
//       <sebm-google-map-marker 
//           *ngFor="let m of markers; let i = index"
//           (markerClick)="clickedMarker(m.label, i)"
//           [latitude]="m.lat"
//           [longitude]="m.lng"
//           [label]="m.label"
//           [markerDraggable]="m.draggable"
//           (dragEnd)="markerDragEnd(m, $event)">
          
//         <sebm-google-map-info-window>
//           <strong>InfoWindow content</strong>
//         </sebm-google-map-info-window>
        
//       </sebm-google-map-marker>
      
//       <sebm-google-map-circle [latitude]="lat + 0.3" [longitude]="lng" 
//           [radius]="5000"
//           [fillColor]="'red'"
//           [circleDraggable]="true"
//           [editable]="true">
//       </sebm-google-map-circle>

//     </sebm-google-map>
// `
// })
// export class AppComponent {
//   // lat: number = 52.3702;
//   // lng: number = 4.8952;
//   // lats = ['52.3712', '52.3722', '52.3732', '52.3742'];
//   // longs = ['4.8962', '4.8972', '4.8932', '4.8992'];
//   markers: marker[] = [
// 	  {
// 		  lat: 51.673858,
// 		  lng: 7.815982,
// 	  },
// 	  {
// 		  lat: 51.373858,
// 		  lng: 7.215982,
// 	  },
// 	  {
// 		  lat: 51.723858,
// 		  lng: 7.895982,
// 	  }
//   ]
// }
// // just an interface for type safety.
// interface marker {
// 	lat: number;
// 	lng: number;
// }

//EXAMPLE TO USE A LIST WITH LATS AND LONGS
// export class MyMapCmp {
//   lat: number = 0;
//   lng: number = 0;
//   zoom: number = 10;
//   paths: Array<LatLngLiteral> = [
//     { lat: 0,  lng: 10 },
//     { lat: 0,  lng: 20 },
//     { lat: 10, lng: 20 },
//     { lat: 10, lng: 10 },
//     { lat: 0,  lng: 10 }
//   ]
//   // Nesting paths will create a hole where they overlap;
//   nestedPaths: Array<Array<LatLngLiteral>> = [[
//     { lat: 0,  lng: 10 },
//     { lat: 0,  lng: 20 },
//     { lat: 10, lng: 20 },
//     { lat: 10, lng: 10 },
//     { lat: 0,  lng: 10 }
//   ], [
//     { lat: 0, lng: 15 },
//     { lat: 0, lng: 20 },
//     { lat: 5, lng: 20 },
//     { lat: 5, lng: 15 },
//     { lat: 0, lng: 15 }
//   ]]
// }

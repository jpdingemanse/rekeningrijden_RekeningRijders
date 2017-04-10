import {
  Component,
  NgModule,
  OnInit 
} from '@angular/core';

import { MovementService } from './../rest/movement.Service';
import { Movement } from './../domain/movement';

@Component({
  selector: 'route-page',
  templateUrl: './route.html',
  styleUrls: ['./../app.component.css']
    
//   template: `
  
// `
})
export class RoutePageComponent implements OnInit {
   movementList : Movement[];
    selectedMovement : Movement;
        ngOnInit(): void {
            this.movementService.getAllMovements()
                            .then(value => this.movementList = value)
                            .then(() => console.log(this.movementList))
        }

    constructor(private movementService : MovementService){}

}

import {
  BrowserModule
} from '@angular/platform-browser';

import {
  AgmCoreModule
} from 'angular2-google-maps/core';





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

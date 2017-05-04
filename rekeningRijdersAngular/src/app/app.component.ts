import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { DatePickerOptions, DateModel } from 'ng2-datepicker';
import { LoginService } from 'app/global/login.Service'
 
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent {
  date: DateModel;
  options: DatePickerOptions;
 
  // constructor() {
  //   this.options = new DatePickerOptions();
    
  // }
  constructor(private loginService : LoginService){}
}
//

// @Component({
//    selector: 'app-root',
//     templateUrl: 'app.component.html',
//     styleUrls: ['app.component.css'],
//   })
// export class App {
//   // google maps zoom level
//   zoom: number = 10;
  
//   // initial center position for the map
//   lat: number = 51.562959;
//   lng: number =  5.065212;
  
//   clickedMarker(label: string, index: number) {
//     console.log(`clicked the marker: ${label || index}`)
//   }
  
 
  
//   markerDragEnd(m: marker, $event: MouseEvent) {
//     console.log('dragEnd', m, $event);
//   }
  
//  markers: marker[] = [
// 	  // {
// 		//   lat: 52.673858,
// 		//   lng: 4.815982,
// 	  // },
// 	  // {
// 		//   lat: 52.373858,
// 		//   lng: 4.215982,
// 	  // },
//     { lat: 51.562959, lng: 5.065212,  },
// { lat: 51.561838, lng: 5.07328,  },
// { lat: 51.560718, lng: 5.081348,  },
// { lat: 51.560077, lng: 5.089803,  },
// { lat: 51.560718, lng: 5.099287,  },
// { lat: 51.562559, lng: 5.110488,  },
// { lat: 51.565333, lng: 5.121346,  },
// { lat: 51.567947, lng: 5.132203,  }, 
// { lat: 51.570535, lng: 5.143318,  },
// { lat: 51.573122, lng: 5.154433,  },
// { lat: 51.575709, lng: 5.165548,  },
// { lat: 51.576736, lng: 5.170441,  },
// { lat: 51.577376, lng: 5.173724,  },
// { lat: 51.578323, lng: 5.17765,  },
// { lat: 51.579296, lng: 5.181599,  },
// { lat: 51.58027, lng: 5.185568,  },
// { lat: 51.58123, lng: 5.18971,  },
// { lat: 51.58219, lng: 5.193851,  },
// { lat: 51.58315, lng: 5.197992,  },
// { lat: 51.58411, lng: 5.202305,  },
// { lat: 51.58495, lng: 5.207305,  },
// { lat: 51.58535, lng: 5.212305,  },
// { lat: 51.58567, lng: 5.217884,  },
// { lat: 51.58591, lng: 5.223527,  },
// { lat: 51.586137, lng: 5.229213,  },
// { lat: 51.586363, lng: 5.2349,  },
// { lat: 51.586596, lng: 5.240575,  },
// { lat: 51.58675, lng: 5.243407,  },
// { lat: 51.586916, lng: 5.246412,  },
// { lat: 51.587056, lng: 5.249512,  },
// { lat: 51.587196, lng: 5.252742,  },
// { lat: 51.587336, lng: 5.255971,  },
// { lat: 51.587476, lng: 5.2592,  },
// { lat: 51.587616, lng: 5.262435,  },
// { lat: 51.587686, lng: 5.264055,  },
// { lat: 51.587756, lng: 5.265673,  },
// { lat: 51.587791, lng: 5.26648,  },
// { lat: 51.587826, lng: 5.267287,  },
// { lat: 51.58789, lng: 5.26877,  },
// { lat: 51.587993, lng: 5.271131,  },
// { lat: 51.588096, lng: 5.273491,  },
// { lat: 51.5882, lng: 5.275851,  },
// { lat: 51.588303, lng: 5.278212,  },
// { lat: 51.588406, lng: 5.280575,  },
// { lat: 51.588458, lng: 5.281758,  },
// { lat: 51.58851, lng: 5.282941,  },
// { lat: 51.588561, lng: 5.284123,  },
// { lat: 51.588613, lng: 5.285306,  },
// { lat: 51.588665, lng: 5.286489,  },
// { lat: 51.588716, lng: 5.287672,  },
// { lat: 51.588768, lng: 5.288853,  },
// { lat: 51.588794, lng: 5.289444,  },
// { lat: 51.58882, lng: 5.290373,  },
// { lat: 51.588966, lng: 5.293157,  },
// { lat: 51.589443, lng: 5.305667,  },
// { lat: 51.588883, lng: 5.310774,  },
// { lat: 51.58667, lng: 5.315366,  },
// { lat: 51.582883, lng: 5.321503,  },
// { lat: 51.57947, lng: 5.325708,  },
// { lat: 51.572749, lng: 5.331116,  },
// { lat: 51.564853, lng: 5.338755,  },
// { lat: 51.498698, lng: 5.400124,  },
// { lat: 51.483521, lng: 5.4142,  },
// { lat: 51.45144, lng: 5.455055,  },
// { lat: 51.447695, lng: 5.460806,  },
// { lat: 51.443255, lng: 5.467072,  },
// { lat: 51.442185, lng: 5.47102,  },
// { lat: 51.442185, lng: 5.475826,  },
// { lat: 51.443041, lng: 5.481577,  },
// 	  // {
// 		//   lat: 52.723858,
// 		//   lng: 4.895982,
// 	  // }
//   ]

// }
// // just an interface for type safety.
// interface marker {
// 	lat: number;
// 	lng: number;
// }

// @NgModule({
//   imports: [ BrowserModule, AgmCoreModule.forRoot() ],
//   declarations: [ App ],
//   bootstrap: [ App ]
// })
// export class AppModule {}
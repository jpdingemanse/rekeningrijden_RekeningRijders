import {
  Component,
  NgModule
} from '@angular/core';

import {
  BrowserModule
} from '@angular/platform-browser';
import * as moment from 'moment';
import {
  AgmCoreModule
} from 'angular2-google-maps/core';



import { TranslateService } from './../translate';
import { DatePickerOptions, DateModel } from 'ng2-datepicker';

import { Beacon } from "app/domain/beacon";
import { Vehicle } from "app/domain/vehicle";
import { Driver } from "app/domain/driver";
import { BeaconService } from "app/rest/beacon.Service";
import { VehicleService } from "app/rest/vehicle.Service";
import { DriverService } from "app/rest/driver.Service";
import { LoginService } from 'app/global/login.Service'

@Component({
  selector: 'app-root',
  templateUrl: '../app.component.html'
})
export class AppComponent {
  date: DateModel;
  options: DatePickerOptions;

  constructor() {
    this.options = new DatePickerOptions();

  }
}


@Component({
  selector: 'route-page',
  templateUrl: 'route.html',
  styleUrls: ['../app.component.css'],
})
export class RoutePageComponent {
  // google maps zoom level
  zoom: number = 10;

  // initial center position for the map
  lat: number = 51.562959;
  lng: number = 5.065212;


  public translatedText: string;
  public supportedLanguages: any[];


  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`)
  }
  vehicleList: Vehicle[];
  kentekenList: String[];


  //TODO set driver from logged in user
  tempLat: number

  tempLong: number
  driver: Driver;
  currentLicencePlate: string
  currentSelectedDate: string
  currentSelectedVanDate: string
  currentSelectedTotDate: string
  allMovementsList: Beacon[];
  allMovementsPeriodList: Beacon[];
  selectedVehicle: Vehicle
  dateErrorMessage: string
  nothingErrorMessage: string
  nothingPeriodErrorMessage: string
  regio: string
  afstand: string
  //TODO SET DATE FROM datepicker
  selectedDate: Date = new Date();

  selectedMovement: Beacon;
  ngOnInit(): void {
    this.tempLat = 0
    this.tempLong = 0
    //this.currentSelectedDate = new Date().toDateString();
    // this.currentSelectedDate = moment(new Date()).format("DD-MM-YYYY").toString();
    // this.currentSelectedVanDate = moment(new Date()).format("DD-MM-YYYY").toString();
    // this.currentSelectedTotDate = moment(new Date()).format("DD-MM-YYYY").toString();
    if (this.driver != null) {
      this.vehicleService.getVehicleById(this.driver.id)
        .then(value => this.vehicleList = value)
        .then(() => this.selectedVehicle = this.vehicleList[0])
        .then(() => this.onChangeLicensePlate(this.selectedVehicle))


    } else {
      console.log("driver is null")
    }





  }

  constructor(private movementService: BeaconService, private vehicleService: VehicleService, private driverService: DriverService, private loginService: LoginService) {
    this.driver = this.loginService.loginUser;
  }

  onChangeLicensePlate(newObj) {
    this.selectedVehicle = newObj;
    this.currentLicencePlate = this.selectedVehicle.licensePlate
    this.movementService.GetMovementsPerIcan(this.selectedVehicle.iCan, this.currentSelectedDate)
      .then(result => {
        if (result.length != 0) {
          this.nothingErrorMessage = " "
          this.allMovementsList = result

          console.log(this.allMovementsList)
        } else {
          this.nothingErrorMessage = "Niets gevonden voor dit filter"
          this.allMovementsList = []
        }
      })


  }

  datechange(newValue) {
    this.currentSelectedDate = newValue;
    this.onChangeLicensePlate(this.selectedVehicle)
  }
  vandatechange(newValue) {
    this.currentSelectedVanDate = newValue;
    this.onclickCalculate()
  }
  totdatechange(newValue) {
    this.currentSelectedTotDate = newValue;
    this.onclickCalculate()
  }

  onclickCalculate() {
    console.log("calculating...")
    var d1 = Date.parse(this.currentSelectedVanDate);
    var d2 = Date.parse(this.currentSelectedTotDate);
  
    if (d1 > d2 || isNaN(d1) || isNaN(d2)) {
     this.nothingPeriodErrorMessage = "Kan deze datums niet uitrekenen"
    } else {
      this.nothingPeriodErrorMessage = ""
    
    this.movementService.GetMovementsPerPeriod(this.selectedVehicle.iCan, this.currentSelectedVanDate, this.currentSelectedTotDate)
      
       .then(result => {
         console.log(result)
         this.afstand = result
         if (this.afstand == 'null'){
           this.afstand = '0.0'
         }
         if (this.afstand == null){
           this.afstand = '0.0'
         }
         
       })
      //   if (result.length != 0) {
      //     this.nothingErrorMessage = " "
      //     this.allMovementsPeriodList = result

      //     console.log(this.allMovementsPeriodList)


      //     this.allMovementsPeriodList.forEach(element => {
      //       if (this.tempLat != 0 && this.tempLong != 0) {
      //         //This function takes in latitude and longitude of two location and returns the distance between them as the crow flies (in km)
      //         var R = 6371; // km
      //         var dLat = toRad(this.tempLat - element.lat);
      //         var dLon = toRad(this.tempLong - element.lng);
      //         var lat1 = toRad(element.lat);
      //         var lat2 = toRad(this.tempLat);

      //         var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      //           Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
      //         var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      //         var d = R * c;

      //         this.afstand = this.afstand + d;

      //         this.tempLat = element.lat
      //         this.tempLong = element.lng
      //       } else {
      //         this.tempLat = element.lat
      //         this.tempLong = element.lng
      //       }
      //     });
        // } else {
        //   this.nothingPeriodErrorMessage = "nothing found for this filter"
        // }
      //})
      }
  }

  markerDragEnd(m: marker, $event: MouseEvent) {
    console.log('dragEnd', m, $event);

  }

  markers: marker[] = [

    { lat: 51.562959, lng: 5.065212, }

  ]

}
// just an interface for type safety.
interface marker {
  lat: number;
  lng: number;
}
// Converts numeric degrees to radians
function toRad(Value) {
  return Value * Math.PI / 180;
}


@NgModule({
  imports: [BrowserModule, AgmCoreModule.forRoot()],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
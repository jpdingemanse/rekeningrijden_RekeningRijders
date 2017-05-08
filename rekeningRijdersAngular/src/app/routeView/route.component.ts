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



  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`)
  }
  vehicleList: Vehicle[];
  kentekenList: String[];


  //TODO set driver from logged in user
  driver : Driver;
  currentLicencePlate: string
  currentSelectedDate: string
  currentSelectedVanDate: string
  currentSelectedTotDate: string
  allMovementsList: Beacon[];
  selectedVehicle: Vehicle
  dateErrorMessage: string
  nothingErrorMessage: string
  //TODO SET DATE FROM datepicker
  selectedDate: Date = new Date();

  selectedMovement: Beacon;
  ngOnInit(): void {

    //this.currentSelectedDate = new Date().toDateString();
    this.currentSelectedDate = moment(new Date()).format("DD-MM-YYYY").toString();
    this.currentSelectedVanDate = moment(new Date()).format("DD-MM-YYYY").toString();
    this.currentSelectedTotDate = moment(new Date()).format("DD-MM-YYYY").toString();
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
    this.movementService.GetMovementsPerIcan(this.selectedVehicle.licensePlate, this.currentSelectedDate)
      .then(result => {
        if (result.length != 0) {
          this.nothingErrorMessage =  " "
            this.allMovementsList = result

           console.log(this.allMovementsList)
         } else {
            this.nothingErrorMessage = "nothing found for this filter"
        }
      })


  }

  datechange(newValue) {
    this.currentSelectedDate = newValue;
    this.onChangeLicensePlate(this.selectedVehicle)
  }
  vandatechange(newValue) {
    this.currentSelectedVanDate = newValue;
  }
  totdatechange(newValue) {
    this.currentSelectedTotDate = newValue;
  }

  onclickCalculate(newValue) {
    var d1 = Date.parse(this.currentSelectedVanDate);
    var d2 = Date.parse(this.currentSelectedTotDate);
    if (d1 > d2) {
      this.dateErrorMessage = "Can't calculate this dates"
    } else {
      this.dateErrorMessage = ""
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

@NgModule({
  imports: [BrowserModule, AgmCoreModule.forRoot()],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
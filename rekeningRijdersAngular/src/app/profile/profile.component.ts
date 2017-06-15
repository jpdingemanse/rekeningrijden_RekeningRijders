import { Component, OnInit } from '@angular/core'
import { Driver } from 'app/domain/driver'
import { LoginService } from 'app/global/login.Service'
import { VehicleService } from 'app/rest/vehicle.Service';
import { Vehicle } from 'app/domain/vehicle';
import { Request } from 'app/domain/request'

@Component({
    selector: 'profile-page',
    templateUrl: './profile.html',
    styleUrls: ['./../app.component.css']
})
export class ProfileComponent implements OnInit {

    errorMessage: String;
    vehicle : Vehicle[];
    profile: Driver;
    request : Request;
    allRequest : Request [];

    constructor(private loginService: LoginService, private vehicleService: VehicleService) {
        if (this.loginService.loginUser != null) {
            this.profile = this.loginService.loginUser;
        }
        this.allRequest = new Array;
    }

    ngOnInit(): void {
        this.GetAllVehicle();
        this.getAllRequest();
    }
    getAllRequest(){
        this.vehicleService.getAllRequest(this.profile.id)
                            .then(value => {
                                this.allRequest = value;
                            })
                            .catch(error => { error = "Kan geen verbinding maken met de database" });
    }
    GetAllVehicle(){
        this.vehicleService.getVehicleById(this.profile.id)
                            .then(value => {this.vehicle = value})
                            .catch(error => { error = "Kan geen verbinding maken met de database" });
    }

    onclickNewRequest(value : string){
        if(value == ""){
            this.errorMessage = "Geen waarde ingevuld"
        } else{
        this.request = new Request(0, this.profile.id, value, true);
        this.vehicleService.newRequest(this.request)
                            .then(value => {
                                if(value){
                                    this.allRequest.push(this.request)
                                }else{
                                    this.errorMessage = "Aanvraag kan niet worden voltooid";
                                }
                            })
                            .catch(() => {
                                this.errorMessage = "Er is iets mis gegaan"
                            })
        }

    }

}
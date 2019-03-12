import { Component, OnInit } from '@angular/core';
import { CountriesService } from './countries.service';
import { Country } from './country.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  countries: Country[] = [];

  constructor(private countryService: CountriesService){}
  
  ngOnInit(): void {
    console.log("going ngOnInit");
    console.log( this.getCountries() );
  }

  getCountries(): void {
    console.log("get countries method");
    console.log(this.countryService);
    console.log(this.countryService.getCentralAmericaCountries());


    this.countryService.getCentralAmericaCountries()
      .subscribe(countries => this.countries);
  }
}
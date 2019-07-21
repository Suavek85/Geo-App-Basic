import { Component, OnInit, Input } from '@angular/core';
import { LocationsService } from "../location-block/location-block.service";

@Component({
  selector: 'app-location-home',
  templateUrl: './location-home.component.html',
  styleUrls: ['./location-home.component.css']
})
export class LocationHomeComponent implements OnInit {
  @Input() homeName: any;
  constructor(
    private locationsService: LocationsService,
  ) { }

  ngOnInit() {
  }

}

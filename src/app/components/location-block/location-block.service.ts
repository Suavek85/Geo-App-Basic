import { Subject } from 'rxjs';

export class LocationsService {

    private locations = ['Home'];
    locationsUpdated = new Subject();

    addLocation(locationName: string) {
        this.locations.push(locationName);
        this.locationsUpdated.next();
    }

    getLocations() {
        return [...this.locations];
    }

    deleteLocation(locationName: string) {
       this.locations =  this.locations.filter(l => l !== locationName);
       this.locationsUpdated.next();
    }
}
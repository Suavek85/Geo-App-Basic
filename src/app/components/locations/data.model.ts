export class LocationDataElement {
 
  constructor(public loc: string, public la: number, public lo: number, public address: string, public country: string, public key: string) {
    this.loc = loc;
    this.la = la;
    this.lo = lo;
    this.address = address;
    this.country = country;
    this.key = key;
  }
}


import { AngularFirestore } from "@angular/fire/firestore";

export class ApiService {
  key: any;
  keyAPI: any = this.db
    .collection("bingkey")
    .doc("mYRsUMqj2QR0DE5LPAbl")
    .valueChanges()
    .subscribe(result => (this.key = result));

  constructor(private db: AngularFirestore) {}

  apiURL(input) {
    return `https://dev.virtualearth.net/REST/v1/Locations?query=${input}
        &key=${this.key.key}`;
  }
}

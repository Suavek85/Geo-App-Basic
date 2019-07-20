export class Test {
    loc: string;
    la: number;
    lo: number;
    key: string;
    constructor(loc, la, lo) {
      this.loc = loc;
      this.la = la;
      this.lo = lo;
      this.key = 'AjF525jJkMH_mNXo4Aov0_S_jIAYZubFnMxP3AIg4jMkjaqpWL4Hz9SG6BMDUESC';
    }

    getMap() {
        console.log(
          `<img width="300" src="https://dev.virtualearth.net/REST/V1/Imagery/Map/Road/${
            this.lo
          }%2C${this.la}/13?mapSize=300,300&format=png&key=${
            this.key
          }" alt="Bing Map">`
        );
      }

  }
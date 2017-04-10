export class Beacon {
    constructor(
        public id: number,
        public dateTime: string,
        public ICAN: string,
        public lat: number,
        public lng: number,
        public signature: string,
    ) {

    }
}
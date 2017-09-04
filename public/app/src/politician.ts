export class Politician{
    id:number;
    name:string;
    frauds:number;


    constructor(id: number, name: string, frauds: number) {
        this.id = id;
        this.name = name;
        this.frauds = frauds;
    }
}
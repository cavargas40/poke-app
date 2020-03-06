export class Pokemon {
    public name: string;
    constructor(init?: Pokemon) {
        Object.assign(this, init);
    }
}
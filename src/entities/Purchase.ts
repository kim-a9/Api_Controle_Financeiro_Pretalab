
export class Purchase {

    constructor(
    public date: string,
    public total: number,
    public items: {
        quantity: number,
        name: string,
        price: number,
    }) {}
    

}
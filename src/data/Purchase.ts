import Order from "./Order";

class Purchase {
  private _purchaseDone = false;
  constructor(
    private _id: string,
    private _orders: Order[],
    private _date: Date,
    private _userId: string,
    private _estimatedPrice: number
  ) {}
  public get id() {
    return this._id;
  }
  public set id(id: string) {
    this._id = id;
  }
  public get purchaseDone() {
    return this._purchaseDone;
  }
  public set purchaseDone(purchaseDone: boolean) {
    this._purchaseDone = purchaseDone;
  }
  public get orders() {
    return this._orders;
  }
  public set orders(orders: Order[]) {
    this._orders = orders;
  }
  public get date() {
    return this._date;
  }
  public set date(date: Date) {
    this._date = date;
  }
  public get userId() {
    return this._userId;
  }
  public set userId(userId: string) {
    this._userId = userId;
  }
  public get estimatedPrice() {
    return this._estimatedPrice;
  }
  public set estimatedPrice(estimatedPrice: number) {
    this._estimatedPrice = estimatedPrice;
  }
}

export default Purchase;

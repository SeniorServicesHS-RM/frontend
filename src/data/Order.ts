import Article from "./Article";

class Order {
  constructor(
    private _id: string,
    private _seniorId: string,
    private _articleList: Article[],
    private _date: Date,
    private _additionalServices?: string[],
    private _planDate?: Date,
    private _employeeId?: string,
    private _actualPrice?: number,
    private _estimatedPrice?: number,
    private _signDate?: Date,
    private _signature?: string, //hier muss das Base64-Bild rein
    private _orderDone?: boolean,
    private _editable?: boolean
  ) {
    if (this._orderDone === undefined) {
      this._orderDone = false;
    }
  }
  public get id() {
    return this._id;
  }
  public set id(id: string) {
    this._id = id;
  }
  public get seniorId() {
    return this._seniorId;
  }
  public set seniorId(seniorId: string) {
    this._seniorId = seniorId;
  }
  public get articleList(): Article[] {
    return this._articleList;
  }
  public set articleList(value: Article[]) {
    this._articleList = value;
  }

  public get date() {
    return this._date;
  }

  public set date(date: Date) {
    this._date = date;
  }

  public get additionalServices() {
    return this._additionalServices;
  }

  public set additionalServices(additionalServices: string[]) {
    this._additionalServices = additionalServices;
  }
  public get planDate() {
    return this._planDate;
  }
  public set planDate(date: Date) {
    this._planDate = date;
  }
  public get employeeId() {
    return this._employeeId;
  }
  public set employeeId(id: string) {
    this._employeeId = id;
  }
  public get estimatedPrice(): number {
    return this._estimatedPrice;
  }
  public set estimatedPrice(value: number) {
    this._estimatedPrice = value;
  }
  public get aktualPrice(): number {
    return this._actualPrice;
  }
  public set aktualPrice(value: number) {
    this._actualPrice = value;
  }
  public get signDate(): Date {
    return this._signDate;
  }
  public set signDate(value: Date) {
    this._signDate = value;
  }
  public get signature(): string {
    return this._signature;
  }
  public set signature(value: string) {
    this._signature = value;
  }
  public get orderDone() {
    return this._orderDone;
  }
  public set orderDone(orderDone: boolean) {
    this._orderDone = orderDone;
  }
  public get editable(): boolean {
    return this._editable;
  }
  public set editable(value: boolean) {
    this._editable = value;
  }
}

export default Order;

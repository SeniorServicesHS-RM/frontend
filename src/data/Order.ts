import Article from "./Article";

class Order {
  private _orderDone = false;
  constructor(
    private _id: string,
    private _seniorId: string,
    private _article: Article,
    private _amount: number,
    private _date: Date,
    private _unit?: string,
    private _additionalServices?: string[],
    private _mart?: string,
    private _planDate?: Date,
    private _employeeId?: string
  ) {}
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
  public get orderDone() {
    return this._orderDone;
  }
  public set orderDone(orderDone: boolean) {
    this._orderDone = orderDone;
  }
  public get article() {
    return this._article;
  }

  public set article(article: Article) {
    this._article = article;
  }

  public get amount() {
    return this._amount;
  }

  public set amount(amount: number) {
    this._amount = amount;
  }

  public get date() {
    return this._date;
  }

  public set date(date: Date) {
    this._date = date;
  }

  public get unit() {
    return this._unit;
  }

  public set unit(unit: string) {
    this._unit = unit;
  }

  public get additionalServices() {
    return this._additionalServices;
  }

  public set additionalServices(additionalServices: string[]) {
    this._additionalServices = additionalServices;
  }
  public get mart() {
    return this._mart;
  }
  public set mart(mart: string) {
    this._mart = mart;
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
}

export default Order;

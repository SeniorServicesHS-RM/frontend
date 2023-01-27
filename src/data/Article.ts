class Article {
  constructor(
    private _id: string,
    private _name: string,
    private _amount: number,
    private _mart: string,
    private _done: boolean,
    private _price: number,
    private _note?: string,
    private _picture?: string
  ) {}
  public get id() {
    return this._id;
  }
  public set id(id: string) {
    this._id = id;
  }
  public get name() {
    return this._name;
  }
  public set name(name: string) {
    this._name = name;
  }
  public get amount(): number {
    return this._amount;
  }
  public set amount(value: number) {
    this._amount = value;
  }
  public get mart(): string {
    return this._mart;
  }
  public set mart(value: string) {
    this._mart = value;
  }
  public get done(): boolean {
    return this._done;
  }
  public set done(value: boolean) {
    this._done = value;
  }
  public get note() {
    return this._note;
  }
  public set note(note: string) {
    this._note = note;
  }
  public get price(): number {
    return this._price;
  }
  public set price(value: number) {
    this._price = value;
  }
  public get picture() {
    return this._picture;
  }
  public set picture(picture: string) {
    this._picture = picture;
  }
}

export default Article;

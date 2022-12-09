class Article {
  constructor(
    private _id: string,
    private _name: string,
    private _note?: string,
    private _category?: string,
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
  public get note() {
    return this._note;
  }
  public set note(note: string) {
    this._note = note;
  }
  public get category() {
    return this._category;
  }
  public set category(category: string) {
    this._category = category;
  }
  public get picture() {
    return this._picture;
  }
  public set picture(picture: string) {
    this._picture = picture;
  }
}

export default Article;

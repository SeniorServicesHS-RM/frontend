class User {
  public get plannerId(): string {
    return this._plannerId;
  }
  public set plannerId(value: string) {
    this._plannerId = value;
  }
  public get marts(): string[] {
    return this._marts;
  }
  public set marts(value: string[]) {
    this._marts = value;
  }
  public get available(): boolean {
    return this._available;
  }
  public set available(value: boolean) {
    this._available = value;
  }
  public get seniorId(): string {
    return this._seniorId;
  }
  public set seniorId(value: string) {
    this._seniorId = value;
  }
  public get empID(): string {
    return this._empoyeeId;
  }
  public set empID(value: string) {
    this._empoyeeId = value;
  }
  public get id(): string {
    return this._id;
  }
  public set id(value: string) {
    this._id = value;
  }
  public get role(): number {
    return this._role;
  }
  public set role(value: number) {
    this._role = value;
  }
  public get lastName(): string {
    return this._lastName;
  }
  public set lastName(value: string) {
    this._lastName = value;
  }
  public get firstName(): string {
    return this._firstName;
  }
  public set firstName(value: string) {
    this._firstName = value;
  }
  constructor(
    private _firstName: string,
    private _lastName: string,
    private _id: string,
    private _role: number,
    private _empoyeeId?: string,
    private _seniorId?: string,
    private _plannerId?: string,
    private _available?: boolean,
    private _marts?: string[]
  ) {}
}

export default User;

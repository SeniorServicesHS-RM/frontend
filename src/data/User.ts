class User {
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
    private _role: number
  ) {}
}

export default User;

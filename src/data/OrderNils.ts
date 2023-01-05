class OrderNils {
  private _orderDone = false;
  orderItems = [
    ["Tomaten", "Kilo", 1, false, false],
    ["Äpfel", "", 2, false, false],
    ["Weißbrot / Toast", "von ja", 1, false, false],
    ["Erbsen", "Konservendose Bonduelle", 1, false, false],
  ];

  constructor(
    private _id: string,
    private _seniorId: string,
    private _seniorName: string,
    private_seniorEinrichtung: string,
    private_seniorAppartment: string,
    private _date: Date,
    //TO FIX
    //Array of Artikelbeschreibungen (str_Name, str_Notiz, num_Anzahl, bln_eingeladen=false, bln_nichtVerfügbar, xxx_Foto?) aus Aritkelbestellung übernehmen

    private _addServiceInWohnungTragen: boolean = false,
    private _addServiceAuspacken: boolean = false,

    private _supermarket: string,
    private _employeeId: string //EKH //private _orderSum: number = 0, //TOFIX //Summen der Bestellung verwalten
  ) //private _Gebühr: number as Prozentzahl in Abhängigkeit der Zusatzdienstleistungen, z.B. 10% der Einkaufssumme, +2% für In Wohnung Tragen, +2% für Auspacken
  //private_priceForSenior: number = 0

  {}
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

  public get date() {
    return this._date;
  }

  public set date(date: Date) {
    this._date = date;
  }

  get mart() {
    return this._mart;
  }

  public get employeeId() {
    return this._employeeId;
  }
  public set employeeId(id: string) {
    this._employeeId = id;
  }
}

export default OrderNils;

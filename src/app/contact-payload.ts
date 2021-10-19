export class ContactPayload {

  private _id : number;
  private _full_name : string ;
  private _mobile_number : string ;


  constructor(id: number, full_name: string, mobile_number: string) {
    this._id = id;
    this._full_name = full_name;
    this._mobile_number = mobile_number;
  }


  set id(value: number) {
    this._id = value;
  }

  get id(): number {
    return this._id;
  }

  get full_name(): string {
    return this._full_name;
  }

  get mobile_number(): string {
    return this._mobile_number;
  }


  set full_name(value: string) {
    this._full_name = value;
  }

  set mobile_number(value: string) {
    this._mobile_number = value;
  }
}


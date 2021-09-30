export class ContactPayload {

  private _full_name : string ;
  private _mobile_number : number ;


  constructor(full_name: string, mobile_number: number) {
    this._full_name = full_name;
    this._mobile_number = mobile_number;
  }


  get full_name(): string {
    return this._full_name;
  }

  set full_name(value: string) {
    this._full_name = value;
  }

  get mobile_number(): number {
    return this._mobile_number;
  }

  set mobile_number(value: number) {
    this._mobile_number = value;
  }
}


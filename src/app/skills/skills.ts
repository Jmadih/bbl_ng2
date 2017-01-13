
export class Skills{
    private  _id : string;
    private _img: string;
    private _title: string;
    private _score: number;

    constructor(){

    }

  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }

  get img(): string {
    return this._img;
  }

  set img(value: string) {
    this._img = value;
  }

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  get score(): number {
    return this._score;
  }

  set score(value: number) {
    this._score = value;
  }
}


export class Link{

  private _url: string;
  private _picture : string;

  get url(): string {
    return this._url;
  }

  set url(value: string) {
    this._url = value;
  }

  get picture(): string {
    return this._picture;
  }

  set picture(value: string) {
    this._picture = value;
  }
}

import {Link} from "../shared/link";
export class Introduction{

    private _id : number;
    private _firstname : string;
    private _lastname : string;
    private _imageUrl : string;
    private _birthDate : string;
    private _gender: string;
    private _email: string;
    private _status: string;
    private _description: string;
    private _links : Array<Link>;

    constructor(){
        this._links = new Array<Link>();
    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get firstname(): string {
        return this._firstname;
    }

    set firstname(value: string) {
        this._firstname = value;
    }

    get lastname(): string {
        return this._lastname;
    }

    set lastname(value: string) {
        this._lastname = value;
    }

    get imageUrl(): string {
        return this._imageUrl;
    }

    set imageUrl(value: string) {
        this._imageUrl = value;
    }

    get birthDate(): string {
        return this._birthDate;
    }

    set birthDate(value: string) {
        this._birthDate = value;
    }

    get gender(): string {
        return this._gender;
    }

    set gender(value: string) {
        this._gender = value;
    }

    get email(): string {
        return this._email;
    }

    set email(value: string) {
        this._email = value;
    }

    get status(): string {
        return this._status;
    }

    set status(value: string) {
        this._status = value;
    }

    get description(): string {
        return this._description;
    }

    set description(value: string) {
        this._description = value;
    }

    get links(): Array<Link> {
        return this._links;
    }

    set links(value: Array<Link>) {
        this._links = value;
    }
}

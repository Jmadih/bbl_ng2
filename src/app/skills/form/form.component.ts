import {Component, OnInit, Output, Input, EventEmitter, OnChanges} from '@angular/core';
import {Mode} from "../../shared/mode.enum";
import {FormGroup, FormControl, Validators} from "@angular/forms";
import {Skill} from "../skill";

@Component({
  selector: 'app-skill-form',
  templateUrl: './form.component.html',
  styleUrls: ['form.component.scss']
})
export class SkillsFormComponent implements OnInit, OnChanges {

  form: FormGroup;
  isUpdateMode : boolean = false;
  @Input() model:any = {};
  @Input() mode : Mode;
  @Output() cancel$;
  @Output() submit$;

  constructor() {
    this.submit$ = new EventEmitter();
    this.cancel$ = new EventEmitter();
    this.form = this._buildForm();
  }

  ngOnInit() {

  }

  ngOnChanges(record) {
    if(record.model && record.model.currentValue) {
      this.model = record.model.currentValue;
      this.form.patchValue(this.model);
    }
    this.isUpdateMode =  (this.mode === Mode.EDIT);
    if(!this.isUpdateMode){
      this.form = this._buildForm();
    }
  }


  private _buildForm() {
    return new FormGroup({
      _id: new FormControl(),
      _img: new FormControl(),
      _title : new FormControl('',Validators.compose([Validators.required, Validators.minLength(2)])),
      _score: new FormControl('',Validators.compose([Validators.required, Validators.maxLength(100), Validators.minLength(0)]))
    });
  }

  submit(model : Skill){
    this.submit$.emit(model);
  }
  cancel() {
    this.cancel$.emit();
  }

}

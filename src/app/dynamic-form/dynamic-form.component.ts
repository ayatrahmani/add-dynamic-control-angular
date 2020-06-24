import { Component, OnInit } from '@angular/core';
import { FormGroup, FormGroupName, FormBuilder,FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit {
 dynamicFormGroup: FormGroup;
 itemRow:FormGroupName;
  constructor( private _fb:FormBuilder) { 
    this.dynamicFormGroup = this._fb.group({
      "itemRow": this._fb.array([this.initItemForm()])
    })
  }
  get f() { return <FormArray>this.dynamicFormGroup.controls['itemRow'] }

  ngOnInit() {
  }
  initItemForm(){
   return this._fb.group({
      name:['',[Validators.required]],
      address:['',[Validators.required]]
    })
  }

  add(){
    const control = <FormArray>this.dynamicFormGroup.controls['itemRow'];
      control.push(this.initItemForm());
  }
  remove(i){
     const control = <FormArray>this.dynamicFormGroup.controls['itemRow'];
     control.removeAt(i);
  }
getFormData(e){

}
}
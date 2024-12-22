import { Component, OnInit } from '@angular/core';
import { DropdownService } from './dropdown.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-feature-drop-down',
  templateUrl: './feature-drop-down.component.html',
  styleUrls: ['./feature-drop-down.component.css']
})
export class FeatureDropDownComponent implements OnInit {
Datas: any[] = []
selectedData: any = '0'
selectedOptionData: any = 0

dataForm!: FormGroup
  constructor(private dropDownService: DropdownService) { }

  ngOnInit(): void {
this.dataForm = new FormGroup({
  reactiveSelectedData: new FormControl('0'),
  reactiveSelectedOptionData: new FormControl(0),
})
    
    this.dropDownService.getData().subscribe((data)=>{
      data.push({id:'0', name:"Please Select"})
      data.sort((a,b)=>{return Number(a.id) - Number(b.id)})
      console.log(data)
      this.Datas = data
      this.selectedData = data[1].id
      this.selectedOptionData = data[2].id
      this.dataForm.controls['reactiveSelectedData'].patchValue(data[1].id)
      this.dataForm.controls['reactiveSelectedOptionData'].patchValue(data[2].id)
    },(error)=>{
      console.log(error)
    })
  }
  onSelectionChange(event: any)
  {
    this.selectedData = event.value
    console.log(this.selectedData)
  }
  onSelection_Change(event: any)
  {
    this.selectedOptionData = event
    console.log(this.selectedOptionData)
  }
  resetNgModel()
  {
    this.selectedData = '0'
    this.selectedOptionData = 0
  }
  selectValueForNgModel(){
    this.dropDownService.getData().subscribe((data)=>{
      data.sort((a,b)=>{return Number(a.id) - Number(b.id)})
      console.log(data)
      this.selectedData = data[6].id
      this.selectedOptionData = data[7].id
    },(error)=>{
      console.log(error)
    })
  }


  onSelectionChangeReactive(event: any)
  {
    this.dataForm.controls['reactiveSelectedData'].patchValue(event.value)
    console.log(this.dataForm.controls['reactiveSelectedData'].value)
    //console.log("reactive main",event)
  }

  onSelection_ChangeReactive(event: any)
  {
    console.log("option",event.target.value)
    this.dataForm.controls['reactiveSelectedOptionData'].patchValue(event.target.value)
    console.log("option",this.dataForm.controls['reactiveSelectedOptionData'].value)
  }
  resetReactive()
  {
    this.dataForm.controls['reactiveSelectedData'].patchValue('0')
      this.dataForm.controls['reactiveSelectedOptionData'].patchValue(0)
  }
  selectValueForReactive(){
    this.dataForm.controls['reactiveSelectedData'].patchValue('7')
      this.dataForm.controls['reactiveSelectedOptionData'].patchValue(7)
  }

}

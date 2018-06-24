import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-viaje',
  templateUrl: './viaje.component.html',
  styleUrls: ['./viaje.component.css']
})
export class ViajeComponent implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  isEditable: boolean = false;
  selectedValue : string;
  selectedValue2 : string;
  selectedValue3 : string;
  foods = [
    {value: 'Amazonas-0', viewValue: 'Amazonas'},
    {value: 'Ancash-1', viewValue: 'Ancash'},
    {value: 'Apurimac-2', viewValue: 'Apurimac'},
    {value: 'Arequipa-3', viewValue: 'Arequipa'},
    {value: 'Ayacucho-4', viewValue: 'Ayacucho'},
    {value: 'Cajamarca-5', viewValue: 'Cajamarca'},
    {value: 'Callao-6', viewValue: 'Callao'},
    {value: 'Cusco-7', viewValue: 'Cusco'},
    {value: 'Huancavelica-8', viewValue: 'Huancavelica'},
    {value: 'Huanuco-9', viewValue: 'Huanuco'},
    {value: 'Ica-10', viewValue: 'Ica'},
    {value: 'Junin-11', viewValue: 'Junin'},
    {value: 'La Libertad-12', viewValue: 'La Libertad'},
    {value: 'Lambayeque-13', viewValue: 'Lambayeque'},
    {value: 'Lima-14', viewValue: 'Lima'},
    {value: 'Loreto-15', viewValue: 'Loreto'},
    {value: 'Madre de Dios-16', viewValue: 'Madre de Dios'},
    {value: 'Moquegua-17', viewValue: 'Moquegua'},
    {value: 'Pasco-18', viewValue: 'Pasco'},
    {value: 'Piura-19', viewValue: 'Piura'},
    {value: 'Puno-20', viewValue: 'Puno'},
    {value: 'San Martin-21', viewValue: 'San Martin'},
    {value: 'Tacna-22', viewValue: 'Tacna'},
    {value: 'Tumbes-23', viewValue: 'Tumbes'},
    {value: 'Ucayali-24', viewValue: 'Ucayali'}
  ];

  hoteles = [
    {value: 'Libre-0', viewValue:'Libre'},
    {value: 'Atemporal-1', viewValue: 'Atemporal'},
    {value: 'Sheraton-2', viewValue: 'Sheraton'}
  ];

  restaurantes = [
    {value: 'Cafe Koinonía-0', viewValue:'Cafe Koinonía'},
    {value: 'CHACRA-1', viewValue: 'CHACRA'},
    {value: 'Puerto Azul-2', viewValue: 'Puerto Azul'}
  ];

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      thirdCtrl: ['', Validators.required]
    });
  }
  verificar(){
    console.log(this.firstFormGroup.value);
    //this.firstFormGroup.value;
    console.log(this.secondFormGroup.value);
    console.log(this.thirdFormGroup.value);
  }

  

}

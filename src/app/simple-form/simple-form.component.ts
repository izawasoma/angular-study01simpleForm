import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-form',
  templateUrl: './simple-form.component.html',
  styleUrls: ['./simple-form.component.scss']
})
export class SimpleFormComponent implements OnInit {

  result:string = "Let's Calcuration!!";
  text1:string = "0";
  text2:string = "0";

  addAndShow():void {
    console.log("button clicked!!");
    //ローカル変数の宣言
    let num1:number;
    let num2:number;
    let error:string = "正しい値を入力してください。";
    let result:string;

    //テキストフィールドの値を数値に変換します。
    num1 = Number(this.text1);
    num2 = Number(this.text2);

    console.log(`---------------\nnum1の値：${num1}\n---------------`);
    console.log(`---------------\nnum2の値：${num2}\n---------------`);

    //バリデーションチェック
    if(!Number.isNaN(num1) && !Number.isNaN(num2)){
      result = `${num1} + ${num2} = ${num1 + num2}`;
    }
    else{
      result = error;
    }
    
    this.result = result;
  }

  constructor() { }

  ngOnInit(): void {
  }

}

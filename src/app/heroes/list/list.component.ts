import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public heroNames:string[] = ['Ironman','Spiderman','Wanda','Hulk','Vision','Dr. Strange'] ;
  public deletedHeroe?:string;

  removeLastHeroe():void {
    this.deletedHeroe = this.heroNames.pop();

  }

}

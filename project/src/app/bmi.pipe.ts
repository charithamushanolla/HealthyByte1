import { Pipe, PipeTransform } from '@angular/core';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
@Pipe({
  name: 'bmi'
})
export class BmiPipe implements PipeTransform {

  transform(value:any,weight:any,height:any): any{
    value= Math.round( weight/(height*height));
    return value;
  }

}

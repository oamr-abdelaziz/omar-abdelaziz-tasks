import { Pipe, PipeTransform } from '@angular/core';
// import { prototype } from 'events';

// interface HTMLElementTagNameMap {
//   "a": HTMLAnchorElement;
//   "abbr": HTMLElement;

// }

var a = document.createElement('a');
  a.target = '_blank';
  a.href = 'https://www.techiedelight.com/';
  a.innerText = 'See More';
 

@Pipe({
  name: 'stringCut'
})

export class StringCutPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    // let a :HTMLAnchorElement;
    if(value.length>150){
      // return `${value.slice(0,149)}"..." ${a}`;
      return value.slice(0,149)+" ... seemore";
    }

  }

}

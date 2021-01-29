// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-test-me',
//   templateUrl: './test-me.component.html',
//   styleUrls: ['./test-me.component.scss']
// })
// export class TestMeComponent implements OnInit {
//   @ViewChild('d') elmentTest: ElementRef; //var elmentTest = document.getElemntById('d')
//   inputText = 'hhhhh';
//   buttonDisabled = false;
//   inputText2 = 'aaaa';
//   imgSrc =
//     'https://www.talkwalker.com/images/2020/blog-headers/image-analysis.png';
//   buttonClicked = false;
//   elementsArray = [
//     { name: 'ahmed', age: 24 },
//     { name: 'bola', age: 25 },
//     { name: 'hamda', age: 26 },
//     { name: 'hamda', age: 27 },
//   ];
//   constructor() {
//     setTimeout(() => {
//       this.buttonDisabled = true;
//     }, 3000);
//   }

//   ngOnInit(): void {}
//   onButtonClicked() {
//     this.buttonClicked = !this.buttonClicked;
//   }

//   onInputChange(e): void {
//     this.inputText = e.target.value;
//   }

//   getColor(): string {
//     return this.buttonClicked ? 'green' : 'red';
//   }

//   submit(): void {
//     const test = (this.elmentTest.nativeElement as HTMLDivElement).innerHTML;
//     console.log(test);
    
//   }
// }

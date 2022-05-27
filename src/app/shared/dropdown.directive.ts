// import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from "@angular/core";

// @Directive({
//     selector: '[appOpen]'
// })

// export class OpenDirective implements OnInit{

//     constructor(private renderer: Renderer2, private elementref: ElementRef) {}
    
//     ngOnInit() {
       
        
//     }
//     @HostListener('click') open(eventData: Event){
//         if(this.elementref.nativeElement.classList.contains("open")){
//             this.renderer.removeClass(this.elementref.nativeElement, 'open')
//             // this.renderer.addClass(this.elementref.nativeElement, 'close')
//           }else{
//             this.renderer.addClass(this.elementref.nativeElement, 'open')
//           }
//     }
// }
import {Directive, ElementRef, HostBinding, HostListener} from '@angular/core';
 
@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen = false;
  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
  }
  constructor(private elRef: ElementRef) {}
}
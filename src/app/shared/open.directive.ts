import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from "@angular/core";

@Directive({
    selector: '[appOpen]'
})

export class OpenDirective implements OnInit{

    constructor(private renderer: Renderer2, private elementref: ElementRef) {}
    
    ngOnInit() {
       
        
    }
    @HostListener('click') open(eventData: Event){
        if(this.elementref.nativeElement.classList.contains("open")){
            this.renderer.removeClass(this.elementref.nativeElement, 'open')
            // this.renderer.addClass(this.elementref.nativeElement, 'close')
          }else{
            this.renderer.addClass(this.elementref.nativeElement, 'open')
          }
    }
}
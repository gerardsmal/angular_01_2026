import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: false,
})
export class Highlight {
  @Input() appHighLight = '';
  @Input() defaultColor = '';
  constructor(private element: ElementRef){};

  @HostListener('mouseenter') onMouseEnter(){
    this.cambioColore(this.appHighLight);
  }

  @HostListener('mouseleave') onMouseLeaver(){
    this.cambioColore(this.defaultColor);
  }

  private cambioColore(colore:string){
    this.element.nativeElement.style.backgroundColor = colore
  }
}

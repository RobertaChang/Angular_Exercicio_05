import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appStyled]'
})
export class StyledDirective {
  /* @Input()
  bg: string = 'orange'

  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) {}

  ngOnInit() {
    this.el.nativeElement.style.backgroundColor = this.bg
  } */

}

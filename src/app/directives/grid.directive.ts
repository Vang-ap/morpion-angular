import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appGrid]'
})
export class GridDirective {

  constructor(
    private elementRef: ElementRef
  ) { }

  ngOnInit() {
    this.elementRef.nativeElement.setAttribute('case');
  }

}

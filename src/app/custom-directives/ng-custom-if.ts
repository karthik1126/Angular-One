import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appNgCustomIf]'
})
export class NgCustomIfDirective {
  @Input() set appNgCustomIf(value : Boolean) {
    if (value) {
      this.viewRef.createEmbeddedView(this.templateRef);
    } else {
      this.viewRef.clear;
    }
  }

  constructor(private templateRef : TemplateRef<any>, private viewRef : ViewContainerRef) { }

}

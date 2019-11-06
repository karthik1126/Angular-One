import { OnInit, Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
	selector: '[BoldTextDirective]'
})
export class BoldTextDirective implements OnInit {

	constructor(private eleRef : ElementRef, private rendrer : Renderer2) {}

	ngOnInit() {
		//this.eleRef.nativeElement.style.fontWeight = "bold";
		this.rendrer.setStyle(this.eleRef.nativeElement, "fontWeight", "bold");
	}
}
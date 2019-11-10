import { OnInit, Directive, ElementRef, Renderer2, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
	selector: '[ColorTextDirective]'
})
export class ColorTextDirective implements OnInit {

	@Input() defaultStyle : string = '';
	@Input() highlightedStyle: string = '';

	// alternative to using the renderer. HostBinding along with HostListener
	@HostBinding("style.textDecoration") textStyle : string = this.defaultStyle;

	constructor(private eleRef : ElementRef, private rendrer : Renderer2) {}

	ngOnInit() {
	}

	@HostListener('mouseover') mouseover() {
		this.rendrer.setStyle(this.eleRef.nativeElement, 'color', 'green');
		this.textStyle = this.highlightedStyle;
	}

	@HostListener('mouseleave') mouseleave() {
		this.rendrer.setStyle(this.eleRef.nativeElement, 'color', 'black');
		this.textStyle = this.defaultStyle;
	}
}
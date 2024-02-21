import { Directive, ElementRef, HostListener, OnInit } from '@angular/core';

@Directive({
	selector: '[NumbersOnly]'
})
export class NumbersOnlyDirective implements OnInit {

	constructor(private el: ElementRef) { }

	ngOnInit() {
		this.sanitizeInputValue();
	}

	@HostListener('input', ['$event']) onInputChange(event: Event) {
		// Instead of calling sanitizeInputValue() directly, check if the input value has changed
		const currentValue = this.el.nativeElement.value.replace(/\D/g, '');
		if (this.el.nativeElement.value !== currentValue) {
			this.el.nativeElement.value = currentValue;
			this.el.nativeElement.dispatchEvent(new Event('input'));
		}
	}

	private sanitizeInputValue() {
		const inputElement = this.el.nativeElement;
		let value = inputElement.value.replace(/\D/g, ''); // Remove all non-numeric characters

		if (value === '' || value === '0') {
			inputElement.value = '0'; // If input is empty or zero, set it to zero directly
		} else {
			inputElement.value = parseInt(value, 10).toString(); // Remove leading zeros for valid numbers
		}

		inputElement.dispatchEvent(new Event('input')); // Dispatch input event for validation
	}


	@HostListener('blur', ['$event']) onBlur(event: Event) {
		const inputElement = this.el.nativeElement;
		let value = inputElement.value.trim();

		if (value === '' || value === '0') {
			inputElement.value = '0'; // If input is empty or zero on blur, set it to zero
			inputElement.dispatchEvent(new Event('input')); // Dispatch input event for validation
		}
	}
}

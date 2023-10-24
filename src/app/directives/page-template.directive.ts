import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
    selector: '[appPageTemplateHost]'
})
export class PageTemplateDirective {
    constructor(public viewContainerRef: ViewContainerRef) {}
}

import { Component, OnInit, ViewChild, Type } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PageTemplateDirective } from 'src/app/directives/page-template.directive';
import { PageTemplateType } from './page-template-type.component';

@Component({
    selector: 'app-page-template',
    templateUrl: './page-template.component.html',
    styleUrls: ['./page-template.component.css']
})
export class PageTemplateComponent implements OnInit {
    public mainComponent: Type<any>;
    public isTransparent!: boolean;

    @ViewChild(PageTemplateDirective, { static: true })
    appPageTemplateHost!: PageTemplateDirective;

    constructor(private route: ActivatedRoute) {
        const isTransparentProp = this.route.snapshot.data['isTransparent'];

        this.isTransparent =
            isTransparentProp == null ? true : isTransparentProp;
        this.mainComponent = this.route.snapshot.data['component'];
    }

    // displaying the passed component dynamically
    displayComponent(): void {
        const viewContainerRef = this.appPageTemplateHost.viewContainerRef;
        viewContainerRef.clear();

        const componentRef = viewContainerRef.createComponent<PageTemplateType>(
            this.mainComponent
        );
    }

    ngOnInit(): void {
        this.displayComponent();
    }
}

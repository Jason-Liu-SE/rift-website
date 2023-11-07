import { Component, OnInit, ViewChild, Type } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PageTemplateDirective } from 'src/app/directives/page-template.directive';
import { IPageTemplate } from '../../interfaces/page-template.interface';

@Component({
    selector: 'app-page-template',
    templateUrl: './page-template.component.html',
    styleUrls: ['./page-template.component.scss']
})
export class PageTemplateComponent implements OnInit {
    public showContactSection: boolean;
    public mainComponent: Type<any>;
    public isTransparent!: boolean;

    @ViewChild(PageTemplateDirective, { static: true })
    appPageTemplateHost!: PageTemplateDirective;

    constructor(private route: ActivatedRoute) {
        // setting values from the passed URL data
        const isTransparentProp = this.route.snapshot.data['isTransparent'];
        const showContactSectionProp =
            this.route.snapshot.data['showContactSection'];

        this.isTransparent =
            isTransparentProp == null ? true : isTransparentProp;
        this.mainComponent = this.route.snapshot.data['component'];
        this.showContactSection =
            showContactSectionProp == null ? false : showContactSectionProp;
    }

    // displaying the passed component dynamically
    displayComponent(): void {
        const viewContainerRef = this.appPageTemplateHost.viewContainerRef;
        viewContainerRef.clear();

        const componentRef = viewContainerRef.createComponent<IPageTemplate>(
            this.mainComponent
        );
    }

    ngOnInit(): void {
        this.displayComponent();
    }
}

import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
    @Input('transparent') public isTransparent: boolean = true;

    ngOnInit() {
        console.log(this.isTransparent);
    }
}

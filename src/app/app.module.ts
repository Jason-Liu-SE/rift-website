import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './components/footer/footer.component';
import { PageTemplateComponent } from './pages/page-template/page-template.component';
import { BackgroundImageCardComponent } from './components/background-image-card/background-image-card.component';
import { ContactComponent } from './components/contact/contact.component';
import { PageTemplateDirective } from './directives/page-template.directive';
import { MatButtonModule } from '@angular/material/button';
import { WelcomeCardComponent } from './components/welcome-card/welcome-card.component';

@NgModule({
    declarations: [
        routingComponents,
        AppComponent,
        NavbarComponent,
        FooterComponent,
        PageTemplateComponent,
        BackgroundImageCardComponent,
        ContactComponent,
        PageTemplateDirective,
        WelcomeCardComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatButtonModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}

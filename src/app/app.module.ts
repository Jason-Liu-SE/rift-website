import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { FooterComponent } from './components/footer/footer.component';
import { PageTemplateComponent } from './pages/page-template/page-template.component';
import { BackgroundImageCardComponent } from './components/background-image-card/background-image-card.component';
import { NewsPageComponent } from './pages/news-page/news-page.component';
import { GalleryPageComponent } from './pages/gallery-page/gallery-page.component';
import { MapPageComponent } from './pages/map-page/map-page.component';
import { ContactPageComponent } from './components/contact/contact.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        HomePageComponent,
        FooterComponent,
        PageTemplateComponent,
        BackgroundImageCardComponent,
        NewsPageComponent,
        GalleryPageComponent,
        MapPageComponent,
        ContactPageComponent,
        AboutPageComponent
    ],
    imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './components/footer/footer.component';
import { PageTemplateComponent } from './pages/page-template/page-template.component';
import { BackgroundImageCardComponent } from './components/background-image-card/background-image-card.component';
import { ContactComponent } from './components/contact/contact.component';
import { PageTemplateDirective } from './directives/page-template.directive';
import { WelcomeCardComponent } from './components/welcome-card/welcome-card.component';
import { SectionCardComponent } from './components/section-card/section-card.component';
import { CaptionCardComponent } from './components/caption-card/caption-card.component';
import { CollectionSectionComponent } from './components/gallery/collection-section/collection-section.component';
import { ImageShowcaseSectionComponent } from './components/image-showcase-section/image-showcase-section.component';
import { BackButtonComponent } from './components/back-button/back-button.component';
import { GalleryProviderService } from './services/gallery-provider.service';
import { ImageSlideshowComponent } from './components/image-slideshow/image-slideshow.component';
import { NewsDisplayComponent } from './components/news/news-display/news-display.component';
import { DownloadCardComponent } from './components/download-card/download-card.component';
import { MapProviderService } from './services/map-provider.service';

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
        WelcomeCardComponent,
        SectionCardComponent,
        CaptionCardComponent,
        CollectionSectionComponent,
        ImageShowcaseSectionComponent,
        BackButtonComponent,
        ImageSlideshowComponent,
        NewsDisplayComponent,
        DownloadCardComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MatPaginatorModule,
        MatIconModule,
        HttpClientModule
    ],
    providers: [GalleryProviderService, MapProviderService],
    bootstrap: [AppComponent]
})
export class AppModule {}

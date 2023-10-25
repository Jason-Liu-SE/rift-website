import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NewsPageComponent } from './pages/news-page/news-page.component';
import { GalleryPageComponent } from './pages/gallery-page/gallery-page.component';
import { MapPageComponent } from './pages/map-page/map-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { PageTemplateComponent } from './pages/page-template/page-template.component';
import { DownloadsPageComponent } from './pages/downloads-page/downloads-page.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: PageTemplateComponent,
        title: 'The Rift - Home',
        data: { component: HomePageComponent }
    },
    {
        path: 'news',
        component: PageTemplateComponent,
        title: 'The Rift - News',
        data: { component: NewsPageComponent }
    },
    {
        path: 'gallery',
        component: PageTemplateComponent,
        title: 'The Rift - Gallery',
        data: { component: GalleryPageComponent }
    },
    {
        path: 'map',
        component: PageTemplateComponent,
        title: 'The Rift - Map',
        data: { component: MapPageComponent }
    },
    {
        path: 'about',
        component: PageTemplateComponent,
        title: 'The Rift - About',
        data: { component: AboutPageComponent }
    },
    {
        path: 'downloads',
        component: PageTemplateComponent,
        title: 'The Rift - Downloads',
        data: { component: DownloadsPageComponent }
    },
    {
        path: '**',
        component: PageTemplateComponent,
        title: 'The Rift - Error 404',
        data: { component: ErrorPageComponent, isTransparent: false }
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}

export const routingComponents = [
    HomePageComponent,
    NewsPageComponent,
    GalleryPageComponent,
    MapPageComponent,
    AboutPageComponent,
    DownloadsPageComponent,
    ErrorPageComponent
];

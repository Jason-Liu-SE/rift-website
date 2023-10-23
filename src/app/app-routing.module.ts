import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NewsPageComponent } from './pages/news-page/news-page.component';
import { GalleryPageComponent } from './pages/gallery-page/gallery-page.component';
import { MapPageComponent } from './pages/map-page/map-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomePageComponent
    },
    {
        path: 'news',
        component: NewsPageComponent
    },
    {
        path: 'gallery',
        component: GalleryPageComponent
    },
    {
        path: 'map',
        component: MapPageComponent
    },
    {
        path: 'about',
        component: AboutPageComponent
    },
    {
        path: '**',
        redirectTo: '/home'
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
    AboutPageComponent
];

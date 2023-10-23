import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NewsPageComponent } from './pages/news-page/news-page.component';
import { GalleryPageComponent } from './pages/gallery-page/gallery-page.component';
import { MapPageComponent } from './pages/map-page/map-page.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';

const routes: Routes = [
    {
        path: 'home',
        component: HomePageComponent
    },
    {
        path: 'home',
        component: HomePageComponent
    },
    {
        path: 'home',
        component: HomePageComponent
    },
    {
        path: 'home',
        component: HomePageComponent
    },
    {
        path: 'home',
        component: HomePageComponent
    },
    {
        path: 'home',
        component: HomePageComponent
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
    ContactComponent,
    AboutPageComponent
];

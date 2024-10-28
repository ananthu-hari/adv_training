import { Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ChildAComponent } from './first/child-a/child-a.component';
import { ChildBComponent } from './first/child-b/child-b.component';

export const routes: Routes = [
    { 
        path: 'first-component', 
        component: FirstComponent,
        children: [
            { 
                path: 'child-a', //Child A route path
                component: ChildAComponent, //Child A route that the route renders
            },
            { 
                path: 'child-b', //Child A route path
                component: ChildBComponent, //Child A route that the route renders
            },
            { path: '', redirectTo: 'child-a', pathMatch:'full' },
        ],
    },
    { path: 'second-component', component: SecondComponent},
    { path: '', redirectTo: '/first-component', pathMatch: 'full'},
    { path: '**', component: PageNotFoundComponent},
];

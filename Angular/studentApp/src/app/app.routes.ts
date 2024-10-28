import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AddNewComponent } from './add-new/add-new.component';
import { DeleteComponent } from './delete/delete.component';
import { DetailsComponent } from './details/details.component';
import { ListComponent } from './list/list.component';
import { UpdateComponent } from './update/update.component';

export const routes: Routes = [
    { path: 'home-component', component: HomeComponent},
    { path: 'add-new-component', component: AddNewComponent},
    { path: 'delete-component', component: DeleteComponent},
    { path: 'details-component', component: DetailsComponent},
    { path: 'list-component', component: ListComponent},
    { path: 'update-component', component: UpdateComponent},
    { path: '', redirectTo: 'home-component', pathMatch:'full'},
    { path: '**', component: PageNotFoundComponent}
];

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NewProduktComponent} from './components/produkt/new-produkt/new-produkt.component';
import {UpdateProduktComponent} from './components/produkt/update-produkt/update-produkt.component';
import {ListProduktComponent} from './components/produkt/list-produkt/list-produkt.component';
import {LoginComponent} from './components/login/login.component';
import {MenuComponent} from './components/produkt/menu/menu.component';

const routes: Routes = [
{
    path: "produkt/listProdukt/editProdukt/:idProdukt",component: UpdateProduktComponent
  },

{
    path: "produkt",component: MenuComponent
  },
{
    path: "produkt/listProdukt",component: ListProduktComponent
  },

  {
      path: '',component: LoginComponent
    },

  {
    path: "produkt/newProdukt",component: NewProduktComponent
  },

  {
    path: "editProdukt/:id",component: UpdateProduktComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

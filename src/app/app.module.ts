import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';

import { ContactmanagerModule } from './contactmanager/contactmanager.module';
import {Routes, RouterModule } from '@angular/router';
import { ContactmanagerAppComponent } from './contactmanager/contactmanager-app.component';
import { ToolbarComponent } from './contactmanager/components/toolbar/toolbar.component';
import { MainContentComponent } from './contactmanager/components/main-content/main-content.component';
import { SidenavComponent } from './contactmanager/components/sidenav/sidenav.component';

const routes : Routes =[
  { path: 'contactmanager', loadChildren: './contactmanager/contactmanager.module#ContactmanagerModule' },
  { path: 'demo', loadChildren: './demo/demo.module#DemoModule' },
  { path: '**',redirectTo: 'contactmanager' }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    ContactmanagerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import {CommonModule } from '@angular/common';
import { Routes,RouterModule } from '@angular/router';

import { MaterialModule } from '../shared/material.module';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { ContactmanagerAppComponent } from './contactmanager-app.component';
import { ToolbarComponent  } from './components/toolbar/toolbar.component';
import { MainContentComponent  } from './components/main-content/main-content.component';
import { SidenavComponent  } from './components/sidenav/sidenav.component';


const routes : Routes =[
    { path: '', component: ContactmanagerAppComponent,
        children: [
            {path:'', component: MainContentComponent}
        ]},
    
    { path: '**',redirectTo: '' }
  ];

@NgModule ({
    imports:[
        CommonModule,
        MaterialModule, 
        FlexLayoutModule,
        FormsModule,
        RouterModule.forChild(routes)],
    declarations:[
        ContactmanagerAppComponent,ToolbarComponent, MainContentComponent, SidenavComponent
    ]
})

export class ContactmanagerModule{}

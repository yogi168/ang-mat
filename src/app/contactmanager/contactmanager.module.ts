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
import { UserService } from './services/user.service';
import { HttpClientModule } from '../../../node_modules/@angular/common/http';


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
        HttpClientModule,
        MaterialModule, 
        FlexLayoutModule,
        FormsModule,
        RouterModule.forChild(routes)],
    declarations:[
        ContactmanagerAppComponent,
        ToolbarComponent,
        MainContentComponent,
        SidenavComponent
    ],
    providers:[
        UserService
    ]
})

export class ContactmanagerModule{}

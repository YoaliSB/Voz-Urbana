import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { CarruselComponent } from './components/carrusel/carrusel.component';
import { ExploreEventsComponent } from './components/explore-events/explore-events.component';
import { CreateEventComponent } from './components/create-event/create-event.component';
import { EventDetailsComponent } from './components/event-details/event-details.component';
import { CommentsComponent } from './components/comments/comments.component';
import { InsertCommentComponent } from './components/insert-comment/insert-comment.component';
import { RelevantEventsComponent } from './components/relevant-events/relevant-events.component';
import { NewEventsComponent } from './components/new-events/new-events.component';
import { ProfileComponent } from './components/profile/profile.component';
import { PublishedEventsComponent } from './components/published-events/published-events.component';
import { SavedEventsComponent } from './components/saved-events/saved-events.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { AdminComponent } from './components/admin/admin.component';
import { PoliceComponent } from './components/police/police.component';

const routes: Routes = [
    { path: '', component: LandingPageComponent },
    { path: 'login', component: LoginComponent },
    { path: 'event-details/:id', component: EventDetailsComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'create-event', component: CreateEventComponent },
    { 
        path: 'profile', 
        component: ProfileComponent,
        children: [
            { path: 'saved', component: SavedEventsComponent },
            { path: '', component: EditProfileComponent },
            { path: 'published', component: PublishedEventsComponent }  
        ]
    },
    { 
        path: 'ExploreEvents', 
        component: ExploreEventsComponent,
        children: [
            { path: 'new', component: NewEventsComponent },
            { path: '', component: RelevantEventsComponent },
            { path: 'create', component: CreateEventComponent }
        ]
    },
    { path: 'admin', component: AdminComponent },
    { path: 'police', component: PoliceComponent },
  
  ];
  
  export const RoutingModule: ModuleWithProviders =
    RouterModule.forRoot(routes, { enableTracing: true }  );
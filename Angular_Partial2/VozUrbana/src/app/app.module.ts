import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LandingPageComponent,
    RegisterComponent,
    LoginComponent,
    CarruselComponent,
    ExploreEventsComponent,
    CreateEventComponent,
    EventDetailsComponent,
    CommentsComponent,
    InsertCommentComponent,
    RelevantEventsComponent,
    NewEventsComponent,
    ProfileComponent,
    PublishedEventsComponent,
    SavedEventsComponent,
    EditProfileComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

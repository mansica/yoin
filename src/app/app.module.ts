import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { EventsPage } from '../pages/events/events';
import { SavedEventsPage } from '../pages/saved-events/saved-events';
import { CreateEventPage } from '../pages/create-event/create-event';
import { EventPage } from '../pages/event/event';
import { TabsPage } from '../pages/tabs/tabs';
import { MessasgesPage } from '../pages/messasges/messasges';
import { MePage } from '../pages/me/me';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { ChatPage } from '../pages/chat/chat';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    EventsPage,
    SavedEventsPage,
    CreateEventPage,
    EventPage,
    TabsPage,
    MessasgesPage,
    MePage,
    LoginPage,
    SignupPage,
    ChatPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    EventsPage,
    SavedEventsPage,
    CreateEventPage,
    EventPage,
    TabsPage,
    MessasgesPage,
    MePage,
    LoginPage,
    SignupPage,
    ChatPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
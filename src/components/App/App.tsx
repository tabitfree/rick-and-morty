import { IonApp } from '@ionic/react';

import { playCircle, home, heart } from 'ionicons/icons';

import {
    IonTabs,
    IonTabBar,
    IonTabButton,
    IonIcon,
    IonLabel,
    IonRouterOutlet,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Route, Redirect } from 'react-router';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';

import '@ionic/react/css/display.css';

/* Theme variables */
import 'styles/vendors/ionic/ion-variables.css';
import 'styles/variables.css';

import { CharacterPage } from 'pages/CharacterPage';

import { HomePage } from '../../pages/HomePage';
import { Favourites } from '../../pages/Favourites';

export const App = () => (
    <IonApp>
        <IonReactRouter>
            <IonTabs>
                <IonRouterOutlet>
                    <Redirect exact path="/" to="/home" />
                    {/*
                      Use the render method to reduce the number of renders your component will have due to a route change.

                      Use the component prop when your component depends on the RouterComponentProps passed in automatically.
                    */}
                    <Route
                        path="/home"
                        render={() => (
                                <HomePage />
                            )}
                        exact={true}
                    />
                    
                    <Route
                        path="/favourites"
                        component={Favourites}
                    />

                    <Route
                        path="/character/:id"
                        component={CharacterPage}
                        exact
                     />
                </IonRouterOutlet>

                <IonTabBar slot="bottom">
                    <IonTabButton tab="home" href="/home">
                        <IonIcon icon={home} />
                        <IonLabel>Home</IonLabel>
                    </IonTabButton>

                    <IonTabButton tab="favourites" href="/favourites">
                        <IonIcon icon={heart} />
                        <IonLabel>Favourites</IonLabel>
                    </IonTabButton>
                </IonTabBar>
            </IonTabs>
        </IonReactRouter>
    </IonApp>
);
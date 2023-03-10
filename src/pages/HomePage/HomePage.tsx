import { IonPage, IonContent, IonHeader, IonToolbar, IonTitle, IonProgressBar, IonSearchbar, SearchbarCustomEvent } from '@ionic/react';

import { useAtom } from 'jotai';

import { CharactersList } from 'components/CharactersList';
import { useFelaEnhanced } from 'hooks';
import { useAllCharacters } from 'modules/characters/hooks';
import { pageAtom, searchAtom } from 'modules/core/modules/jotai';
import type { RulesExtend } from 'styles/theme';

import * as felaRules from './HomePage.rules';
import { FC } from 'react';

export interface HomePageProps {
    extend?: RulesExtend<typeof felaRules>;
}

export const HomePage: FC<HomePageProps> = ({ extend }) => {
    const { styles } = useFelaEnhanced(felaRules, { extend });
    const [curPage, setCurPage] = useAtom(pageAtom);
    const [curSearch, setCurSearch] = useAtom(searchAtom);

    const { isLoading, error } = useAllCharacters(curPage, curSearch); 

    const handleSearchChange = (e: SearchbarCustomEvent) => {
        setCurPage(1);
        setCurSearch(e.target.value);
    }

    if (error) {
        return <div className={styles.container}>{error.message}</div>
    }

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Characters</IonTitle>
                    {isLoading && <IonProgressBar type="indeterminate"></IonProgressBar>}
                </IonToolbar>
            </IonHeader>

            {!isLoading && 
            <IonContent className={styles.container + 'ion-padding'} >
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle className={styles.title} size="large">Characters</IonTitle>
                    </IonToolbar>
                    <IonToolbar>
                        <IonSearchbar className={styles.search} debounce={300} onIonChange={handleSearchChange} placeholder='Search'></IonSearchbar>
                    </IonToolbar>
                </IonHeader>

                <CharactersList />

            </IonContent>}
        </IonPage>
    );
};

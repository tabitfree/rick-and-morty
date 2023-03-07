import { IonInfiniteScroll, IonInfiniteScrollContent, IonPage, IonContent, IonItem, IonList, IonAvatar, IonLabel, IonNote, IonHeader, IonToolbar, IonTitle, IonProgressBar, IonSearchbar, IonImg, SearchbarCustomEvent } from '@ionic/react';
import { useFelaEnhanced } from 'hooks';
import { Character, Maybe } from 'modules/api';
import { useAllCharacters } from 'modules/characters/hooks';
import { useEffect, useState } from 'react';
import type { RulesExtend } from 'styles/theme';

import * as felaRules from './HomePage.rules';

export interface HomePageProps {
    extend?: RulesExtend<typeof felaRules>;
}

export const HomePage = ({ extend }: HomePageProps) => {
    const { styles } = useFelaEnhanced(felaRules, { extend });
    const [characters, setCharacters] = useState<unknown[]>([]);
    const [curPage, setCurPage] = useState<number>(1);
    const [curSearch, setCurSearch] = useState<string>('');

    // const {data, isLoading, error, refetch} = useAllCharacters({options: {enabled: false}});
    const {data, isLoading, error, refetch} = useAllCharacters(curPage, curSearch); 

    useEffect(() => {
        if (!data?.characters?.results) {
            return
        }

        let newCharacters = [...data.characters.results];

        if (curPage != 1) {
            newCharacters = [...characters, ...newCharacters];
        }

        setCharacters(newCharacters);

        let p = curPage;
        setCurPage(++p);
    }, [data]);
    
    useEffect(() => {
        refetch();
    }, [curSearch])

    const handleSearchChange = (e: SearchbarCustomEvent) => {
        setCurPage(1);
        setCurSearch(e.target.value);
        // setCurSearch(e.target.value);
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
            <IonContent className={styles.container} >
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">Characters</IonTitle>
                    </IonToolbar>
                    <IonToolbar>
                        <IonSearchbar debounce={300} onIonChange={(e) => handleSearchChange(e)} placeholder='Search'></IonSearchbar>
                    </IonToolbar>
                </IonHeader>
                {!characters.length ? <p>no results</p> :
                <><IonList>
                    {
                    characters.map(({name, id, status, image}) => 
                    <IonItem key={id} button routerLink={`/character/${id}`} routerDirection='forward' detail={true} lines="inset">
                        <IonAvatar slot="start">
                            <IonImg src={image} alt={`Avatar of ${name}`} />
                        </IonAvatar>
                        <IonLabel>
                            <h2>{name}</h2>
                            <IonNote>{status}</IonNote>
                        </IonLabel>
                    </IonItem>)
                    }
                </IonList>
                <IonInfiniteScroll 
                    onIonInfinite={async (ev) =>  {
                        await refetch()
                        ev.target.complete();
                    }}
                >
                    <IonInfiniteScrollContent></IonInfiniteScrollContent>
                </IonInfiniteScroll>
                </>}
            </IonContent>}
        </IonPage>
    );
};

import { useAtom } from 'jotai';
import { IonList, IonNote, IonItem, IonAvatar, IonImg, IonLabel, IonInfiniteScroll, IonInfiniteScrollContent } from "@ionic/react";
import { type IonInfiniteScrollCustomEvent } from "@ionic/core";
import { RulesExtend } from "styles";
import { useAllCharacters } from "modules/characters/hooks";
import { FC, useEffect } from 'react';

import * as felaRules from './CharactersList.rules';

import { useFelaEnhanced } from "hooks";
import { charactersAtom, pageAtom, searchAtom } from 'modules/core/modules/jotai';

import type { CharactersQueryResults } from "modules/api";

export interface CharactersListProps {
    extend?: RulesExtend<typeof felaRules>;
}

export const CharactersList: FC<CharactersListProps> = ({ extend }) => {
    const { styles } = useFelaEnhanced(felaRules, { extend });
    const [characters, setCharacters] = useAtom(charactersAtom);

    const [curPage, setCurPage] = useAtom(pageAtom);
    const [curSearch] = useAtom(searchAtom);

    const {data, isLoading, error, refetch} = useAllCharacters(curPage, curSearch); 

    useEffect(() => {
        if (!data?.characters?.results) {
            return
        }

        let newCharacters: CharactersQueryResults = [...data.characters.results];

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

    const handleIonInfiniteScroll = (ev: IonInfiniteScrollCustomEvent<void>): void => {
        refetch().then(() => ev.target.complete());        
    }

    if (characters.length == 0) {
        return <p>No character found :(</p>;
    }
    
    return <>
            <IonList className={styles.container}>
                {
                    characters.map(({name, id, status, image}) => 
                        <IonItem className={styles.item}  key={id} button routerLink={`/character/${id}`} routerDirection='forward' detail={true} lines="inset">
                            <IonAvatar slot="start">
                                <IonImg src={image} alt={`Avatar of ${name}`} />
                            </IonAvatar>
                            <IonLabel>
                                <h2 className={styles.itemTitle}>{name}</h2>
                                <IonNote>{status}</IonNote>
                            </IonLabel>
                        </IonItem>
                    )
                }
                </IonList>
                <IonInfiniteScroll 
                    onIonInfinite={handleIonInfiniteScroll}
                    >
                    <IonInfiniteScrollContent></IonInfiniteScrollContent>
                </IonInfiniteScroll>
            </>
                

}


import { IonPage, IonContent, IonHeader, IonTitle, IonToolbar, IonProgressBar } from '@ionic/react';

import { useFelaEnhanced } from 'hooks';
import { FC, Key, useEffect } from 'react';
import type { RulesExtend } from 'styles/theme';

import { favouriteCharactersIdsAtom } from 'modules/core/modules/jotai';
import * as felaRules from './Favourites.rules';
import { useAtom } from 'jotai';
import { useCharactersById } from 'modules/characters/hooks/useCharactersById';
import { CharacterCard } from 'components/CharacterCard';

export interface FavouritesProps {
    extend?: RulesExtend<typeof felaRules>;
}

export const Favourites: FC<FavouritesProps> = ({ extend }) => {
    const { styles } = useFelaEnhanced(felaRules, { extend });

    const [ favouriteCharacters ] = useAtom(favouriteCharactersIdsAtom)
    const { data, refetch, isLoading } = useCharactersById(favouriteCharacters);

    useEffect(() => {
        refetch()
    }, [favouriteCharacters])

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Favourite Characters</IonTitle>
                    {isLoading && <IonProgressBar type="indeterminate"></IonProgressBar>}
                </IonToolbar>
            </IonHeader>

            {!isLoading &&
            <IonContent>
                <IonHeader collapse='condense'>
                    <IonToolbar>
                        <IonTitle size='large'>Favourite Characters</IonTitle>
                    </IonToolbar>
                </IonHeader>

                        <div className={styles.favouritesContainer}>
                            {data?.charactersByIds.map(
                                (character, key: Key) => <CharacterCard key={key} characterData={character} />
                            )}
                        </div>

            </IonContent>
            }
        </IonPage>
    );
};

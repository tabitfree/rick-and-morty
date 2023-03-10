import { useFelaEnhanced } from 'hooks';

import type { RulesExtend } from 'styles/theme';
import * as felaRules from './CharacterPage.rules';
import { IonPage, IonHeader, IonTitle, IonContent, IonButtons, IonBackButton, IonToolbar} from '@ionic/react';
import { useParams } from 'react-router';
import { useOneCharacter } from 'modules/characters/hooks/useOneCharacter';
import { useAtom } from 'jotai';
import { favouriteCharactersIdsAtom } from 'modules/core/modules/jotai';
import { useState } from 'react';
import { CharacterInfo } from 'components/CharacterInfo';

export interface CharacterProps {
    extend?: RulesExtend<typeof felaRules>;
}

export const CharacterPage = ({ extend }: CharacterProps) => {
    const { styles } = useFelaEnhanced(felaRules, { extend });

    const { id } = useParams<{id:string}>();
    const { data } = useOneCharacter(id);

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>{data?.character?.name}</IonTitle>
                    <IonButtons slot="start">
                        <IonBackButton defaultHref='/' text="Characters"></IonBackButton>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent className={styles.container} >

            {data?.character && <CharacterInfo characterData={data.character} />}
                
            </IonContent>
        </IonPage>
    );
};

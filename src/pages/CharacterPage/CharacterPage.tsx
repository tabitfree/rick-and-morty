
import { IonPage, IonHeader, IonTitle, IonContent, IonButtons, IonBackButton, IonToolbar} from '@ionic/react';
import { useParams } from 'react-router';

import type { RulesExtend } from 'styles/theme';
import { useFelaEnhanced } from 'hooks';
import { useOneCharacter } from 'modules/characters/hooks/useOneCharacter';
import { CharacterInfo } from 'components/CharacterInfo';

import * as felaRules from './CharacterPage.rules';
import { FC, useEffect } from 'react';

export interface CharacterProps {
    extend?: RulesExtend<typeof felaRules>;
}

export const CharacterPage: FC<CharacterProps> = ({ extend }) => {
    const { styles } = useFelaEnhanced(felaRules, { extend });

    const { id } = useParams<{id:string}>();
    const { data, refetch } = useOneCharacter(id);

    useEffect(() => {
        refetch()
    }, [id])

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
            
            {data?.character && <CharacterInfo characterData={data?.character} />}
                
            </IonContent>
        </IonPage>
    );
};

import { useFelaEnhanced } from 'hooks';

import type { RulesExtend } from 'styles/theme';
import * as felaRules from './CharacterPage.rules';
import { IonButton, IonIcon, IonRippleEffect, IonPage, IonListHeader, IonLabel, IonItem, IonHeader, IonList, IonImg, IonTitle, IonContent, IonButtons, IonBackButton, IonToolbar} from '@ionic/react';
import { useParams } from 'react-router';
import { useOneCharacter } from 'modules/characters/hooks/useOneCharacter';
import { star, starOutline } from 'ionicons/icons';
import { useAtom } from 'jotai';
import { favouriteCharactersIdsAtom } from 'modules/core/modules/jotai';
import { useEffect, useState } from 'react';

export interface CharacterProps {
    extend?: RulesExtend<typeof felaRules>;
}

export const CharacterPage = ({ extend }: CharacterProps) => {
    const { styles } = useFelaEnhanced(felaRules, { extend });
    const [favouriteCharacters, setFavouriteCharacters] = useAtom(favouriteCharactersIdsAtom)

    const { id } = useParams<{id:string}>();
    const {data, isLoading, error} = useOneCharacter(id);
    const [isFavourite, setFavourite] = useState<boolean>(favouriteCharacters.indexOf(id) != -1);

    const handleFavClick = () => {
        const favChars = [...favouriteCharacters];
        const favIdx = favChars.indexOf(id);
        
        // if character is already favourite, remove
        if (favIdx != -1) {
            favChars.splice(favIdx, 1);
            setFavouriteCharacters([...favChars]);
        } else{ // character is not in favourite
            favChars.unshift(id);
        } 

        setFavourite(!isFavourite);
        setFavouriteCharacters([...favChars]);
    }
    
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

            {data?.character &&
            <IonContent className={styles.container} >
                <IonImg className={styles.image} src={data.character.image} alt={`Looks of ${data.character.name}`}></IonImg>

                <IonItem lines="full">
                    <IonLabel>
                        <h1>{data.character.name}</h1>
                        <p>{data.character.status}</p>
                    </IonLabel>
                    <IonButtons>
                        <IonButton slot="end" onClick={handleFavClick}>
                            <IonIcon icon={isFavourite ? star : starOutline} slot="icon-only"></IonIcon>
                        </IonButton>
                    </IonButtons>
                </IonItem>
                <IonList>
                    <IonListHeader>
                        <IonLabel>Information</IonLabel>
                    </IonListHeader>

                    <IonItem>
                        <IonLabel>Status</IonLabel>
                        <p>{data.character.status || "-"}</p>
                    </IonItem>
                    <IonItem>
                        <IonLabel>Species</IonLabel>
                        <p>{data.character.species || "-"}</p>
                    </IonItem>
                    <IonItem>
                        <IonLabel>Type</IonLabel>
                        <p>{data.character.type || "-"}</p>
                    </IonItem>
                    <IonItem>
                        <IonLabel>Gender</IonLabel>
                        <p>{data.character.gender || "-"}</p>
                    </IonItem>
                    <IonItem>
                        <IonLabel>Origin</IonLabel>
                        <p>{data.character.origin.name || "-"}</p>
                    </IonItem>
                    <IonItem lines='full'>
                        <IonLabel>Location</IonLabel>
                        <p>{data.character.location.name || "-"}</p>
                    </IonItem>
                    
                </IonList>
            </IonContent>}
        </IonPage>
    );
};

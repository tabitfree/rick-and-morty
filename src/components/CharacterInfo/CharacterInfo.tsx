import { FC } from "react";

import { useState } from "react";
import { useAtom } from "jotai";

import { favouriteCharactersIdsAtom } from "modules/core/modules/jotai";
import { IonIcon, IonImg, IonItem, IonLabel, IonButtons, IonButton, IonList, IonListHeader } from "@ionic/react";
import { star, starOutline } from 'ionicons/icons';
import { useFelaEnhanced } from "hooks";
import { RulesExtend } from "styles";

import * as felaRules from './CharacterInfo.rules'
import { CharacterQuery } from "modules/api";

export interface CharacterInfoProps {
    characterData: CharacterQuery['character'];
    extend?: RulesExtend<typeof felaRules>;
}

export const CharacterInfo: FC<CharacterInfoProps> = ({characterData, extend}) => {
    const {styles} = useFelaEnhanced(felaRules, {extend});

    const [ favouriteCharacters, setFavouriteCharacters ] = useAtom(favouriteCharactersIdsAtom)
    const [ isFavourite, setFavourite ] = useState<boolean>(favouriteCharacters.indexOf(characterData.id) != -1);

const handleFavClick = () => {
        const favChars = [ ...favouriteCharacters ];
        const favIdx = favChars.indexOf( characterData.id );
        
        // if character is already favourite, remove
        if (favIdx != -1) {
            favChars.splice(favIdx, 1);
        } else{ // character is not in favourite
            favChars.unshift(characterData.id);
        } 

        setFavourite(!isFavourite);
        setFavouriteCharacters([...favChars]);
    }

    return <div>
        <IonImg className={styles.image} src={characterData.image} alt={`Looks of ${characterData.name}`}></IonImg>

                <IonItem lines="full">
                    <IonLabel>
                        <h1 className={styles.title}>{characterData.name}</h1>
                        <p>{characterData.status}</p>
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
                        <p>{characterData.status || "-"}</p>
                    </IonItem>
                    <IonItem>
                        <IonLabel>Species</IonLabel>
                        <p>{characterData.species || "-"}</p>
                    </IonItem>
                    <IonItem>
                        <IonLabel>Type</IonLabel>
                        <p>{characterData.type || "-"}</p>
                    </IonItem>
                    <IonItem>
                        <IonLabel>Gender</IonLabel>
                        <p>{characterData.gender || "-"}</p>
                    </IonItem>
                    <IonItem>
                        <IonLabel>Origin</IonLabel>
                        <p>{characterData.origin.name || "-"}</p>
                    </IonItem>
                    <IonItem lines='full'>
                        <IonLabel>Location</IonLabel>
                        <p>{characterData.location.name || "-"}</p>
                    </IonItem>
                    
                </IonList>
    </div>
}


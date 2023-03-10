import { IonRouterLink } from "@ionic/react";
import { useFelaEnhanced } from "hooks";
import type { CharactersByIdsQueryResults } from "modules/api";
import { FC } from "react";
import { RulesExtend } from "styles";

import * as felaRules from './CharacterCardInfo.rules'


export interface CharacterCardProps {
    extend?: RulesExtend<typeof felaRules>;
    characterData: CharactersByIdsQueryResults[0];
}

export const CharacterCard: FC<CharacterCardProps> = ({ characterData, extend }) => {
    const { styles } = useFelaEnhanced(felaRules, { extend });

    return <IonRouterLink  routerDirection="forward" href={`/character/${characterData.id}`} className={styles.container} >
        <div className={styles.imgWrap}>
            <img className={styles.image} src={characterData.image} alt={`Image of ${characterData.name}`}/>
        </div>
        <h3 className={styles.title}>{characterData.name}</h3>
    </IonRouterLink>
}


import { useFelaEnhanced } from 'hooks';
import type { RulesExtend } from 'styles/theme';

import { useAllEpisodes } from 'modules/episodes';

import * as felaRules from './Episodes.rules';

export interface EpisodesProps {
    extend?: RulesExtend<typeof felaRules>;
}

export const Episodes = ({ extend }: EpisodesProps) => {
    const { styles } = useFelaEnhanced(felaRules, { extend });

    const { data, isSuccess } = useAllEpisodes();

    return (
        <div className={styles.container}>
            <h1>{`Rick and Morty currently has ${
                isSuccess ? data.episodes.info.count : null
            } episodes`}</h1>
        </div>
    );
};

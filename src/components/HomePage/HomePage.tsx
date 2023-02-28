import { useFelaEnhanced } from 'hooks';
import type { RulesExtend } from 'styles/theme';

import * as felaRules from './HomePage.rules';

export interface HomePageProps {
    extend?: RulesExtend<typeof felaRules>;
}

export const HomePage = ({ extend }: HomePageProps) => {
    const { styles } = useFelaEnhanced(felaRules, { extend });

    return (
        <div className={styles.container}>
            <h1>Hello World!</h1>
        </div>
    );
};

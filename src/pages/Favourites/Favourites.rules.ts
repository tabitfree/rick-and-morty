import type { TRuleWithTheme } from 'styles/theme';
import type { TRule } from 'fela';

export const container: TRuleWithTheme = ({ theme }) => ({
    padding: theme.widths.spacing16,
});

export const favouritesContainer: TRule = () => ({
    display: 'grid',
    gridTemplateColumns: 'repeat(6, 1fr)',
    '@media (max-width: 1000px)': {
        gridtemplateColums: 'repeat(4,1fr)',
    },
});

export const notFound: TRuleWithTheme = ({ theme }) => ({
    padding: theme.widths.spacing8,
});

import type { TRuleWithTheme } from 'styles/theme';

export const container: TRuleWithTheme = ({ theme }) => ({
    background: theme.background.main,
    padding: theme.widths.spacing16,
});

export const image: TRuleWithTheme = ({ theme }) => ({
    maxWidth: 500,
    overflow: 'hidden',
    marginBottom: 20,
    borderRadius: theme.border.radius14,
    margin: '20px 16px 15px',
});

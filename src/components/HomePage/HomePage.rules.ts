import type { TRuleWithTheme } from 'styles/theme';

export const container: TRuleWithTheme = ({ theme }) => ({
    background: theme.background.main,
    paddingLeft: theme.widths.spacing16,
    paddingRight: theme.widths.spacing16,
});

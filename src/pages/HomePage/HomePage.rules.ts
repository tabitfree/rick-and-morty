import type { TRuleWithTheme } from 'styles/theme';

export const container: TRuleWithTheme = ({ theme }) => ({});

export const page: TRuleWithTheme = ({ theme }) => ({
    paddingLeft: theme.widths.spacing16,
    paddingRight: theme.widths.spacing16,
});

export const title: TRuleWithTheme = ({ theme }) => ({
    padding: `0 0 ${theme.widths.spacing8}`,
});

export const search: TRuleWithTheme = ({ theme }) => ({
    padding: `0 0 ${theme.widths.spacing8}`,
});

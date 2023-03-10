import { TRuleWithTheme } from 'styles';

export const container: TRuleWithTheme = ({ theme }) => ({
    display: 'block',
    padding: theme.widths.spacing8,

    '&:hover h3': {
        color: theme.colors.side,
    },
});

export const notFound: TRuleWithTheme = ({ theme }) => ({
    padding: theme.widths.spacing8,
});

export const title: TRuleWithTheme = ({ theme }) => ({
    fontSize: theme.fontSizes.mdX,
    color: theme.colors.main,
    transiton: 'color .3s ease',
});

export const imgWrap: TRuleWithTheme = ({ theme }) => ({});

export const image: TRuleWithTheme = ({ theme }) => ({
    borderRadius: theme.border.radius12,
    display: 'block',
    width: '100%',
});

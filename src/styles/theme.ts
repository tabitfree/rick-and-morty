import type { TRule } from 'fela';

export const theme = {
    breakpoints: {
        xs: 320,
        s: 375,
        sm: 576,
        md: 768,
        lg: 992,
        lgr: 1024,
        xl: 1200,
    },
    widths: {
        spacing8: 8,
        spacing16: 16,
    },
    border: {
        radius: 4,
        radius6: 6,
        radius8: 8,
        radius12: 12,
        radius14: 14,
    },
    colors: {
        main: '#25252E',
        side: 'rgba(46, 46, 66, 0.6)',
        detail: 'rgba(26, 26, 66, 0.3)',
    },
};

export type Theme = typeof theme;

export type ThemeProps = { theme: Theme };

export type TRuleWithTheme<Props = {}> = TRule<ThemeProps & Props>;

export type RulesExtend<TExtandalbeRules, TProps = {}> = Partial<
    Record<keyof TExtandalbeRules, TRuleWithTheme<TProps>>
>;

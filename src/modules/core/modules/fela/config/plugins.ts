import felaPluginExtend from "fela-plugin-extend";
import felaPluginEmbedded from "fela-plugin-embedded";
import felaPluginPrefixer from "fela-plugin-prefixer";
import felaPluginPlaceholderPrefixer from "fela-plugin-placeholder-prefixer";
import felaPluginValidator from "fela-plugin-validator";
import felaPluginUnit from "fela-plugin-unit";
import felaPluginNamedKeys from "fela-plugin-named-keys";
import felaPluginFallbackValue from "fela-plugin-fallback-value";
import felaPluginExpandShorthand from "fela-plugin-expand-shorthand";

import type { ThemeProps } from "styles/theme";

const defaultUnit = "px";

const plugins = [
    felaPluginExtend(),
    felaPluginEmbedded(),
    felaPluginNamedKeys<ThemeProps>(({ theme }) => ({
        isMobileSmall: `@media (max-width: ${theme.breakpoints.s - 1}px)`,
        isMobile: `@media (max-width: ${theme.breakpoints.lg - 1}px)`,
        isTablet: `@media (min-width: ${theme.breakpoints.md}px)`,
        isTabletLarge: `@media (max-width: ${theme.breakpoints.lgr}px)`,
        isDesktop: `@media (min-width: ${theme.breakpoints.lg}px)`,
        supportsGrid: "@supports (display: grid)",
        notSupportsGrid: "@supports not (display: grid)",
    })),
    // The other of the plugins here is important
    // Check https://fela.js.org/docs/latest/extra/migration#12.0.0 for more info
    // :start:
    felaPluginUnit(defaultUnit, {
        fontSize: "rem",
        lineHeight: "em",
    }),
    felaPluginFallbackValue(),
    felaPluginPrefixer(),
    // :end:
    felaPluginPlaceholderPrefixer(),
    felaPluginExpandShorthand(true),
];

if (process.env.REACT_APP_IS_DEV_SERVER === "true") {
    plugins.push(
        felaPluginValidator({
            logInvalid: true,
            deleteInvalid: false,
            useCSSLint: false,
        })
    );
}

export default plugins;

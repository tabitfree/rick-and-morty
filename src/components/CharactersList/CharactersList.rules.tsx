import { TRule } from "fela"

import { TRuleWithTheme } from "styles"

export const container: TRuleWithTheme = ({theme}) => ({
    borderRadius: theme.border.radius14,
})

export const item: TRuleWithTheme = ({theme}) => ({
    '& a': {
        paddingLeft: theme.widths.spacing16,
        paddingInlineStart: theme.widths.spacing16
    }
})

export const itemTitle: TRule = () => ({
    whiteSpace: 'break-spaces'
})
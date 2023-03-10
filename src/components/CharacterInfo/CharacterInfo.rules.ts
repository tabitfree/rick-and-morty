import { TRule } from 'fela';
import { TRuleWithTheme } from 'styles';

export const image: TRuleWithTheme = ({ theme }) => ({
    maxWidth: 500,
    overflow: 'hidden',
    marginBottom: 20,
    borderRadius: theme.border.radius14,
    margin: '20px 16px 15px',
});

export const title: TRule = () => ({
    whiteSpace: 'break-spaces',
});

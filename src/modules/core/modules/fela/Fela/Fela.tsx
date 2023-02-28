import type { ReactNode } from 'react';
import { RendererProvider, ThemeProvider } from 'react-fela';
import type { ProviderProps } from 'react-fela';

import { theme } from 'styles/theme';

export interface FelaProps {
    children: ReactNode;
    renderer: ProviderProps['renderer'];
}

export const Fela = ({ children, renderer }: FelaProps) => (
    <RendererProvider renderer={renderer} rehydrate={false}>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </RendererProvider>
);

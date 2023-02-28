import { Provider } from 'jotai';

import type { ReactNode } from 'react';

export interface JotaiProps {
    children: ReactNode;
}

export const Jotai = ({ children }: JotaiProps) => (
    <Provider>{children}</Provider>
);

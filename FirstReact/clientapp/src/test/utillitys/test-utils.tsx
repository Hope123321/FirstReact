// https://testing-library.com/docs/react-testing-library/setup/#custom-render
import React, { FC, ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { UserProvider } from '../../contexts/UserContext';

const AllTheProviders: FC = ({ children }:any) => {
    return (
        <UserProvider >
            {children}
        </UserProvider>
    );
};

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) =>
    render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';
export { customRender as render };
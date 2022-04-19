import renderWithRouter from '../helpers/renderWithRouter'
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Login from '../pages/Login';

describe('Login Page tests', () => {

    it('should have a login input', () => {
        renderWithRouter(<Login />)
        const loginInput = screen.getByRole('textbox', {name: 'Name'})
        expect(loginInput).toBeInTheDocument()
    });

    it('should have a password input', () => {
        renderWithRouter(<Login />)
        const passwordInput = screen.getByLabelText(/password/i)
        expect(passwordInput).toBeInTheDocument()
    });

    it('should have a disabled signin button at first', () => {
        renderWithRouter(<Login />)
        const signInButton = screen.getByRole('button', {name: /sign in/i})
        expect(signInButton).toBeInTheDocument()
        expect(signInButton).toHaveAttribute('disabled')
    });

    it('should have the signIn available when fields properly filled', () => {
        renderWithRouter(<Login />)
        const loginInput = screen.getByRole('textbox', {name: 'Name'})
        const passwordInput = screen.getByLabelText(/password/i)
        const signInButton = screen.getByRole('button', {name: /sign in/i})
        userEvent.type(loginInput, 'michael scott')
        userEvent.type(passwordInput, 'scranton the electric city')
        expect(signInButton).not.toHaveAttribute('disabled')
    });

    it('should redirect to Search route when signIn button in clicked',async () => {
        const { history } = renderWithRouter(<Login />)
        const loginInput = screen.getByRole('textbox', {name: 'Name'})
        const passwordInput = screen.getByLabelText(/password/i)
        userEvent.type(loginInput, 'teste')
        userEvent.type(passwordInput, '12345678')
        const signInButton = screen.getByRole('button', {name: /sign in/i})
        expect(signInButton).not.toHaveAttribute('disabled')
        userEvent.click(signInButton)
        expect(history.location.pathname).toBe('/search')
    });

});


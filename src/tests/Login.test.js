import renderWithRouter from '../helpers/renderWithRouter'
const { screen } = require("@testing-library/react");
const { default: userEvent } = require("@testing-library/user-event");
const { default: Login } = require("../pages/Login");

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
        const signInButon = screen.getByRole('button', {name: /sign in/i})
        expect(signInButon).toBeInTheDocument()
        expect(signInButon).toHaveAttribute('disabled')
    });

    it('should have the signIn available when fields properly filled', () => {
        renderWithRouter(<Login />)
        const loginInput = screen.getByRole('textbox', {name: 'Name'})
        const passwordInput = screen.getByLabelText(/password/i)
        const signInButon = screen.getByRole('button', {name: /sign in/i})
        userEvent.type(loginInput, 'michael scott')
        userEvent.type(passwordInput, 'scranton the electric city')
        expect(signInButon).not.toHaveAttribute('disabled')
    });

    it('should redirect to Search route when signIn button in clicked',async () => {
        const { history } = renderWithRouter(<Login />)
        const loginInput = screen.getByRole('textbox', {name: 'Name'})
        const passwordInput = screen.getByLabelText(/password/i)
        userEvent.type(loginInput, 'michael scott')
        userEvent.type(passwordInput, 'scranton the electric city')
        const signInButon = screen.getByRole('button', {name: /sign in/i})
        userEvent.click(signInButon)
        /* const searchText = await screen.findByRole('heading', {level:1}) */
        console.log(history)
    });
});


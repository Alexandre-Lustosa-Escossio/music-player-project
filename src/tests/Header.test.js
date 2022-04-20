import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Header from '../components/Header';
import renderWithRouter from '../helpers/renderWithRouter'
const localStorageHandler= require('../utils/localStorageHandler')

describe('Header page tests', () => { 
    beforeEach(() => {
        jest.spyOn(localStorageHandler, 'getLocalStorage')
        .mockReturnValue({
            name: 'test name'
        })
    })
    it('should have three navigation links', () => {
        const AMOUNT_OF_LINKS = 3
        renderWithRouter(<Header />)
        const links = screen.getAllByRole('link')
        expect(links).toHaveLength(AMOUNT_OF_LINKS)
    });
    it('should have a link to the search page', () => {
        const CORRECT_PATH = '/search'
        const { history } = renderWithRouter(<Header />)
        const searchLink = screen.getByTestId('search-link')
        expect(searchLink).toBeInTheDocument()
        userEvent.click(searchLink)
        expect(history.location.pathname).toBe(CORRECT_PATH)
    });
    it('should have a link to the profile page', () => {
        const CORRECT_PATH = '/profile'
        const { history } = renderWithRouter(<Header />)
        const profileLink = screen.getByTestId('profile-link')
        expect(profileLink).toBeInTheDocument()
        userEvent.click(profileLink)
        expect(history.location.pathname).toBe(CORRECT_PATH)
    });
    it('should have a link to the favorites page', () => {
        const CORRECT_PATH = '/favorites'
        const { history } = renderWithRouter(<Header />)
        const favoritesLink = screen.getByTestId('favorites-link')
        expect(favoritesLink).toBeInTheDocument()
        userEvent.click(favoritesLink)
        expect(history.location.pathname).toBe(CORRECT_PATH)
    });
})
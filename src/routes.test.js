import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './paginas/Principal/App';

describe('Rotas', () => {
  test('Deve renderizar a rota principal', () => {
    render(<App />, {wrapper: BrowserRouter});
    const usuario = screen.getByText('Olá, Joana :)!');
    expect(usuario).toBeInTheDocument();
  });
});

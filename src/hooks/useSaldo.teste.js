import { act, renderHook } from '@testing-library/react';
import { buscaSaldo } from '../services/saldo';
import useSaldo from './useSaldo';

jest.mock('../services/saldo');

const mockSaldo = 
{
    valor: 50
}

describe('hooks/useSaldo.js', () => {
    test('Deve retornar o valor do saldo e uma função que o atualize', async () => {
        buscaSaldo.mockImplementation(() => mockSaldo);

        const { result } = renderHook(() => useSaldo());
        expect(result.current[0]).toEqual(0);

        await act(async () => {
            result.current[1]();
        });

        expect(result.current[0]).toEqual(mockSaldo.valor)
    });
});
import api from './api';
import { buscaSaldo } from './saldo';

jest.mock('./api');

const mockSaldo = {
    valor: 1000
}

const mockRequisicao = (retorno) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                data: retorno,
            });
        }, 200);
    });
};

const mockRequisicaoErro = () => {
    return new Promise((_, reject) => {
        setTimeout(() => {
            reject();
        }, 200);
    });
};

describe('Requisições para API de saldo', () => {
    test('Deve retornar uma lista de saldo', async () => {
        api.get.mockImplementation(() => mockRequisicao(mockSaldo));

        const saldo = await buscaSaldo();
        expect(saldo).toEqual(mockSaldo.valor);
        expect(api.get).toHaveBeenCalledWith('/saldo');
        expect(api.get).toHaveBeenCalledTimes(1);
    });

    test('Deve retornar uma lista vazia quando a requisição falhar', async () => {
        api.get.mockImplementation(() => mockRequisicaoErro());

        const saldo = await buscaSaldo();
        expect(saldo).toEqual(1000);
        expect(api.get).toHaveBeenCalledWith('/saldo');
        expect(api.get).toHaveBeenCalledTimes(1);
    });
});
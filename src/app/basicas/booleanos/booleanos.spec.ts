import { usuarioIngresado } from './booleanos';

describe('Pruebas con booleanos', () => {
	it('Debe de retornar true', () => {
		const res = usuarioIngresado();
		//expect(res).toBeTruthy();
		expect(res).not.toBeFalsy();
	});
});

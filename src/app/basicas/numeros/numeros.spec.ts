import { incrementar } from './numeros';

describe('Pruebas con numeros', () => {
	it('Debe regresar 100 si el numero es mayor a 100 ', () => {
		const res = incrementar(300);
		expect(res).toBe(100);
	});

	it('Debe regresar el numero mas uno cuando el numero es menor o igual a 100', () => {
		const res = incrementar(50);
		expect(res).toBe(51);
	});
});

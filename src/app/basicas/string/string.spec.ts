import { mensaje } from './string';

describe('Pruebas de String', () => {
	it('Debe de regresar un string', () => {
		const result = mensaje('Jose');

		expect(typeof result).toBe('string');
	});

	it('Debe de contener un nombre', () => {
		const nombre = 'Juan';
		const result = mensaje(nombre);

		//expect(result).toBe(`Saludos ${nombre}`);
		expect(result).toContain(nombre);
	});
});

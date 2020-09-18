import { FormularioRegister } from './formulario';
import { FormBuilder } from '@angular/forms';

describe('Pruebas en Formularios', () => {
	let componente: FormularioRegister;

	beforeEach(() => {
		componente = new FormularioRegister(new FormBuilder());
	});

	it('Debe de crear un formulario con 2 campos: email y password', () => {
		expect(componente.form.contains('email')).toBeTruthy();
		expect(componente.form.contains('password')).toBeTruthy();
	});

	it('El email debe de ser obligatorio', () => {
		const control = componente.form.get('email');
		control.setValue('');

		expect(control.valid).toBeFalsy();
	});

	it('El email debe de ser un correo valido', () => {
		const control = componente.form.get('email');
		control.setValue('jose@abc.com');

		expect(control.valid).toBeTruthy();
	});
});

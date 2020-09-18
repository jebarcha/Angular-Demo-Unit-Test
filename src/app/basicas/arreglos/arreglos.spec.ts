import { obtenerBots } from './arreglos';
xdescribe('Pruebas con arreglos', () => {
	it('Debe de retornar al menos 3 items', () => {
		const res = obtenerBots();
		expect(res.length).toBeGreaterThanOrEqual(3);
	});

	xit('El arreglo contiene a Ringo', () => {
		const res = obtenerBots();
		//expect(res.includes('Ringo')).toBeTruthy();
		expect(res).toContain('Ringo');
	});
});

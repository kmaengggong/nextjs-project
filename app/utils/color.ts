export function hexToRGBA(hex: string, alpha: number) {
	const r = parseInt(hex.slice(1, 3), 16);
	const g = parseInt(hex.slice(3, 5), 16);
	const b = parseInt(hex.slice(5, 7), 16);
	return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

export function hexToDarkColor(hex: string): string {
	let r = parseInt(hex.slice(1, 3), 16) - 0x44;
	let g = parseInt(hex.slice(3, 5), 16) - 0x44;
	let b = parseInt(hex.slice(5, 7), 16) - 0x33;

	r = Math.max(0, r);
	g = Math.max(0, g);
	b = Math.max(0, b);

	return (
		"#" +
		r.toString(16).padStart(2, "0") +
		g.toString(16).padStart(2, "0") +
		b.toString(16).padStart(2, "0")
	).toUpperCase();
}

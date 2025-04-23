export function formatDateLong(dateString: string) {
	const date = new Date(dateString);
	const pad = (n: number) => n.toString().padStart(2, "0");

	const year = date.getFullYear();
	const month = date.getMonth() + 1;
	const day = date.getDate();
	const hours = pad(date.getHours());
	const minutes = pad(date.getMinutes());

	return `${year}. ${month}. ${day}. ${hours}:${minutes}`;
}

export function formatDateShort(dateString: string) {
	const date = new Date(dateString);
	const pad = (n: number) => n.toString().padStart(2, "0");

	const year = date.getFullYear();
	const month = date.getMonth() + 1;
	const day = date.getDate();

	return `${year}. ${month}. ${day}.`;
}
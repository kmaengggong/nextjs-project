function toKSTDate(dateString: string): Date {
	const utcDate = new Date(dateString);
	return new Date(utcDate.getTime() + 9 * 60 * 60 * 1000);
}

export function formatDateLong(dateString: string) {
	const date = toKSTDate(dateString);
	const pad = (n: number) => n.toString().padStart(2, "0");

	const year = date.getFullYear();
	const month = pad(date.getMonth() + 1);
	const day = pad(date.getDate());
	const hours = pad(date.getHours());
	const minutes = pad(date.getMinutes());

	return `${year}. ${month}. ${day}. ${hours}:${minutes}`;
}

export function formatDateShort(dateString: string) {
	const date = toKSTDate(dateString);
	const pad = (n: number) => n.toString().padStart(2, "0");

	const year = date.getFullYear();
	const month = pad(date.getMonth() + 1);
	const day = pad(date.getDate());

	return `${year}. ${month}. ${day}.`;
}

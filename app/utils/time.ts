export function formatDateTime(dateString: string) {
	const date = new Date(dateString);
	const pad = (n: number) => n.toString().padStart(2, "0");

	const year = date.getFullYear();
	const month = date.getMonth() + 1;
	const day = date.getDate();
	const hours = pad(date.getHours());
	const minutes = pad(date.getMinutes());

	return `${year}. ${month}. ${day}. ${hours}:${minutes}`;
}

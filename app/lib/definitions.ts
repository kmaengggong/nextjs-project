export type Chara = {
	chara_id: string;
	color: string;
	created_at: string;
	updated_at: string;
};

export type CharaTrans = {
	chara_id: string;
	lang: "KR" | "EN" | "JP";
	full_name: string;
	short_name: string;
	description: string;
	created_at: string;
	updated_at: string;
};

export type CharaLinks = {
	chara_id: string;
	platform: string;
	url: string;
	created_at: string;
	updated_at: string;
};

export type Guest = {
	guest_id: string;
	chara_id: string;
	temp_name: string;
	ip_addr: string;
	content: string;
	created_at: string;
	updated_at: string;
};

export type GuestLikes = {
	guest_id: string;
	ip_addr: string;
	created_at: string;
	updated_at: string;
};

export type Stats = {
	stats_id: string;
	chara_a_id: string;
	chara_b_id: string;
	ip_addr: string;
	created_at: string;
	updated_at: string;
};

export type Notes = {
	notes_id: string;
	title: string;
	content: string;
	view: number;
	created_at: string;
	updated_at: string;
};

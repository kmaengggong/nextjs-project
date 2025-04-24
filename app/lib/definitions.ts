export type Bands = {
	bands_id: string;
	band_name: string;
	created_at: string;
	updated_at: string;
};

export type Chara = {
	chara_id: string;
	bands_id: string;
	color: string;
	chara_image: string;
	voice_image: string;
	created_at: string;
	updated_at: string;
};

export type CharaTrans = {
	chara_id: string;
	lang: "KR" | "EN" | "JP";
	first_name: string;
	last_name: string;
	short_name: string;
	voice_name: string;
	description: string;
	voice_description: string;
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

export type CharaDetail = {
	chara_id: string;
	color: string;
	chara_image: string;
	voice_image: string;
	band_name: string;
	first_name: string;
	last_name: string;
	short_name: string;
	voice_name: string;
	description: string;
	voice_description: string;
}

// export type CharaAll = {
// 	chara_id: string;
// 	image_file: string;
// 	color: string;
// 	first_name: string;
// 	last_name: string;
// 	short_name: string;
// 	description: string;
// }

export type Guest = {
	guest_id: string;
	chara_id: string;
	temp_name: string;
	ip_addr: string;
	content: string;
	created_at: string;
	updated_at: string;

	color: string;
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

export type StatsResult = {
	chara_pair: string;
	stats_count: number;
	chara_a_color: string;
	chara_b_color: string;
}

export type Notes = {
	notes_id: string;
	title: string;
	content: string;
	view: number;
	origin_url: string;
	created_at: string;
	updated_at: string;
};

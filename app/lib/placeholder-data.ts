const bands = [{ band_name: "MyGO!!!!!" }, { band_name: "Ave Mujica" }];

const charas = [
	{ color: "#77BBDD", chara_image: "fat_pepe.png", voice_image: "pepe_the_frog.png" },
	{ color: "#FF8899", chara_image: "fat_pepe.png", voice_image: "pepe_the_frog.png" },
	{ color: "#77DD77", chara_image: "fat_pepe.png", voice_image: "pepe_the_frog.png" },
	{ color: "#FFDD88", chara_image: "fat_pepe.png", voice_image: "pepe_the_frog.png" },
	{ color: "#7777AA", chara_image: "fat_pepe.png", voice_image: "pepe_the_frog.png" },
	{ color: "#BB9955", chara_image: "fat_pepe.png", voice_image: "pepe_the_frog.png" },
	{ color: "#779977", chara_image: "fat_pepe.png", voice_image: "pepe_the_frog.png" },
	{ color: "#335566", chara_image: "fat_pepe.png", voice_image: "pepe_the_frog.png" },
	{ color: "#AA4477", chara_image: "fat_pepe.png", voice_image: "pepe_the_frog.png" },
	{ color: "#7799CC", chara_image: "fat_pepe.png", voice_image: "pepe_the_frog.png" },
];

const chara_trans_kr = [
	{
		lang: "KR",
		first_name: "KRTomori",
		last_name: "KRTakamatsu",
		short_name: "KRTomo",
		voice_name: "temp_voice_name",
		description: "KRStone Girl",
		voice_description: "temp_voice_description"
	},
	{
		lang: "KR",
		first_name: "KRAnon",
		last_name: "KRChihaya",
		short_name: "KRAnon",
		voice_name: "temp_voice_name",
		description: "KRHwangnon Tokyo",
		voice_description: "temp_voice_description"
	},
	{
		lang: "KR",
		first_name: "KRRana",
		last_name: "KRKaname",
		short_name: "KRRana",
		voice_name: "temp_voice_name",
		description: "KRDoraneko",
		voice_description: "temp_voice_description"
	},
	{
		lang: "KR",
		first_name: "KRSoyo",
		last_name: "KRNagasaki",
		short_name: "KRSoyo",
		voice_name: "temp_voice_name",
		description: "KRNande Haruhikage Yattano",
		voice_description: "temp_voice_description"
	},
	{
		lang: "KR",
		first_name: "KRTaki",
		last_name: "KRShiina",
		short_name: "KRTaki",
		voice_name: "temp_voice_name",
		description: "KRCrazy Les",
		voice_description: "temp_voice_description"
	},
	{
		lang: "KR",
		first_name: "KRUika",
		last_name: "KRMisumi",
		short_name: "KRUi",
		voice_name: "temp_voice_name",
		description: "KRSakichan",
		voice_description: "temp_voice_description"
	},
	{
		lang: "KR",
		first_name: "KRMutsumi",
		last_name: "KRWakaba",
		short_name: "KRMutsu",
		voice_name: "temp_voice_name",
		description: "KRMortis",
		voice_description: "temp_voice_description"
	},
	{
		lang: "KR",
		first_name: "KRUmiri",
		last_name: "KRYahata",
		short_name: "KRUmi",
		voice_name: "temp_voice_name",
		description: "KRCrazy Les Les",
		voice_description: "temp_voice_description"
	},
	{
		lang: "KR",
		first_name: "KRNyamu",
		last_name: "KRYūtenji",
		short_name: "KRNyamu",
		voice_name: "temp_voice_name",
		description: "KRBuntangneko",
		voice_description: "temp_voice_description"
	},
	{
		lang: "KR",
		first_name: "KRSakiko",
		last_name: "KRTogawa",
		short_name: "KRSaki",
		voice_name: "temp_voice_name",
		description: "KRTogawa Group",
		voice_description: "temp_voice_description"
	},
];

const chara_trans_en = [
	{
		lang: "EN",
		first_name: "Tomori",
		last_name: "Takamatsu",
		short_name: "Tomo",
		voice_name: "temp_voice_name",
		description: "Stone Girl",
		voice_description: "temp_voice_description"
	},
	{
		lang: "EN",
		first_name: "Anon",
		last_name: "Chihaya",
		short_name: "Anon",
		voice_name: "temp_voice_name",
		description: "Hwangnon Tokyo",
		voice_description: "temp_voice_description"
	},
	{
		lang: "EN",
		first_name: "Rana",
		last_name: "Kaname",
		short_name: "Rana",
		voice_name: "temp_voice_name",
		description: "Doraneko",
		voice_description: "temp_voice_description"
	},
	{
		lang: "EN",
		first_name: "Soyo",
		last_name: "Nagasaki",
		short_name: "Soyo",
		voice_name: "temp_voice_name",
		description: "Nande Haruhikage Yattano",
		voice_description: "temp_voice_description"
	},
	{
		lang: "EN",
		first_name: "Taki",
		last_name: "Shiina",
		short_name: "Taki",
		voice_name: "temp_voice_name",
		description: "Crazy Les",
		voice_description: "temp_voice_description"
	},
	{
		lang: "EN",
		first_name: "Uika",
		last_name: "Misumi",
		short_name: "Ui",
		voice_name: "temp_voice_name",
		description: "Sakichan",
		voice_description: "temp_voice_description"
	},
	{
		lang: "EN",
		first_name: "Mutsumi",
		last_name: "Wakaba",
		short_name: "Mutsu",
		voice_name: "temp_voice_name",
		description: "Mortis",
		voice_description: "temp_voice_description"
	},
	{
		lang: "EN",
		first_name: "Umiri",
		last_name: "Yahata",
		short_name: "Umi",
		voice_name: "temp_voice_name",
		description: "Crazy Les Les",
		voice_description: "temp_voice_description"
	},
	{
		lang: "EN",
		first_name: "Nyamu",
		last_name: "Yūtenji",
		short_name: "Nyamu",
		voice_name: "temp_voice_name",
		description: "Buntangneko",
		voice_description: "temp_voice_description"
	},
	{
		lang: "EN",
		first_name: "Sakiko",
		last_name: "Togawa",
		short_name: "Saki",
		voice_name: "temp_voice_name",
		description: "Togawa Group",
		voice_description: "temp_voice_description"
	},
];

const chara_trans_jp = [
	{
		lang: "JP",
		first_name: "JPTomori",
		last_name: "JPTakamatsu",
		short_name: "JPTomo",
		voice_name: "temp_voice_name",
		description: "JPStone Girl",
		voice_description: "temp_voice_description"
	},
	{
		lang: "JP",
		first_name: "JPAnon",
		last_name: "JPChihaya",
		short_name: "JPAnon",
		voice_name: "temp_voice_name",
		description: "JPHwangnon Tokyo",
		voice_description: "temp_voice_description"
	},
	{
		lang: "JP",
		first_name: "JPRana",
		last_name: "JPKaname",
		short_name: "JPRana",
		voice_name: "temp_voice_name",
		description: "JPDoraneko",
		voice_description: "temp_voice_description"
	},
	{
		lang: "JP",
		first_name: "JPSoyo",
		last_name: "JPNagasaki",
		short_name: "JPSoyo",
		voice_name: "temp_voice_name",
		description: "JPNande Haruhikage Yattano",
		voice_description: "temp_voice_description"
	},
	{
		lang: "JP",
		first_name: "JPTaki",
		last_name: "JPShiina",
		short_name: "JPTaki",
		voice_name: "temp_voice_name",
		description: "JPCrazy Les",
		voice_description: "temp_voice_description"
	},
	{
		lang: "JP",
		first_name: "JPUika",
		last_name: "JPMisumi",
		short_name: "JPUi",
		voice_name: "temp_voice_name",
		description: "JPSakichan",
		voice_description: "temp_voice_description"
	},
	{
		lang: "JP",
		first_name: "JPMutsumi",
		last_name: "JPWakaba",
		short_name: "JPMutsu",
		voice_name: "temp_voice_name",
		description: "JPMortis",
		voice_description: "temp_voice_description"
	},
	{
		lang: "JP",
		first_name: "JPUmiri",
		last_name: "JPYahata",
		short_name: "JPUmi",
		voice_name: "temp_voice_name",
		description: "JPCrazy Les Les",
		voice_description: "temp_voice_description"
	},
	{
		lang: "JP",
		first_name: "JPNyamu",
		last_name: "JPYūtenji",
		short_name: "JPNyamu",
		voice_name: "temp_voice_name",
		description: "JPBuntangneko",
		voice_description: "temp_voice_description"
	},
	{
		lang: "JP",
		first_name: "JPSakiko",
		last_name: "JPTogawa",
		short_name: "JPSaki",
		voice_name: "temp_voice_name",
		description: "JPTogawa Group",
		voice_description: "temp_voice_description"
	},
];

const chara_links = [
	{
		platform: "X",
		url: "www.google.com",
	},
	{
		platform: "Instagram",
		url: "www.naver.com",
	},
	{
		platform: "Other",
		url: "www.vercel.com",
	},
];

const guests = [
	{
		temp_name: "Topyeong",
		ip_addr: "127.0.0.1",
		content: "I like Tomori...",
	},
	{
		temp_name: "KingNonTokyo",
		ip_addr: "127.0.0.2",
		content: "Anon Tokyo bro.",
	},
	{
		temp_name: "Ranana",
		ip_addr: "127.0.0.3",
		content: "Doraneko kawaii!",
	},
	{
		temp_name: "NandeYattano",
		ip_addr: "127.0.0.4",
		content: "Soyoring love~",
	},
	{
		temp_name: "NoTomoTaki",
		ip_addr: "127.0.0.5",
		content: "UmiTaki is right.",
	},
];

const stats = [
	{
		chara_a_idx: 1,
		chara_b_idx: 3,
		ip_addr: "127.0.0.1",
	},
	{
		chara_a_idx: 0,
		chara_b_idx: 4,
		ip_addr: "127.0.0.2",
	},
	{
		chara_a_idx: 1,
		chara_b_idx: 3,
		ip_addr: "127.0.0.3",
	},
	{
		chara_a_idx: 1,
		chara_b_idx: 3,
		ip_addr: "127.0.0.4",
	},
	{
		chara_a_idx: 0,
		chara_b_idx: 2,
		ip_addr: "127.0.0.5",
	},
];

const notes = [
	{
		title: "MyGO!!!!! x Ave Mujica Next Anime",
		content: "Bushiroad is on the road.",
		origin_url: "www.naver.com",
	},
	{
		title: "Haruhikage vs Imprisoned",
		content:
			"Conclusion: Both songs are good as god. Conclusion: Both songs are good as god. Conclusion: Both songs are good as god. Conclusion: Both songs are good as god. Conclusion: Both songs are good as god. Conclusion: Both songs are good as god. Conclusion: Both songs are good as god. Conclusion: Both songs are good as god.",
			origin_url: "www.naver.com",
	},
	{
		title: "ESP Soyo GB tone 3 sunburst",
		content: "Let's buy it with Anon's",
		origin_url: "www.naver.com",
	},
	{
		title: "MyGO!!!!! x Ave Mujica Next Anime",
		content: "Bushiroad is on the road.",
		origin_url: "www.naver.com",
	},
	{
		title: "Haruhikage vs Imprisoned",
		content: "Conclusion: Both songs are good as god",
		origin_url: "www.naver.com",
	},
	{
		title: "ESP Soyo GB tone 3 sunburst",
		content: "Let's buy it with Anon's",
		origin_url: "www.naver.com",
	},
	{
		title: "MyGO!!!!! x Ave Mujica Next Anime",
		content: "Bushiroad is on the road.",
		origin_url: "www.naver.com",
	},
	{
		title: "Haruhikage vs Imprisoned",
		content: "Conclusion: Both songs are good as god",
		origin_url: "www.naver.com",
	},
	{
		title: "ESP Soyo GB tone 3 sunburst",
		content: "Let's buy it with Anon's",
		origin_url: "www.naver.com",
	},
	{
		title: "MyGO!!!!! x Ave Mujica Next Anime",
		content: "Bushiroad is on the road.",
		origin_url: "www.naver.com",
	},
	{
		title: "Haruhikage vs Imprisoned",
		content: "Conclusion: Both songs are good as god",
		origin_url: "www.naver.com",
	},
	{
		title: "ESP Soyo GB tone 3 sunburst",
		content: "Let's buy it with Anon's",
		origin_url: "www.naver.com",
	},
];

export {
	bands,
	charas,
	chara_trans_kr,
	chara_trans_en,
	chara_trans_jp,
	chara_links,
	guests,
	stats,
	notes,
};

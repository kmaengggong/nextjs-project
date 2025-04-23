const charas = [
	{ color: "#77BBDD" },
	{ color: "#FF8899" },
	{ color: "#77DD77" },
	{ color: "#FFDD88" },
	{ color: "#7777AA" },
	{ color: "#BB9955" },
	{ color: "#779977" },
	{ color: "#335566" },
	{ color: "#AA4477" },
	{ color: "#7799CC" },
];

const chara_trans_kr = [
	{
		lang: "KR",
		first_name: "KRTomori",
		last_name: "KRTakamatsu",
		short_name: "KRTomo",
		description: "KRStone Girl",
	},
	{
		lang: "KR",
		first_name: "KRAnon",
		last_name: "KRChihaya",
		short_name: "KRAnon",
		description: "KRHwangnon Tokyo",
	},
	{
		lang: "KR",
		first_name: "KRRana",
		last_name: "KRKaname",
		short_name: "KRRana",
		description: "KRDoraneko",
	},
	{
		lang: "KR",
		first_name: "KRSoyo",
		last_name: "KRNagasaki",
		short_name: "KRSoyo",
		description: "KRNande Haruhikage Yattano",
	},
	{
		lang: "KR",
		first_name: "KRTaki",
		last_name: "KRShiina",
		short_name: "KRTaki",
		description: "KRCrazy Les",
	},
	{
		lang: "KR",
		first_name: "KRUika",
		last_name: "KRMisumi",
		short_name: "KRUi",
		description: "KRSakichan",
	},
	{
		lang: "KR",
		first_name: "KRMutsumi",
		last_name: "KRWakaba",
		short_name: "KRMutsu",
		description: "KRMortis",
	},
	{
		lang: "KR",
		first_name: "KRUmiri",
		last_name: "KRYahata",
		short_name: "KRUmi",
		description: "KRCrazy Les Les",
	},
	{
		lang: "KR",
		first_name: "KRNyamu",
		last_name: "KRYūtenji",
		short_name: "KRNyamu",
		description: "KRBuntangneko",
	},
	{
		lang: "KR",
		first_name: "KRSakiko",
		last_name: "KRTogawa",
		short_name: "KRSaki",
		description: "KRTogawa Group",
	},
];

const chara_trans_en = [
	{
		lang: "EN",
		first_name: "Tomori",
		last_name: "Takamatsu",
		short_name: "Tomo",
		description: "Stone Girl",
	},
	{
		lang: "EN",
		first_name: "Anon",
		last_name: "Chihaya",
		short_name: "Anon",
		description: "Hwangnon Tokyo",
	},
	{
		lang: "EN",
		first_name: "Rana",
		last_name: "Kaname",
		short_name: "Rana",
		description: "Doraneko",
	},
	{
		lang: "EN",
		first_name: "Soyo",
		last_name: "Nagasaki",
		short_name: "Soyo",
		description: "Nande Haruhikage Yattano",
	},
	{
		lang: "EN",
		first_name: "Taki",
		last_name: "Shiina",
		short_name: "Taki",
		description: "Crazy Les",
	},
	{
		lang: "EN",
		first_name: "Uika",
		last_name: "Misumi",
		short_name: "Ui",
		description: "Sakichan",
	},
	{
		lang: "EN",
		first_name: "Mutsumi",
		last_name: "Wakaba",
		short_name: "Mutsu",
		description: "Mortis",
	},
	{
		lang: "EN",
		first_name: "Umiri",
		last_name: "Yahata",
		short_name: "Umi",
		description: "Crazy Les Les",
	},
	{
		lang: "EN",
		first_name: "Nyamu",
		last_name: "Yūtenji",
		short_name: "Nyamu",
		description: "Buntangneko",
	},
	{
		lang: "EN",
		first_name: "Sakiko",
		last_name: "Togawa",
		short_name: "Saki",
		description: "Togawa Group",
	},
];

const chara_trans_jp = [
	{
		lang: "JP",
		first_name: "JPTomori",
		last_name: "JPTakamatsu",
		short_name: "JPTomo",
		description: "JPStone Girl",
	},
	{
		lang: "JP",
		first_name: "JPAnon",
		last_name: "JPChihaya",
		short_name: "JPAnon",
		description: "JPHwangnon Tokyo",
	},
	{
		lang: "JP",
		first_name: "JPRana",
		last_name: "JPKaname",
		short_name: "JPRana",
		description: "JPDoraneko",
	},
	{
		lang: "JP",
		first_name: "JPSoyo",
		last_name: "JPNagasaki",
		short_name: "JPSoyo",
		description: "JPNande Haruhikage Yattano",
	},
	{
		lang: "JP",
		first_name: "JPTaki",
		last_name: "JPShiina",
		short_name: "JPTaki",
		description: "JPCrazy Les",
	},
	{
		lang: "JP",
		first_name: "JPUika",
		last_name: "JPMisumi",
		short_name: "JPUi",
		description: "JPSakichan",
	},
	{
		lang: "JP",
		first_name: "JPMutsumi",
		last_name: "JPWakaba",
		short_name: "JPMutsu",
		description: "JPMortis",
	},
	{
		lang: "JP",
		first_name: "JPUmiri",
		last_name: "JPYahata",
		short_name: "JPUmi",
		description: "JPCrazy Les Les",
	},
	{
		lang: "JP",
		first_name: "JPNyamu",
		last_name: "JPYūtenji",
		short_name: "JPNyamu",
		description: "JPBuntangneko",
	},
	{
		lang: "JP",
		first_name: "JPSakiko",
		last_name: "JPTogawa",
		short_name: "JPSaki",
		description: "JPTogawa Group",
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
	},
	{
		title: "Haruhikage vs Imprisoned",
		content: "Conclusion: Both songs are good as god",
	},
	{
		title: "ESP Soyo GB tone 3 sunburst",
		content: "Let's buy it with Anon's",
	},
];

export { charas, chara_trans_kr, chara_trans_en, chara_trans_jp, chara_links, guests, stats, notes };

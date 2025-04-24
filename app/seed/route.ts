import { db } from "@vercel/postgres";
import {
	bands,
	charas,
	chara_trans_kr,
	chara_trans_en,
	chara_trans_jp,
	chara_links,
	guests,
	notes,
	stats,
} from "../lib/placeholder-data";
import { NextRequest } from "next/server";
import { Bands, Chara } from "../lib/definitions";

const client = await db.connect();

async function seedBands() {
	await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

	await client.sql`
		CREATE TABLE IF NOT EXISTS BANDS (
			BANDS_ID UUID DEFAULT UUID_GENERATE_V4() PRIMARY KEY,
			BAND_NAME TEXT,
			CREATED_AT TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
			UPDATED_AT TIMESTAMP DEFAULT CURRENT_TIMESTAMP
		)
	`;

	const result = await client.sql`SELECT COUNT(*) FROM BANDS`;
	const count = Number(result.rows[0].count);
	if (count > 0) return;

	const insertedBands = await Promise.all(
		bands.map(async (band) => {
			return client.sql`
				INSERT INTO BANDS (BAND_NAME)
				VALUES (${band.band_name})
			`;
		})
	);

	return insertedBands;
}

async function seedChara() {
	await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

	await client.sql`
		CREATE TABLE IF NOT EXISTS CHARA (
			CHARA_ID UUID DEFAULT UUID_GENERATE_V4() PRIMARY KEY,
			BANDS_ID UUID,
			COLOR VARCHAR(7),
			CHARA_IMAGE TEXT,
			VOICE_IMAGE TEXT,
			CREATED_AT TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
			UPDATED_AT TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

			CONSTRAINT FK_BANDS FOREIGN KEY (BANDS_ID) REFERENCES BANDS(BANDS_ID)
		)
	`;

	const result = await client.sql`SELECT COUNT(*) FROM CHARA`;
	const count = Number(result.rows[0].count);
	if (count > 0) return;

	const resultBands = await client.sql<Bands>`SELECT * FROM BANDS`;
	const bands = resultBands.rows;
	if (bands.length < 1) return;

	const insertedChara = await Promise.all(
		charas.map(async (chara, index) => {
			const bandsId = index < 5 ? bands[0].bands_id : bands[1].bands_id;
			return client.sql`
				INSERT INTO CHARA (BANDS_ID, COLOR, CHARA_IMAGE, VOICE_IMAGE)
				VALUES (${bandsId}, ${chara.color}, ${chara.chara_image}, ${chara.voice_image})
			`;
		})
	);

	return insertedChara;
}

async function seedCharaTrans() {
	await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

	await client.sql`
		CREATE TABLE IF NOT EXISTS CHARA_TRANS (
			CHARA_ID UUID NOT NULL,
			LANG CHAR(2) CHECK (LANG IN ('KR', 'EN', 'JP')),
			FIRST_NAME TEXT,
			LAST_NAME TEXT,
			SHORT_NAME TEXT,
			VOICE_NAME TEXT,
			DESCRIPTION TEXT,
			VOICE_DESCRIPTION TEXT,
			CREATED_AT TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
			UPDATED_AT TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

			PRIMARY KEY (CHARA_ID, LANG),
			CONSTRAINT FK_CHARA FOREIGN KEY (CHARA_ID) REFERENCES CHARA(CHARA_ID)
		)
	`;

	const result = await client.sql`SELECT COUNT(*) FROM CHARA_TRANS`;
	const count = Number(result.rows[0].count);
	if (count > 0) return;

	const resultChara = await client.sql<Chara>`SELECT * FROM CHARA`;
	const charas = resultChara.rows;
	if (charas.length < 1) return;

	const insertedCharaLinks = await Promise.all([
		chara_trans_kr.map(async (trans, i) => {
			return client.sql`
				INSERT INTO CHARA_TRANS (
					CHARA_ID,
					LANG,
					FIRST_NAME,
					LAST_NAME,
					SHORT_NAME,
					VOICE_NAME,
					DESCRIPTION,
					VOICE_DESCRIPTION
				)
				VALUES (
					${charas[i].chara_id},
					${"KR"},
					${trans.first_name},
					${trans.last_name},
					${trans.short_name},
					${trans.voice_name},
					${trans.description},
					${trans.voice_description}
				)
			`;
		}), 
		chara_trans_en.map(async (trans, i) => {
			return client.sql`
				INSERT INTO CHARA_TRANS (
					CHARA_ID,
					LANG,
					FIRST_NAME,
					LAST_NAME,
					SHORT_NAME,
					VOICE_NAME,
					DESCRIPTION,
					VOICE_DESCRIPTION
				)
				VALUES (
					${charas[i].chara_id},
					${"EN"},
					${trans.first_name},
					${trans.last_name},
					${trans.short_name},
					${trans.voice_name},
					${trans.description},
					${trans.voice_description}
				)
			`;
		}),
		chara_trans_jp.map(async (trans, i) => {
			return client.sql`
				INSERT INTO CHARA_TRANS (
					CHARA_ID,
					LANG,
					FIRST_NAME,
					LAST_NAME,
					SHORT_NAME,
					VOICE_NAME,
					DESCRIPTION,
					VOICE_DESCRIPTION
				)
				VALUES (
					${charas[i].chara_id},
					${"JP"},
					${trans.first_name},
					${trans.last_name},
					${trans.short_name},
					${trans.voice_name},
					${trans.description},
					${trans.voice_description}
				)
			`;
		})
	]);

	return insertedCharaLinks;
}

async function seedCharaLinks() {
	await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

	await client.sql`
		CREATE TABLE IF NOT EXISTS CHARA_LINKS (
			CHARA_ID UUID NOT NULL,
			PLATFORM TEXT NOT NULL,
			URL TEXT NOT NULL,
			CREATED_AT TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
			UPDATED_AT TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
			
			PRIMARY KEY (CHARA_ID, PLATFORM),
			CONSTRAINT FK_CHARA FOREIGN KEY (CHARA_ID) REFERENCES CHARA(CHARA_ID)
		)
	`;

	const result = await client.sql`SELECT COUNT(*) FROM CHARA_LINKS`;
	const count = Number(result.rows[0].count);
	if (count > 0) return;

	const resultChara = await client.sql<Chara>`SELECT * FROM CHARA`;
	const charas = resultChara.rows;
	if (charas.length < 1) return;

	const insertedCharaLinks = await Promise.all(
		chara_links.map(async (link, i) => {
			return client.sql`
				INSERT INTO CHARA_LINKS (CHARA_ID, PLATFORM, URL)
				VALUES (${charas[i].chara_id}, ${link.platform}, ${link.url})
			`;
		})
	);

	return insertedCharaLinks;
}

async function seedGuest() {
	await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

	await client.sql`
		CREATE TABLE IF NOT EXISTS GUEST (
			GUEST_ID UUID DEFAULT UUID_GENERATE_V4() PRIMARY KEY,
			CHARA_ID UUID NOT NULL,
			TEMP_NAME TEXT NOT NULL,
			IP_ADDR INET NOT NULL,
			CONTENT TEXT NOT NULL,
			CREATED_AT TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
			UPDATED_AT TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

			CONSTRAINT FK_CHARA FOREIGN KEY (CHARA_ID) REFERENCES CHARA(CHARA_ID),
			CONSTRAINT CHK_CONTENT_LENGTH CHECK (CHAR_LENGTH(CONTENT) <= 200)
		)
	`;

	const result = await client.sql`SELECT COUNT(*) FROM GUEST`;
	const count = Number(result.rows[0].count);
	if (count > 0) return;

	const resultChara = await client.sql<Chara>`SELECT * FROM CHARA`;
	const charas = resultChara.rows;
	if (charas.length < 5) return;

	const insertedGuest = await Promise.all(
		guests.map(async (guests, i) => {
			return client.sql`
				INSERT INTO GUEST (CHARA_ID, TEMP_NAME, IP_ADDR, CONTENT)
				VALUES (
					${charas[i].chara_id},
					${guests.temp_name},
					${guests.ip_addr},
					${guests.content}
				)
			`;
		})
	);

	return insertedGuest;
}

async function seedGuestLikes() {
	await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

	await client.sql`
		CREATE TABLE IF NOT EXISTS GUEST_LIKES (
			GUEST_ID UUID NOT NULL,
			IP_ADDR INET NOT NULL,
			CREATED_AT TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
			UPDATED_AT TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

			PRIMARY KEY (GUEST_ID, IP_ADDR),
			CONSTRAINT FK_GUEST FOREIGN KEY (GUEST_ID) REFERENCES GUEST(GUEST_ID)
		)
	`;
}

async function seedStats() {
	await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

	await client.sql`
		CREATE TABLE IF NOT EXISTS STATS (
			STATS_ID UUID DEFAULT UUID_GENERATE_V4() PRIMARY KEY,
			CHARA_A_ID UUID NOT NULL,
			CHARA_B_ID UUID NOT NULL,
			IP_ADDR INET NOT NULL,
			CREATED_AT TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
			UPDATED_AT TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

			CONSTRAINT FK_CHARA_A FOREIGN KEY (CHARA_A_ID) REFERENCES CHARA(CHARA_ID),
			CONSTRAINT FK_CHARA_B FOREIGN KEY (CHARA_B_ID) REFERENCES CHARA(CHARA_ID),
			CONSTRAINT CHK_DIFFERENT_CHARS CHECK (CHARA_A_ID <> CHARA_B_ID)
		)
	`;

	const result = await client.sql`SELECT COUNT(*) FROM STATS`;
	const count = Number(result.rows[0].count);
	if (count > 0) return [];

	const resultChara = await client.sql`SELECT * FROM CHARA`;
	const charas = resultChara.rows;
	if (charas.length < 5) return;

	const insertedStats = await Promise.all(
		stats.map(async (stat) => {
			return client.sql`
				INSERT INTO STATS (CHARA_A_ID, CHARA_B_ID, IP_ADDR)
				VALUES (
					${charas[stat.chara_a_idx].chara_id},
					${charas[stat.chara_b_idx].chara_id},
					${stat.ip_addr}
				)
			`;
		})
	);

	return insertedStats;
}

async function seedNotes() {
	await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

	await client.sql`
		CREATE TABLE IF NOT EXISTS NOTES (
			NOTES_ID UUID DEFAULT UUID_GENERATE_V4() PRIMARY KEY,
			TITLE TEXT NOT NULL,
			CONTENT TEXT NOT NULL,
			VIEW INT DEFAULT 0,
			ORIGIN_URL TEXT,
			CREATED_AT TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
			UPDATED_AT TIMESTAMP DEFAULT CURRENT_TIMESTAMP
		)
	`;

	const result = await client.sql`SELECT COUNT(*) FROM NOTES`;
	const count = Number(result.rows[0].count);
	if (count > 0) return [];

	const insertedNotes = await Promise.all(
		notes.map(async (note) => {
			return client.sql`
				INSERT INTO NOTES (TITLE, CONTENT, ORIGIN_URL)
				VALUES (${note.title}, ${note.content}, ${note.origin_url})
			`;
		})
	);

	return insertedNotes;
}

export async function GET(req: NextRequest) {
	try {
		await client.sql`BEGIN`;
		await seedBands();
		await seedChara();
		await seedCharaTrans();
		await seedCharaLinks();
		await seedGuest();
		await seedGuestLikes();
		await seedStats();
		await seedNotes();
		await client.sql`COMMIT`;

		return Response.json({ message: "Database seeded successfully" });
	} catch (error) {
		await client.sql`ROLLBACK`;
		return Response.json({ error }, { status: 500 });
	}
}

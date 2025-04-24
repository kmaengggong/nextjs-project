import { CharaDetail } from "@/app/lib/definitions";
import { sql } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
	try {
		const { searchParams } = new URL(req.url);
		const lang = searchParams.get("lang") ?? "EN";

		const data = await sql<CharaDetail>`
			SELECT
				C.CHARA_ID,
				C.COLOR,
				C.CHARA_IMAGE,
				C.VOICE_IMAGE,
				B.BAND_NAME,
				T.FIRST_NAME,
				T.LAST_NAME,
				T.SHORT_NAME,
				T.VOICE_NAME,
				T.DESCRIPTION,
				T.VOICE_DESCRIPTION
			FROM CHARA AS C
			INNER JOIN BANDS AS B ON C.BANDS_ID = B.BANDS_ID
			INNER JOIN CHARA_TRANS AS T ON C.CHARA_ID = T.CHARA_ID
			WHERE T.LANG = ${lang}
		`;

		return NextResponse.json(data.rows);
	} catch (error) {
		console.error("API Error: ", error);
		return NextResponse.json({ message: "Database error" }, { status: 500 });
	}
}

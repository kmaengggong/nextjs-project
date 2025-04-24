import { NextRequest, NextResponse } from "next/server";
import { sql } from "@vercel/postgres";
import { StatsResult } from "@/app/lib/definitions";

export async function GET(req: NextRequest) {
	try {
		const { searchParams } = new URL(req.url);
		const lang = searchParams.get("lang") ?? "EN";
		const col = searchParams.get("col") ?? "COUNT";
		let data;

		if (col === "NAME") {
			data = await sql<StatsResult>`
				SELECT
					CONCAT(CT1.SHORT_NAME, CT2.SHORT_NAME) AS CHARA_PAIR,
					C1.COLOR AS CHARA_A_COLOR,
					C2.COLOR AS CHARA_B_COLOR,
					COUNT(S.STATS_ID) AS STATS_COUNT
				FROM
					STATS AS S
					INNER JOIN CHARA AS C1 ON S.CHARA_A_ID = C1.CHARA_ID
					INNER JOIN CHARA AS C2 ON S.CHARA_B_ID = C2.CHARA_ID
					INNER JOIN CHARA_TRANS AS CT1 ON C1.CHARA_ID = CT1.CHARA_ID
						AND CT1.LANG = ${lang}
					INNER JOIN CHARA_TRANS AS CT2 ON C2.CHARA_ID = CT2.CHARA_ID
						AND CT2.LANG = ${lang}
				GROUP BY
					S.CHARA_A_ID,
					S.CHARA_B_ID,
					CT1.SHORT_NAME,
					CT2.SHORT_NAME,
					C1.COLOR,
					C2.COLOR
				ORDER BY CHARA_PAIR ASC
			`;
		} else {
			data = await sql<StatsResult>`
				SELECT
					CONCAT(CT1.SHORT_NAME, CT2.SHORT_NAME) AS CHARA_PAIR,
					C1.COLOR AS CHARA_A_COLOR,
					C2.COLOR AS CHARA_B_COLOR,
					COUNT(S.STATS_ID) AS STATS_COUNT
				FROM
					STATS AS S
					INNER JOIN CHARA AS C1 ON S.CHARA_A_ID = C1.CHARA_ID
					INNER JOIN CHARA AS C2 ON S.CHARA_B_ID = C2.CHARA_ID
					INNER JOIN CHARA_TRANS AS CT1 ON C1.CHARA_ID = CT1.CHARA_ID
						AND CT1.LANG = ${lang}
					INNER JOIN CHARA_TRANS AS CT2 ON C2.CHARA_ID = CT2.CHARA_ID
						AND CT2.LANG = ${lang}
				GROUP BY
					S.CHARA_A_ID,
					S.CHARA_B_ID,
					CT1.SHORT_NAME,
					CT2.SHORT_NAME,
					C1.COLOR,
					C2.COLOR
				ORDER BY STATS_COUNT DESC
			`;
		}

		return NextResponse.json(data.rows);
	} catch (error) {
		console.error("API Error: ", error);
		return NextResponse.json({ message: "Database error" }, { status: 500 });
	}
}

// export async function POST(req: NextRequest) {
// 	try {
// 		const formData = await req.formData();
// 		const charaAId = formData.get("charaAId") as string;
// 		const charaBId = formData.get("charaBId") as string;
// 		const ipAddr = await getClientIP();

// 		if (!charaAId || !charaBId) {
// 			return NextResponse.json({ message: "Invalid input" }, { status: 400 });
// 		}

// 		await sql`
// 			INSERT INTO STATS (CHARA_A_ID, CHARA_B_ID, IP_ADDR, UPDATED_AT)
// 			VALUES (${charaAId}, ${charaBId}, ${ipAddr}, CURRENT_TIMESTAMP)
// 		`;

// 		return NextResponse.json({ message: "Success" }, { status: 200 });
// 	} catch (error) {
// 		console.error("API Error: ", error);
// 		return NextResponse.json({ message: "Database error" }, { status: 500 });
// 	}
// }

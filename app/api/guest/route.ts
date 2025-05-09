import { Guest } from "@/app/lib/definitions";
import { getClientIP } from "@/app/utils/request";
import { sql } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
	try {
		const data = await sql<Guest>`
			SELECT G.*, C.COLOR
			FROM GUEST AS G
			INNER JOIN CHARA AS C ON C.CHARA_ID = G.CHARA_ID
		`;
		return NextResponse.json(data.rows);
	} catch (error) {
		console.error("API Error: ", error);
		return NextResponse.json({ message: "Database error" }, { status: 500 });
	}
}

export async function POST(req: NextRequest){
	try{
		const body = await req.json();
		const charaId = body.chara_id;
		const tempName = body.temp_name;
		const content = body.content;
		const ipAddr = await getClientIP();

		await sql`
			INSERT INTO GUEST (CHARA_ID, TEMP_NAME, IP_ADDR, CONTENT)
			VALUES (${charaId}, ${tempName}, ${ipAddr}, ${content})
		`;

		return NextResponse.json({ message: "Success" }, { status: 200 });
	} catch(error){
		console.error("API Error: ", error);
		return NextResponse.json({ message: "Database error" }, { status: 500 });
	}
}
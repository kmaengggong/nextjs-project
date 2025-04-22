import { Notes } from "@/app/lib/definitions";
import { sql } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
	try {
		const id = req.nextUrl.pathname.split("/").pop();

		const data = await sql<Notes>`
			SELECT *
			FROM NOTES
			WHERE NOTES_ID = ${id}
			LIMIT 1
		`;

		return NextResponse.json(data.rows[0]);
	} catch (error) {
		console.error("API Error: ", error);
		return NextResponse.json({ message: "Database error" }, { status: 500 });
	}
}

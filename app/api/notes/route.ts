import { Notes } from "@/app/lib/definitions";
import { sql } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
	try {
		const data = await sql<Notes>`
			SELECT * FROM NOTES
		`;
		return NextResponse.json(data.rows);
	} catch (error) {
		console.error("API Error: ", error);
		return NextResponse.json({ message: "Database error" }, { status: 500 });
	}
}

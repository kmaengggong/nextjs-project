import { Notes } from "@/app/lib/definitions";
import { sql } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
	try {
		const { searchParams } = new URL(req.url);
		const page = parseInt(searchParams.get("page") || "1");
		const limit = parseInt(searchParams.get("limit") || "5");
		const offset = (page - 1) * limit;

		const data = await sql<Notes>`
			SELECT * FROM notes
			ORDER BY updated_at DESC
			LIMIT ${limit}
			OFFSET ${offset}
		`;

		const countResult = await sql`SELECT COUNT(*) FROM notes`;
		const totalCount = Number(countResult.rows[0].count);

		return NextResponse.json({
			notes: data.rows,
			totalCount,
		});
	} catch (error) {
		console.error("API Error: ", error);
		return NextResponse.json({ message: "Database error" }, { status: 500 });
	}
}

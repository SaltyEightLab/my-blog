import { supabase } from "@/utils/spabaseClient";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

export async function GET(req: Request, res: NextApiResponse) {
    const { data, error } = await supabase.from("Posts").select("*");

    if(error) {
        return NextResponse.json(error);
    }

    return NextResponse.json(data, { status: 200});
};

export async function POST(req: Request, res: NextApiResponse) {
    const {id, title, content } = await req.json();

    const { data, error } = await supabase
      .from("Posts")
      .insert([{id, title, content, createdAt: new Date().toISOString() }])

    if(error) {
        return NextResponse.json(error);
    }

    return NextResponse.json(data, { status: 201});
};
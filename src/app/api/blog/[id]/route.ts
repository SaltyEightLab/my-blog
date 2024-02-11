import { supabase } from "@/utils/spabaseClient";
import { NextApiRequest, NextApiResponse } from "next";
import { notFound } from "next/navigation";
import { NextResponse } from "next/server";

export async function GET(req: Request, res: NextApiResponse) {
  const id = req.url.split("/blog/")[1];

  const { data, error } = await supabase
    .from("Posts")
    .select("*")
    .eq("id", id)
    .single();

  if (!data) {
    notFound();
  }

  if (error) {
    return NextResponse.json(error);
  }

  return NextResponse.json(data, { status: 200 });
}

export async function DELETE(req: Request, res: NextApiResponse) {
  const id = req.url.split("/blog/")[1];

  const { error } = await supabase
    .from("Posts")
    .delete()
    .eq("id", id)

  if (error) {
    return NextResponse.json(error);
  }

  return NextResponse.json({ status: 200 });
}

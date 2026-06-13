import type { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const apiKey = process.env.ABACATE_PAY_API_KEY;
  if (!apiKey) {
    return Response.json({ error: "API key not configured" }, { status: 500 });
  }

  const id = request.nextUrl.searchParams.get("id");
  if (!id) {
    return Response.json({ error: "Missing payment id" }, { status: 400 });
  }

  try {
    const res = await fetch(`https://api.abacatepay.com/v2/transparents/check?id=${encodeURIComponent(id)}`, {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    });

    const data = await res.json();

    if (!res.ok) {
      return Response.json({ error: data.error ?? "Failed to check payment" }, { status: res.status });
    }

    return Response.json({
      status: data.data.status,
      id: data.data.id,
    });
  } catch {
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
}

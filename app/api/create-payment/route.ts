export async function POST() {
  const apiKey = process.env.ABACATE_PAY_API_KEY;
  if (!apiKey) {
    return Response.json({ error: "API key not configured" }, { status: 500 });
  }

  try {
    const res = await fetch("https://api.abacatepay.com/v2/transparents/create", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        method: "PIX",
        data: {
          amount: 899,
          description: "CV Fácil - Download do Currículo",
          expiresIn: 1800,
        },
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      return Response.json({ error: data.error ?? "Failed to create payment" }, { status: res.status });
    }

    return Response.json({
      id: data.data.id,
      brCode: data.data.brCode,
      brCodeBase64: data.data.brCodeBase64,
      status: data.data.status,
      expiresAt: data.data.expiresAt,
    });
  } catch {
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
}

import { NextResponse } from "next/server";

type ContactPayload = {
  name: string;
  budget: string;
  email: string;
  phone: string;
  message: string;
  services: string[];
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Partial<ContactPayload>;
    const webhookUrl = process.env.DISCORD_WEBHOOK_URL;
    const discordUserId = process.env.DISCORD_USER_ID;

    if (!webhookUrl) {
      return NextResponse.json({ error: "Brak konfiguracji webhooka." }, { status: 500 });
    }

    if (!body.name || !body.email || !body.message || !body.budget) {
      return NextResponse.json({ error: "Uzupelnij wymagane pola." }, { status: 400 });
    }

    const servicesText = body.services && body.services.length > 0 ? body.services.join(", ") : "Brak";
    const mention = discordUserId ? `<@${discordUserId}>` : "";

    const payload = {
      content: mention,
      allowed_mentions: discordUserId ? { users: [discordUserId] } : undefined,
      embeds: [
        {
          title: "Nowe zapytanie z formularza",
          description: "Przyszla nowa wiadomosc ze strony.",
          color: 8342256,
          fields: [
            { name: "Imie", value: body.name, inline: true },
            { name: "Budzet", value: body.budget, inline: true },
            { name: "Email", value: body.email, inline: false },
            { name: "Telefon", value: body.phone || "Brak", inline: true },
            { name: "Uslugi", value: servicesText, inline: false },
            { name: "Wiadomosc", value: body.message, inline: false },
          ],
          footer: {
            text: "Afto • Formularz kontaktowy",
          },
          timestamp: new Date().toISOString(),
        },
      ],
    };

    const discordResponse = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!discordResponse.ok) {
      return NextResponse.json({ error: "Nie udalo sie wyslac wiadomosci." }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Nieprawidlowe dane formularza." }, { status: 400 });
  }
}

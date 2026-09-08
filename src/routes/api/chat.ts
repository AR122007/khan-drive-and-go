import { createFileRoute } from "@tanstack/react-router";
import { convertToModelMessages, streamText, type UIMessage } from "ai";

import { createLovableAiGatewayProvider } from "@/lib/ai-gateway.server";

const SYSTEM_PROMPT = `You are the booking assistant for KHAN MOTORS & TOURS, a rent-a-car and tours company in Pakistan.

Fleet and daily rates (Pakistani Rupees, per day):
- Toyota Corolla (Sedan, 5 seats, automatic, petrol) — Rs 6,000
- Honda Civic (Sport Sedan, 5 seats, automatic, petrol) — Rs 8,500
- Toyota Fortuner (SUV, 7 seats, automatic, diesel) — Rs 15,000
- Land Cruiser V8 (Luxury 4x4, 7 seats, automatic, diesel) — Rs 25,000
- Toyota Hiace (Tour Van, 13 seats, manual, diesel) — Rs 12,000
- Suzuki Cultus (Compact, 5 seats, manual, petrol) — Rs 4,500

Facts: cars available with or without a driver; all insured and serviced; open 24/7; doorstep delivery; special weekly and monthly rates; services include northern-area tours, city tours, weddings and airport transfers.

Contact: phone +92 321 4067150, WhatsApp https://wa.me/923214067150, TikTok @farrukhkhan216.

Rules:
- Help visitors pick a vehicle, estimate costs, and understand services.
- Keep answers short, warm and practical. Use simple English (or Urdu if the visitor writes in Urdu).
- Never invent availability, discounts or exact confirmations — ask the visitor to confirm the booking by calling or WhatsApp'ing +92 321 4067150.
- Stay on the topic of car rentals and tours with KHAN MOTORS & TOURS.`;

export const Route = createFileRoute("/api/chat")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const { messages } = (await request.json()) as { messages?: unknown };
        if (!Array.isArray(messages)) {
          return new Response("Messages are required", { status: 400 });
        }

        const key = process.env["LOVABLE_API_KEY"];
        if (!key) {
          return new Response("Missing LOVABLE_API_KEY", { status: 500 });
        }

        const gateway = createLovableAiGatewayProvider(key);
        const result = streamText({
          model: gateway("google/gemini-3.8-flash"),
          system: SYSTEM_PROMPT,
          messages: await convertToModelMessages(messages as UIMessage[]),
        });

        return result.toUIMessageStreamResponse({
          originalMessages: messages as UIMessage[],
        });
      },
    },
  },
});

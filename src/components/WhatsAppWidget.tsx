"use client";

import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "91XXXXXXXXXX"; // TODO: Replace with actual WhatsApp number
const WHATSAPP_MESSAGE = "Hi! I'm interested in Kamala Farms services.";

export default function WhatsAppWidget() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-transform hover:scale-110"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );
}

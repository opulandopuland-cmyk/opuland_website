import { ENUMs } from "@/lib/enums";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppFloat = () => {
  return (
    <a
      href={ENUMs.GLOBAL.WHATSAPP_URL}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 end-6 z-50 flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg hover:scale-105 hover:bg-[#1ebe57] transition-all">
      <FaWhatsapp className="size-7" />
    </a>
  );
};

export default WhatsAppFloat;

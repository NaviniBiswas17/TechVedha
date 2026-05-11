'use client'

export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/15551234567"
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition-transform duration-300 hover:scale-105"
    >
      <span className="whatsapp-ping absolute inset-0 rounded-full bg-[#25D366]/35" />
      <span className="whatsapp-ping-delayed absolute inset-0 rounded-full bg-[#25D366]/20" />
      <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366]">
        <svg viewBox="0 0 32 32" className="h-7 w-7 fill-current" aria-hidden="true">
          <path d="M19.11 17.23c-.27-.13-1.58-.78-1.83-.87-.24-.09-.42-.13-.6.14-.18.27-.69.87-.84 1.05-.16.18-.31.2-.58.07-.27-.13-1.12-.41-2.14-1.3-.79-.71-1.33-1.58-1.49-1.85-.16-.27-.02-.41.12-.54.12-.12.27-.31.4-.47.13-.16.18-.27.27-.45.09-.18.04-.34-.02-.47-.07-.13-.6-1.45-.82-1.99-.22-.53-.44-.45-.6-.46h-.51c-.18 0-.47.07-.71.34-.24.27-.93.91-.93 2.22 0 1.3.96 2.57 1.09 2.75.13.18 1.87 2.85 4.52 3.99.63.27 1.12.43 1.5.55.63.2 1.21.17 1.66.1.51-.08 1.58-.64 1.81-1.27.22-.63.22-1.18.16-1.28-.07-.1-.24-.16-.51-.29Z" />
          <path d="M16.02 3.2c-7.05 0-12.78 5.7-12.78 12.71 0 2.24.59 4.44 1.7 6.37L3.12 28.8l6.7-1.75a12.87 12.87 0 0 0 6.19 1.57h.01c7.04 0 12.79-5.71 12.79-12.73 0-3.39-1.32-6.58-3.72-8.97A12.72 12.72 0 0 0 16.02 3.2Zm0 23.28h-.01a10.7 10.7 0 0 1-5.45-1.49l-.39-.23-3.98 1.04 1.06-3.88-.26-.4a10.55 10.55 0 0 1-1.63-5.61c0-5.86 4.8-10.62 10.69-10.62 2.85 0 5.52 1.1 7.54 3.11a10.52 10.52 0 0 1 3.13 7.5c0 5.87-4.8 10.63-10.7 10.63Z" />
        </svg>
      </span>
    </a>
  )
}

/**
 * WhatsApp integration constants and utility functions.
 */

export const WHATSAPP_PHONE_NUMBER = '919945228752';

export const WHATSAPP_PREDEFINED_MESSAGE =
  'Hi Detailing Monster, I would like to book an appointment for my car detailing service. Please share the available slots and details.';

/**
 * Generates standard WhatsApp click-to-chat URL with properly encoded message.
 */
export const getWhatsAppUrl = (
  phone: string = WHATSAPP_PHONE_NUMBER,
  message: string = WHATSAPP_PREDEFINED_MESSAGE
): string => {
  const cleanPhone = phone.replace(/[^0-9]/g, '');
  const encodedText = encodeURIComponent(message);
  return `https://wa.me/${cleanPhone}?text=${encodedText}`;
};

export const WHATSAPP_BOOKING_URL = getWhatsAppUrl(
  WHATSAPP_PHONE_NUMBER,
  WHATSAPP_PREDEFINED_MESSAGE
);

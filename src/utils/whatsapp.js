import { siteConfig } from '../data/siteConfig';

/**
 * Builds a WhatsApp enquiry URL with pre-filled message.
 * @param {string} [subject] - Optional interest, e.g. "Laptops & Desktops".
 * @param {string[]} [items] - Optional example items to include in the message.
 * @returns {string} Fully encoded wa.me URL.
 */
export const buildWhatsAppEnquiryUrl = (subject, items = []) => {
  let message = 'Hi Elvate!';

  if (subject) {
    message += ` I would like to enquire about ${subject}`;
    if (items.length > 0) {
      message += ` (e.g. ${items.join(', ')})`;
    }
    message += '.';
  } else {
    message += ' I would like to enquire about your IT services and products.';
  }

  return `${siteConfig.whatsappLink}?text=${encodeURIComponent(message)}`;
};

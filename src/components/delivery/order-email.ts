import type { DeliveryMethod, PostalAddress } from "./delivery";

export const ORDER_EMAIL = "wierszoterapie@gmail.com";

type OrderEmailData = {
  bookTitle: string;
  dedication: string;
  method: DeliveryMethod;
  address: PostalAddress;
  notes: string;
};

export const createOrderEmail = ({
  bookTitle,
  dedication,
  method,
  address,
  notes,
}: OrderEmailData) => {
  const recipient = `${address.name.trim()} ${address.surname.trim()}`;
  const subject = `Zamówienie książki „${bookTitle}” z dedykacją`;
  const apartment = address.apartment?.trim();
  const deliveryAddress =
    method === "parcel-locker"
      ? [
          `Paczkomat: ${address.paczkomat?.trim().toUpperCase() ?? ""}`,
          `Miejscowość: ${address.city.trim()}`,
        ]
      : [
          `${address.street.trim()} ${address.building.trim()}${apartment ? `/${apartment}` : ""}`,
          `${address.postalCode.trim()} ${address.city.trim()}`,
          address.country.trim(),
        ];
  const body = [
    "Dzień dobry,",
    "",
    `proszę o przesłanie książki „${bookTitle}” z dedykacją.`,
    `Dedykacja dla: ${dedication.trim()}`,
    `Forma dostawy: ${method === "parcel-locker" ? "Paczkomat InPost" : "Przesyłka kurierska"}`,
    "",
    `Odbiorca: ${recipient}`,
    `Telefon: +${address.areaCode.trim()} ${address.phone.trim()}`,
    ...deliveryAddress,
    ...(notes.trim() ? ["", "Uwagi:", notes.trim()] : []),
    "",
    "Proszę o informację o kosztach i sposobie płatności.",
    "",
    "Pozdrawiam,",
    recipient,
  ].join("\r\n");

  return {
    body,
    href: `mailto:${ORDER_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`,
  };
};

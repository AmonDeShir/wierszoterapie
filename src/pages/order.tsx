import { useEffect, useRef, useState } from "react";
import { type PageProps, type HeadProps, graphql } from "gatsby";
import { Page } from "../components/page/page";
import { SEO } from "../components/seo/seo";
import { NavBar } from "../components/nav/nav";
import { Button } from "../components/button/button";
import {
  Delivery,
  type DeliveryMethod,
  type PostalAddress,
} from "../components/delivery/delivery";
import {
  createOrderEmail,
  ORDER_EMAIL,
} from "../components/delivery/order-email";
import { getBook } from "../data/books";
import { homeLinks as pages } from "../data/navigation";

const inputClasses =
  "mt-2 block w-full rounded-lg border border-dark/20 bg-secondary px-3 py-2.5 text-base transition-colors hover:border-primary/60 focus:border-primary focus:outline-2 focus:outline-offset-2 focus:outline-primary/30";
const secondaryButtonClasses =
  "inline-flex min-h-10 items-center justify-center rounded-full border border-dark/20 px-5 py-2 font-ui text-sm transition-colors hover:border-primary hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary";

const OrderPage = ({ location }: PageProps) => {
  const book = getBook(new URLSearchParams(location.search).get("book"));
  const [dedication, setDedication] = useState("");
  const [method, setMethod] = useState<DeliveryMethod>("courier");
  const [notes, setNotes] = useState("");
  const [address, setAddress] = useState<PostalAddress>();
  const [showPreview, setShowPreview] = useState(false);
  const [copyStatus, setCopyStatus] = useState("");
  const dedicationRef = useRef<HTMLInputElement>(null);
  const previewTitleRef = useRef<HTMLHeadingElement>(null);
  const email =
    showPreview && address
      ? createOrderEmail({
          bookTitle: book.title,
          dedication,
          method,
          address,
          notes,
        })
      : undefined;

  useEffect(() => {
    if (showPreview) previewTitleRef.current?.focus();
    else if (address) dedicationRef.current?.focus();
  }, [showPreview]);

  const handleGenerate = (value: PostalAddress) => {
    setAddress(value);
    setCopyStatus("");
    setShowPreview(true);
  };

  const handleCopy = async () => {
    if (!email) return;
    try {
      await navigator.clipboard.writeText(email.body);
      setCopyStatus("Treść wiadomości została skopiowana.");
    } catch {
      setCopyStatus(
        "Nie udało się skopiować automatycznie. Proszę zaznaczyć i skopiować treść wiadomości poniżej.",
      );
    }
  };

  return (
    <Page>
      <NavBar selected="" pages={pages} useLinks />
      <section
        aria-labelledby="order-title"
        className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-8 sm:px-6 lg:grid-cols-3 lg:gap-12 lg:py-12"
      >
        <aside className="flex items-center gap-5 lg:sticky lg:top-24 lg:flex-col lg:items-start lg:self-start">
          <img
            src={book.image}
            width={book.imageWidth}
            height={book.imageHeight}
            alt={`Okładka książki „${book.title}” Patrycji Purgał`}
            className="w-24 shrink-0 shadow-sm sm:w-32 lg:w-full lg:max-w-64"
          />
          <div className="space-y-2">
            <p className="text-sm">Patrycja Purgał</p>
            <h2 className="font-ui text-xl font-medium text-primary">
              {book.title}
            </h2>
            <p className="text-sm leading-relaxed text-dark/70">
              Książka z osobistą dedykacją autorki.
            </p>
          </div>
        </aside>

        <div className="min-w-0 space-y-6 lg:col-span-2">
          <header className="space-y-3">
            <h1
              id="order-title"
              className="font-ui text-2xl font-medium leading-snug text-primary sm:text-3xl"
            >
              Zamów książkę z dedykacją
            </h1>
            <p className="text-base leading-relaxed text-dark/80">
              Formularz służy do przygotowania wiadomości do autorki. Gotową
              wiadomość można wysłać za pomocą własnej poczty na adres{" "}
              <a
                className="break-words text-primary underline underline-offset-4"
                href={`mailto:${ORDER_EMAIL}`}
              >
                {ORDER_EMAIL}
              </a>
              .
            </p>
          </header>
          <ol
            aria-label="Etapy zamówienia"
            className="flex flex-wrap gap-x-6 gap-y-2 font-ui text-sm"
          >
            <li
              aria-current={!showPreview ? "step" : undefined}
              className={
                !showPreview ? "font-medium text-primary" : "text-dark/60"
              }
            >
              1. Dane zamówienia
            </li>
            <li
              aria-current={showPreview ? "step" : undefined}
              className={
                showPreview ? "font-medium text-primary" : "text-dark/60"
              }
            >
              2. Gotowa wiadomość
            </li>
          </ol>

          <div className="rounded-2xl border border-dark/10 bg-secondary p-5 sm:p-8">
            <div hidden={showPreview}>
              <Delivery method={method} onGenerate={handleGenerate}>
                <fieldset className="min-w-0 space-y-5">
                  <legend className="mb-4 font-ui text-lg font-medium">
                    Dedykacja i dostawa
                  </legend>
                  <label
                    className="block text-sm font-medium"
                    htmlFor="dedication"
                  >
                    Komu wpisać dedykację?
                    <input
                      id="dedication"
                      ref={dedicationRef}
                      name="dedication"
                      className={inputClasses}
                      type="text"
                      placeholder="np. Annie Kowalskiej"
                      required
                      pattern={".*\\S.*"}
                      value={dedication}
                      onChange={(event) => setDedication(event.target.value)}
                      aria-describedby="dedication-help"
                    />
                  </label>
                  <p id="dedication-help" className="text-sm text-dark/60">
                    Proszę podać imię lub imię i nazwisko w formie, która ma pojawić
                    się w dedykacji.
                  </p>
                  <fieldset>
                    <legend className="mb-2 text-sm font-medium">
                      Forma dostawy
                    </legend>
                    <div className="grid gap-3 sm:grid-cols-2">
                      {(
                        [
                          ["courier", "Kurier", "Dostawa pod wskazany adres"],
                          [
                            "parcel-locker",
                            "Paczkomat InPost",
                            "Odbiór w wybranym paczkomacie",
                          ],
                        ] as const
                      ).map(([value, title, description]) => (
                        <label
                          key={value}
                          className={`flex cursor-pointer items-start gap-3 rounded-xl border p-4 transition-colors ${method === value ? "border-primary bg-primary/5" : "border-dark/20 hover:border-primary/60"}`}
                        >
                          <input
                            type="radio"
                            name="delivery-method"
                            value={value}
                            checked={method === value}
                            onChange={() => setMethod(value)}
                            className="mt-1 size-4 shrink-0 accent-primary"
                          />
                          <span>
                            <span className="block font-ui text-sm">
                              {title}
                            </span>
                            <span className="mt-1 block text-sm text-dark/60">
                              {description}
                            </span>
                          </span>
                        </label>
                      ))}
                    </div>
                  </fieldset>
                  <label
                    className="block text-sm font-medium"
                    htmlFor="order-notes"
                  >
                    Uwagi{" "}
                    <span className="font-normal text-dark/60">
                      (opcjonalnie)
                    </span>
                    <textarea
                      id="order-notes"
                      name="notes"
                      className={`${inputClasses} min-h-24 resize-y`}
                      rows={3}
                      placeholder="Dodatkowe informacje do zamówienia"
                      value={notes}
                      onChange={(event) => setNotes(event.target.value)}
                    />
                  </label>
                </fieldset>
              </Delivery>
            </div>

            {showPreview && email && (
              <section
                aria-labelledby="email-preview-title"
                className="space-y-6"
              >
                <div className="space-y-2">
                  <h2
                    id="email-preview-title"
                    ref={previewTitleRef}
                    tabIndex={-1}
                    className="font-ui text-lg font-medium"
                  >
                    Wiadomość jest gotowa
                  </h2>
                  <p className="text-sm leading-relaxed text-dark/70">
                    Proszę sprawdzić poprawność danych. Gotową wiadomość można
                    otworzyć w programie pocztowym lub skopiować jej treść.
                  </p>
                  <p className="text-sm">
                    Do:{" "}
                    <a
                      className="break-words text-primary underline underline-offset-4"
                      href={`mailto:${ORDER_EMAIL}`}
                    >
                      {ORDER_EMAIL}
                    </a>
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-3">
                  <Button bigger href={email.href} className="m-0! max-w-full">
                    Otwórz w poczcie
                  </Button>
                  <button
                    type="button"
                    onClick={handleCopy}
                    className={secondaryButtonClasses}
                  >
                    Kopiuj treść
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowPreview(false)}
                    className={secondaryButtonClasses}
                  >
                    Edytuj dane
                  </button>
                </div>
                <p role="status" className="text-sm text-primary empty:hidden">
                  {copyStatus}
                </p>
                <pre className="rounded-xl bg-dark/5 p-4 font-text text-sm leading-relaxed whitespace-pre-wrap break-words sm:p-5">
                  {email.body}
                </pre>
              </section>
            )}
          </div>
        </div>
      </section>
    </Page>
  );
};

export default OrderPage;

interface DataType {
  site: { siteMetadata: { siteUrl: string } };
}

export function Head({ data, location }: HeadProps<DataType>) {
  return (
    <SEO
      url={`${data.site.siteMetadata.siteUrl}${location.pathname}`}
      title="— Zamów książkę z dedykacją"
      description="Zamów książkę Patrycji Purgał z osobistą dedykacją. Przygotuj wiadomość do autorki i wybierz formę dostawy."
    >
      <html lang="pl" />
    </SEO>
  );
}

export const query = graphql`
  {
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`;

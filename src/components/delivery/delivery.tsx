import type { ReactNode } from "react";
import { useForm } from "react-hook-form";
import { dialingCodes, countries } from "../../data/delivery-options";
import { SubmitButton } from "../button/button";

export type DeliveryMethod = "courier" | "parcel-locker";

export type PostalAddress = {
  name: string;
  surname: string;
  areaCode: string;
  phone: string;
  country: string;
  street: string;
  building: string;
  apartment: string;
  postalCode: string;
  city: string;
  paczkomat?: string;
};

type Props = {
  method: DeliveryMethod;
  onGenerate: (address: PostalAddress) => void;
  children?: ReactNode;
};

const inputClasses =
  "mt-2 block w-full rounded-lg border border-dark/20 bg-secondary px-3 py-2.5 text-base transition-colors hover:border-primary/60 focus:border-primary focus:outline-2 focus:outline-offset-2 focus:outline-primary/30";
const labelClasses = "block min-w-0 text-sm font-medium";
const nonBlankPattern = ".*\\S.*";

export const Delivery = ({ method, onGenerate, children }: Props) => {
  const { register, handleSubmit } = useForm<PostalAddress>({
    shouldUnregister: true,
    defaultValues: { areaCode: "48", country: "Polska" },
  });
  const isParcelLocker = method === "parcel-locker";

  return (
    <form className="space-y-8" onSubmit={handleSubmit(onGenerate)}>
      {children}

      <fieldset className="min-w-0 space-y-5">
        <legend className="mb-4 font-ui text-lg font-medium">
          Dane odbiorcy
        </legend>
        <div className="grid gap-5 sm:grid-cols-2">
          <label className={labelClasses}>
            Imię
            <input
              className={inputClasses}
              type="text"
              autoComplete="given-name"
              placeholder="Jan"
              required
              pattern={nonBlankPattern}
              {...register("name")}
            />
          </label>
          <label className={labelClasses}>
            Nazwisko
            <input
              className={inputClasses}
              type="text"
              autoComplete="family-name"
              placeholder="Kowalski"
              required
              pattern={nonBlankPattern}
              {...register("surname")}
            />
          </label>
        </div>
        <div className="grid gap-5 sm:grid-cols-3">
          <label className={labelClasses}>
            Numer kierunkowy
            <select
              className={inputClasses}
              autoComplete="tel-country-code"
              {...register("areaCode")}
            >
              {dialingCodes.map(({ value, label }) => (
                <option key={label} value={value}>
                  {label}
                </option>
              ))}
            </select>
          </label>
          <label className={`${labelClasses} sm:col-span-2`}>
            Numer telefonu
            <input
              className={inputClasses}
              type="tel"
              autoComplete="tel-national"
              placeholder="123 456 789"
              required
              pattern={"(?=.*[0-9])[0-9\\s\\(\\)\\+\\-]{5,}"}
              title="Proszę podać numer telefonu, używając cyfr, spacji, nawiasów lub myślników."
              {...register("phone")}
            />
          </label>
        </div>
      </fieldset>

      <fieldset className="min-w-0 space-y-5">
        <legend className="mb-4 font-ui text-lg font-medium">
          {isParcelLocker ? "Paczkomat odbiorczy" : "Adres dostawy"}
        </legend>
        {isParcelLocker ? (
          <div className="grid gap-5 sm:grid-cols-2">
            <label className={labelClasses}>
              Kod paczkomatu
              <input
                className={`${inputClasses} uppercase`}
                type="text"
                placeholder="np. LEG01L"
                required
                pattern={nonBlankPattern}
                {...register("paczkomat")}
              />
            </label>
            <label className={labelClasses}>
              Miejscowość
              <input
                className={inputClasses}
                type="text"
                placeholder="np. Legnica"
                required
                pattern={nonBlankPattern}
                {...register("city")}
              />
            </label>
            <a
              className="text-sm text-primary underline underline-offset-4 sm:col-span-2"
              href="https://inpost.pl/znajdz-paczkomat"
              target="_blank"
              rel="noopener noreferrer"
            >
              Mapa paczkomatów InPost
            </a>
          </div>
        ) : (
          <>
            <label className={labelClasses}>
              Kraj
              <select
                className={inputClasses}
                autoComplete="country-name"
                {...register("country")}
              >
                {countries.map(({ value, label }) => (
                  <option key={value} value={value}>
                    {label}
                  </option>
                ))}
              </select>
            </label>
            <label className={labelClasses}>
              Ulica
              <input
                className={inputClasses}
                type="text"
                autoComplete="address-line1"
                placeholder="np. Kolejowa"
                required
                pattern={nonBlankPattern}
                {...register("street")}
              />
            </label>
            <div className="grid gap-5 sm:grid-cols-2">
              <label className={labelClasses}>
                Numer budynku
                <input
                  className={inputClasses}
                  type="text"
                  placeholder="np. 10"
                  required
                  pattern={nonBlankPattern}
                  {...register("building")}
                />
              </label>
              <label className={labelClasses}>
                Numer mieszkania{" "}
                <span className="font-normal text-dark/60">(opcjonalnie)</span>
                <input
                  className={inputClasses}
                  type="text"
                  autoComplete="address-line2"
                  placeholder="np. 5"
                  {...register("apartment")}
                />
              </label>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <label className={labelClasses}>
                Kod pocztowy
                <input
                  className={inputClasses}
                  type="text"
                  autoComplete="postal-code"
                  placeholder="np. 00-000"
                  required
                  pattern={nonBlankPattern}
                  {...register("postalCode")}
                />
              </label>
              <label className={labelClasses}>
                Miejscowość
                <input
                  className={inputClasses}
                  type="text"
                  autoComplete="address-level2"
                  placeholder="np. Legnica"
                  required
                  pattern={nonBlankPattern}
                  {...register("city")}
                />
              </label>
            </div>
          </>
        )}
      </fieldset>

      <div className="border-t border-dark/10 pt-6">
        <SubmitButton type="submit" bigger className="m-0! max-w-full">
          Przygotuj wiadomość
        </SubmitButton>
      </div>
    </form>
  );
};

import { createFileRoute } from "@tanstack/react-router";
import {
  Car,
  Fuel,
  Menu,
  Phone,
  Settings2,
  ShieldCheck,
  Clock,
  MapPin,
  Users,
  BadgeCheck,
  X,
} from "lucide-react";
import { useState } from "react";

import logoAsset from "@/assets/khan-tours-logo.jpeg.asset.json";
import heroCar from "@/assets/hero-car.jpg";
import carSedan from "@/assets/car-sedan.jpg";
import carSuv from "@/assets/car-suv.jpg";
import carSport from "@/assets/car-sport.jpg";
import carVan from "@/assets/car-van.jpg";
import carLuxury from "@/assets/car-luxury.jpg";
import carCompact from "@/assets/car-compact.jpg";

export const Route = createFileRoute("/")({
  staticData: { sitemap: true },
  head: () => ({
    meta: [
      { title: "KHAN MOTORS & TOURS — Rent a Car" },
      {
        name: "description",
        content:
          "KHAN MOTORS & TOURS offers reliable rent-a-car and tour services. Choose from sedans, SUVs, luxury 4x4s and vans — with or without a driver.",
      },
      { property: "og:title", content: "KHAN MOTORS & TOURS — Rent a Car" },
      {
        property: "og:description",
        content:
          "Reliable rent-a-car and tour services. Sedans, SUVs, luxury 4x4s and vans — with or without a driver.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://khan-drive-and-go.lovable.app/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://khan-drive-and-go.lovable.app/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "AutoRental",
          name: "KHAN MOTORS & TOURS",
          url: "https://khan-drive-and-go.lovable.app/",
          telephone: "+92 321 4067150",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Main GT Road",
            addressCountry: "PK",
          },
          openingHours: "Mo-Su 00:00-24:00",
          sameAs: ["https://www.tiktok.com/@farrukhkhan216"],
        }),
      },
    ],
  }),
  component: Index,
});

const PHONE_TEL = "tel:+923214067150";
const PHONE_LABEL = "+92 321 4067150";
const WHATSAPP_TEL = "https://wa.me/923214067150";
const WHATSAPP_LABEL = "+92 321 4067150";
const TIKTOK_URL = "https://www.tiktok.com/@farrukhkhan216?_r=1&_t=ZN-99X1Tjz81ME";
const TIKTOK_LABEL = "@farrukhkhan216";

const FLEET = [
  {
    name: "Toyota Corolla",
    category: "Sedan",
    image: carSedan,
    seats: 5,
    transmission: "Automatic",
    fuel: "Petrol",
    price: "Rs 6,000",
  },
  {
    name: "Honda Civic",
    category: "Sport Sedan",
    image: carSport,
    seats: 5,
    transmission: "Automatic",
    fuel: "Petrol",
    price: "Rs 8,500",
  },
  {
    name: "Toyota Fortuner",
    category: "SUV",
    image: carSuv,
    seats: 7,
    transmission: "Automatic",
    fuel: "Diesel",
    price: "Rs 15,000",
  },
  {
    name: "Land Cruiser V8",
    category: "Luxury 4x4",
    image: carLuxury,
    seats: 7,
    transmission: "Automatic",
    fuel: "Diesel",
    price: "Rs 25,000",
  },
  {
    name: "Toyota Hiace",
    category: "Tour Van",
    image: carVan,
    seats: 13,
    transmission: "Manual",
    fuel: "Diesel",
    price: "Rs 12,000",
  },
  {
    name: "Suzuki Cultus",
    category: "Compact",
    image: carCompact,
    seats: 5,
    transmission: "Manual",
    fuel: "Petrol",
    price: "Rs 4,500",
  },
];

const NAV_LINKS = [
  { label: "Fleet", href: "#fleet" },
  { label: "Why Us", href: "#why-us" },
  { label: "Contact", href: "#contact" },
];

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
          <a href="#" className="flex items-center gap-3">
            <img
              src={logoAsset.url}
              alt="KHAN MOTORS & TOURS logo"
              className="h-12 w-12 rounded-full object-cover ring-2 ring-primary"
            />
            <div className="leading-tight">
              <span className="block font-display text-lg font-extrabold tracking-wide">
                KHAN MOTORS
              </span>
              <span className="block text-xs font-semibold tracking-[0.3em] text-accent">
                & TOURS
              </span>
            </div>
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
            <a
              href={PHONE_TEL}
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              <Phone className="h-4 w-4" />
              Book Now
            </a>
          </nav>

          <button
            className="rounded-md p-2 text-foreground md:hidden"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {menuOpen && (
          <nav className="border-t border-border px-4 py-4 md:hidden">
            <div className="flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-sm font-semibold text-muted-foreground"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={PHONE_TEL}
                className="inline-flex w-fit items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground"
              >
                <Phone className="h-4 w-4" />
                Book Now
              </a>
            </div>
          </nav>
        )}
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <img
          src={heroCar}
          alt="Red luxury SUV driving on a highway at night"
          className="absolute inset-0 h-full w-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/20" />
        <div className="relative mx-auto flex max-w-7xl flex-col justify-center px-4 py-24 sm:px-6 sm:py-36">
          <p className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 text-xs font-bold tracking-widest text-accent uppercase">
            <BadgeCheck className="h-4 w-4" />
            Trusted rent a car & tours
          </p>
          <h1 className="max-w-2xl font-display text-4xl font-black leading-tight sm:text-6xl">
            Your Journey Starts with{" "}
            <span className="text-primary">KHAN MOTORS</span>{" "}
            <span className="text-accent">& TOURS</span>
          </h1>
          <p className="mt-6 max-w-xl text-base text-muted-foreground sm:text-lg">
            Clean cars, honest prices, professional drivers. Rent a sedan for the
            city, an SUV for the family, or a van for your next tour — available
            daily, weekly, or monthly.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#fleet"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-7 py-3.5 text-sm font-bold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              <Car className="h-4 w-4" />
              View Our Fleet
            </a>
            <a
              href={WHATSAPP_TEL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-[#25D366] px-7 py-3.5 text-sm font-bold text-white transition-colors hover:bg-[#1DA851]"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.134 1.585 5.936L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp
            </a>
            <a
              href={TIKTOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-foreground px-7 py-3.5 text-sm font-bold text-background transition-colors hover:bg-foreground/90"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
              </svg>
              TikTok
            </a>
            <a
              href={PHONE_TEL}
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-card/60 px-7 py-3.5 text-sm font-bold text-foreground backdrop-blur transition-colors hover:bg-card"
            >
              <Phone className="h-4 w-4" />
              {PHONE_LABEL}
            </a>
          </div>
        </div>
      </section>

      {/* Fleet */}
      <section id="fleet" className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <div className="mb-12 text-center">
          <p className="text-xs font-bold tracking-[0.3em] text-accent uppercase">
            Our Fleet
          </p>
          <h2 className="mt-3 font-display text-3xl font-extrabold sm:text-4xl">
            Choose Your Ride
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Every vehicle is regularly serviced, fully insured, and available
            with or without a driver.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FLEET.map((car) => (
            <article
              key={car.name}
              className="group overflow-hidden rounded-2xl border border-border bg-card transition-colors hover:border-primary/60"
            >
              <div className="relative overflow-hidden">
                <img
                  src={car.image}
                  alt={`${car.name} — ${car.category} for rent`}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute top-3 left-3 rounded-full bg-primary px-3 py-1 text-xs font-bold text-primary-foreground">
                  {car.category}
                </span>
              </div>
              <div className="p-5">
                <div className="flex items-baseline justify-between gap-2">
                  <h3 className="font-display text-xl font-bold">{car.name}</h3>
                  <p className="text-sm font-bold text-accent">
                    {car.price}
                    <span className="font-medium text-muted-foreground">/day</span>
                  </p>
                </div>
                <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-xs font-medium text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5">
                    <Users className="h-4 w-4 text-accent" />
                    {car.seats} Seats
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Settings2 className="h-4 w-4 text-accent" />
                    {car.transmission}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Fuel className="h-4 w-4 text-accent" />
                    {car.fuel}
                  </span>
                </div>
                <a
                  href={PHONE_TEL}
                  className="mt-5 block rounded-lg bg-primary py-2.5 text-center text-sm font-bold text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  Book This Car
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Why us */}
      <section id="why-us" className="border-y border-border bg-card/40">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
          <div className="mb-12 text-center">
            <p className="text-xs font-bold tracking-[0.3em] text-accent uppercase">
              Why Khan Motors & Tours
            </p>
            <h2 className="mt-3 font-display text-3xl font-extrabold sm:text-4xl">
              Drive with Confidence
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: ShieldCheck,
                title: "Fully Insured",
                text: "Every car is insured and passes a strict safety check before each trip.",
              },
              {
                icon: Clock,
                title: "24/7 Availability",
                text: "Book any time, day or night. We deliver the car to your doorstep.",
              },
              {
                icon: BadgeCheck,
                title: "Pro Drivers",
                text: "Experienced, licensed drivers available for city rides and long tours.",
              },
              {
                icon: MapPin,
                title: "Tours Across Pakistan",
                text: "Northern areas, city tours, weddings and airport transfers covered.",
              },
            ].map((f) => (
              <div
                key={f.title}
                className="rounded-2xl border border-border bg-card p-6"
              >
                <div className="mb-4 inline-flex rounded-xl bg-primary/15 p-3">
                  <f.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-display text-lg font-bold">{f.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <div className="rounded-3xl border border-primary/30 bg-gradient-to-r from-card via-secondary to-card p-10 text-center sm:p-16">
          <h2 className="font-display text-3xl font-extrabold sm:text-4xl">
            Ready to Hit the Road?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
            Call us now and your car will be ready within the hour. Special rates
            for weekly and monthly rentals.
          </p>
          <a
            href={PHONE_TEL}
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-4 text-base font-bold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            <Phone className="h-5 w-5" />
            Call {PHONE_LABEL}
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="border-t border-border bg-card/40">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:grid-cols-3 sm:px-6">
          <div>
            <div className="flex items-center gap-3">
              <img
                src={logoAsset.url}
                alt="KHAN MOTORS & TOURS logo"
                className="h-12 w-12 rounded-full object-cover ring-2 ring-primary"
              />
              <div className="leading-tight">
                <span className="block font-display text-lg font-extrabold tracking-wide">
                  KHAN MOTORS
                </span>
                <span className="block text-xs font-semibold tracking-[0.3em] text-accent">
                  & TOURS
                </span>
              </div>
            </div>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              Reliable rent-a-car and tour services. Clean cars, honest prices,
              professional drivers.
            </p>
          </div>
          <div>
            <h3 className="font-display text-sm font-bold tracking-widest uppercase">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="transition-colors hover:text-foreground">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-display text-sm font-bold tracking-widest uppercase">
              Contact
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-accent" />
                <a href={PHONE_TEL} className="transition-colors hover:text-foreground">
                  {PHONE_LABEL}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <svg className="h-4 w-4 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.134 1.585 5.936L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <a href={WHATSAPP_TEL} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-foreground">
                  WhatsApp {WHATSAPP_LABEL}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <svg className="h-4 w-4 text-foreground" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                </svg>
                <a href={TIKTOK_URL} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-foreground">
                  TikTok {TIKTOK_LABEL}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-accent" />
                Main GT Road, Pakistan
              </li>
              <li className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-accent" />
                Open 24 hours, 7 days a week
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border py-5 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} KHAN MOTORS & TOURS. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

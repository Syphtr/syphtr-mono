import type { MetaFunction } from "@remix-run/node";

// components
import Header from "~/components/modules/Header";
import Hero from "~/components/modules/Hero";
import Features from "~/components/modules/Features";
import Pricing from "~/components/modules/Pricing";
import SubscriptionBanner from "~/components/modules/SubscriptionBanner";

export const meta: MetaFunction = () => {
  return [
    { title: "Syphtr" },
    { name: "description", content: "Welcome to Syphtr!" },
  ];
};

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <Header />
      <main>
        <Hero />
        <Features />
        <Pricing />
        <SubscriptionBanner />
      </main>
    </div>
  );
}

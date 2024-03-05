import type { MetaFunction } from "@remix-run/node";

// components
import Hero from "~/components/sections/Hero";
import Features from "~/components/sections/Features";
import Pricing from "~/components/sections/Pricing";
import SubscriptionBanner from "~/components/sections/SubscriptionBanner";

export const meta: MetaFunction = () => {
  return [
    { title: "Syphtr" },
    { name: "description", content: "Welcome to Syphtr!" },
  ];
};

export default function Index() {
  return (
    <>
      <Hero />
      <Features />
      <Pricing />
      <SubscriptionBanner />
    </>
  );
}

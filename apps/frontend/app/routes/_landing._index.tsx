import { type MetaFunction, json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import { prisma } from "~/db.server";

// components
import Hero from "~/components/modules/Hero";
import Features from "~/components/modules/Features";
import Pricing from "~/components/modules/Pricing";
import SubscriptionBanner from "~/components/modules/SubscriptionBanner";
// import { useLoaderData } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "Syphtr" },
    { name: "description", content: "Welcome to Syphtr!" },
  ];
};

export const loader = async () => {
  const users = await prisma.profile.findMany();
  return json({
    users,
  });
};

export default function Index() {
  const { users } = useLoaderData<typeof loader>();

  console.log(users);

  return (
    <>
      <Hero />
      <Features />
      <Pricing />
      <SubscriptionBanner />
    </>
  );
}

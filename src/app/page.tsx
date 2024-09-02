import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  ArrowDownNarrowWide,
  CheckCheckIcon,
  CircleDollarSign,
  HandHelping,
  HandshakeIcon,
  HelpCircle,
  Leaf,
  MonitorCheck,
  ShieldCheck,
  Variable,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const perks = [
  {
    name: "Quality",
    icon: ArrowDownNarrowWide,
    description:
      "Every asset on our platform is verified by our team to ensure our highest quality standards.",
  },
  {
    name: "Support",
    icon: HelpCircle,
    description:
      "We provide 24/7 support for all of our customers. If you have any questions, feel free to reach out to us.",
  },
  {
    name: "Security",
    icon: ShieldCheck,
    description:
      "We take security very seriously. All of our assets are encrypted and stored securely.",
  },
  {
    name: "Guarantee",
    icon: CheckCheckIcon,
    description: "We guarantee that you will be satisfied with your purchase.",
  },

  {
    name: "Convenience",
    icon: Leaf,
    description:
      "Our platform offers a seamless and user-friendly experience, making it convenient for you to find and purchase digital assets.",
  },

  {
    name: "Community",
    icon: HandshakeIcon,
    description:
      "Join our vibrant community of creators and buyers, and connect with like-minded individuals.",
  },
];
export default function Home() {
  return (
    <>
      <MaxWidthWrapper>
        <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tighter text-gray-900 sm:text-6xl">
            Your marketplace for high- quality
            <span className="text-primary"> digital assets</span>.
          </h1>
          <p className="max-w-prose text-muted-foreground text-lg mt-6 ">
            Welcome to DigitalHippo. Every asset on our platform is verified by
            our team to ensure our highest quality standards.
          </p>
          <div className="flex flex-col gap-4 mt-6 sm:flex-row ">
            <Link href="/productPage" className={cn(buttonVariants())}>
              Browse Trending
            </Link>
            <Button variant={"ghost"}>Our quality promise &rarr;</Button>
          </div>
        </div>
      </MaxWidthWrapper>
      {/* TODO: add produc list */}
      <section className="border-t border-border bg-muted">
        <MaxWidthWrapper className="py-20">
          <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8">
            {perks.map((perk, ind) => (
              <div
                key={ind}
                className="flex text-center sm:text-start flex-col  sm:flex-row lg:flex-col items-center sm:items-center sm:justify-start lg:text-center gap-4 "
              >
                <div className="icons flex-shrink-0 size-16 flex items-center justify-center bg-green-100 text-green-900 rounded-full">
                  <perk.icon className="w-1/3 h-1/3" />
                </div>
                <div className="perkBody  lg:text-center mt-3">
                  <h3 className="text-base font-medium text-gray-900">
                    {perk.name}
                  </h3>
                  <p className="mt-3 text-muted-foreground text-sm">
                    {perk.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  );
}

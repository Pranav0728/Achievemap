"use client"
import { Footer } from "@/components/common/footer";
import Container from "../../components/container";
import React, { useEffect, useState } from "react";
import { HomeHeader } from "@/components/common/HomeHeader";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Roadmap } from "@/components/roadmapData";
import { Button } from "@/components/ui/button";
import Typography from "@/components/ui/typography";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

export default function Page() {  
  const router = useRouter();
  const searchParams = useSearchParams();
  const uid = searchParams.get("uid") as string; // Type assertion for uid
  const [purchasedRoadmapIds, setPurchasedRoadmapIds] = useState<string[]>([]);

  useEffect(() => {
    // Fetch user's purchased roadmap IDs here
    fetchPurchasedRoadmaps();
  }, []);

  const fetchPurchasedRoadmaps = async () => {
    try {
      const response = await fetch(`/api/getPurchasedRoadmaps?uid=${uid}`);
      if (!response.ok) {
        throw new Error("Failed to fetch purchased roadmaps");
      }
      const data = await response.json();
      const purchasedIds = data.roadmaps.map((roadmap:any) => roadmap.roadmapId);
      setPurchasedRoadmapIds(purchasedIds);
    } catch (error) {
      console.error("Error fetching purchased roadmaps:", error);
      // Handle error condition, possibly show an error message
    }
  };

  const CheckOutClick = async (id: string, href: string) => {
    try {
      const response = await fetch(`/api/checkPurchaseStatus?uid=${uid}&id=${id}`);
      if (!response.ok) {
        throw new Error("Failed to fetch purchase status");
      }
      const data = await response.json();

      if (data.status === "success") {
        router.push(href); // Redirect to data.href if purchase status is success
      } else {
        router.push(`/checkout?uid=${uid}&id=${id}`); // Redirect to checkout if purchase status is not success
      }
    } catch (error) {
      console.error("Error checking purchase status:", error);
      // Handle error condition, possibly redirect to a failure page or show an error message
    }
  };

  const isPurchased = (id: string) => purchasedRoadmapIds.includes(id);

  return (
    <Container>
      <HomeHeader />
      <div className="flex flex-col h-full w-full items-center text-center gap-5">
        <div className="mt-3">
          <Typography variant="h5">
            Unlock Your Career Path 🌟 Get Your Ultimate Roadmap Today!
          </Typography>
        </div>
        <div className="m-3">
          {Roadmap.map((data) => (
            <div
              className="mt-5 flex flex-col md:flex-row justify-center w-full"
              key={data.id}
            >
              <Image
                src={data.src}
                width={400}
                height={150}
                className="hidden sm:block rounded-lg md:rounded-r-none"
                alt="Roadmap img"
              />
              <Card className="w-full rounded-r-lg">
                <CardHeader>
                  <CardTitle>{data.title} Roadmap</CardTitle>
                  <CardDescription>{data.description}</CardDescription>
                </CardHeader>
                <CardFooter className="flex justify-between">
                  <Typography variant="p">{isPurchased(data.id) ? "Purchased" : `Price: ${data.price / 100} rs/-`}</Typography>
                  <Button
                    onClick={() => CheckOutClick(data.id, data.href)}
                     // Disable button if roadmap is already purchased
                  >
                    <Typography variant="p">
                      {isPurchased(data.id) ? "Open" : "Buy Roadmap"}
                    </Typography>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </Container>
  );
}

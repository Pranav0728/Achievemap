"use client";
import { Footer } from "@/components/common/footer";
import Container from "../components/container";
import React from "react";
import { HomeHeader } from "@/components/common/HomeHeader";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Roadmap } from "@/components/roadmapData";
import { Button } from "@/components/ui/button";
import Typography from "@/components/ui/typography";

export default function Page() {
  const CheckOutClick =(id:String)=>{
    console.log(id)
    router.push(`/checkout?id=${id}`)
  }
  const router = useRouter();
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
            <div className="m-3" key={data.id}>
            <Card  className="w-full">
              <CardHeader>
                <CardTitle>{data.title}</CardTitle>
                <CardDescription>{data.description}</CardDescription>
              </CardHeader>
              <CardFooter className="flex justify-between">
              <Typography variant="p">
                  Price: {data.price} rs/-
                  </Typography>
                <Button onClick={(e)=>CheckOutClick(data.id)}>
                  <Typography variant="p">
                  Unlock Roadmap
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

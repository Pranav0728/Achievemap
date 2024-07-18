"use client";
import { useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Roadmap } from "@/components/roadmapData";
import { HomeHeader } from "@/components/common/HomeHeader";
import { Footer } from "@/components/common/footer";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Container from "@/components/container";
import { payment } from "../actions/serveractions";

export default function CheckoutPage() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const uid = searchParams.get("uid");
  const data = Roadmap.find((item) => item.id === id);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  const amount = data?.price;

  const handlePurchase = async (e: any) => {
    e.preventDefault();
    try {
      const redirect = await payment(amount, uid, id);
      console.log("redirect>>>", redirect);
      router.push(redirect.url);
      console.log("Purchase successful");
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <HomeHeader />
      <Container>
        <h1 className="text-2xl text-center m-4">Checkout Page</h1>
        <main className="flex-1 grid grid-cols-1 lg:grid-cols-[3fr_1fr] gap-8 p-8">
          <div className="shadow-lg rounded-lg p-8">
            {data ? (
              <>
                <h2 className="text-xl font-bold mb-4">{data.title} Roadmap</h2>
                <p className="mb-4">Price: rs{data.price / 100}/-</p>
                <p className="mb-4">{data.description}</p>
                <form className="grid grid-cols-2 gap-4" onSubmit={handlePurchase}>
                  <div className="col-span-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Enter your name"
                    />
                  </div>
                  <div className="col-span-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                    />
                  </div>
                  <div className="col-span-2 flex justify-end">
                    <Button type="submit" size="lg">
                      Place Order
                    </Button>
                  </div>
                  {error && <p className="col-span-2 text-red-500">{error}</p>}
                </form>
              </>
            ) : (
              <p>Roadmap not found.</p>
            )}
          </div>
          <div className="shadow-lg rounded-lg p-8">
            <h2 className="text-xl font-bold mb-4">Order Summary</h2>
            {data && (
              <>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>Rs {data.price / 100}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Extra charges</span>
                    <span>00</span>
                  </div>
                  <div className="flex justify-between font-bold">
                    <span>Total</span>
                    <span>Rs {data.price / 100}</span>
                  </div>
                </div>
                <Separator className="my-4" />
                <div className="space-y-2">
                  <div className="flex items-center gap-4">
                    <div>
                      <p className="font-medium">{data.title} Roadmap</p>
                      <p className="text-gray-500">Quantity: 1</p>
                    </div>
                    <p className="ml-auto font-medium">Rs {data.price / 100}</p>
                  </div>
                </div>
              </>
            )}
          </div>
        </main>
        <Footer />
      </Container>
    </div>
  );
}

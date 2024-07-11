import Link from "next/link";

export default function page() {
  return (
    <div className="flex justify-center items-center h-screen flex-col">
        <h1>Your Payment successful</h1> 
        <br />
        <Link href="/roadmaps/aiengineer">
        Get Roadmap
        </Link>
        </div>
  )
}

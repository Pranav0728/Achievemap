import { HomeHeader } from "@/components/common/HomeHeader";
import Container from "@/components/container";
import Typography from "@/components/ui/typography";

export default function Page() {
  return (
    <>
      <Container>
        <HomeHeader />
        <div className="flex flex-col h-full w-full items-center px-5">
            <Typography variant="h3" className="m-10">
                Coming soon
            </Typography>
        </div>
      </Container>
    </>
  );
}
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import Typography from "../ui/typography";


const Profile: React.FC = () => {
  const { data: session } = useSession();

  return (
    <main className="flex justify-center items-center flex-col">
      <Typography  variant="p" className="text-black">
      {session?.user?.name ?? "loading..."}
      </Typography>
      <Button className="mx-2" size="tiny"  onClick={() => signOut()}>
        <Typography variant="p">Log out</Typography>
      </Button>
      {/* {session?.user?.email ?? 'loading...'} */}
    </main>
  );
};

export default Profile;

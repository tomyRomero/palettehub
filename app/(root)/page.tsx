import Hero from "@/components/Hero";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export default async function Home() {
  const session = await getServerSession(authOptions);

  console.log("test server", session)

  return (
    
    <section className="flex flex-col w-full items-center justify-center">
      <Hero />
    </section>
  );
}

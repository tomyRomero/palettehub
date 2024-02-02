
import React from 'react'
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth";
import { getServerSession } from 'next-auth';
import AddProductForm from '@/components/forms/AddProductForm';

export default async function page() {

  const session = await getServerSession(authOptions);

  if(session === undefined || session?.user.admin === false)
  {
    redirect("/")
  }


  return (
    <section className="md:pt-24 max-sm:pt-20 lg:pt-0 ">
     
       <AddProductForm stripeProductId={""} name={""} description={""} stock={""} price={""} category={""} photo={""}/>

    </section>
  )
}

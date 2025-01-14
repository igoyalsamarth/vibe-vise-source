"use client"

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { zodResolver } from "@hookform/resolvers/zod"
import { InfoIcon } from "lucide-react";
import { useForm } from "react-hook-form"
import { z } from "zod"

export default function AddCataloguePage() {
  const formFields = [
    {
      name: "productName",
      label: "Product Name",
      placeholder: "Enter product name",
      tooltip: "The name that will be displayed for your product",
    },
    {
      name: "sku",
      label: "SKU",
      placeholder: "Enter SKU",
      tooltip: "Stock Keeping Unit - unique identifier for your product",
    },
    {
      name: "brand",
      label: "Brand",
      placeholder: "Enter brand name",
      tooltip: "The manufacturer or brand of the product",
    },
  ];

  const formSchema = z.object({
    productName: z.string().min(2, { message: "Product name must be at least 2 characters." }),
    sku: z.string().min(1, { message: "SKU is required" }),
    brand: z.string().min(1, { message: "Brand is required" }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      productName: "",
      sku: "",
      brand: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  return (
    <Tabs defaultValue="identity" className="w-full flex flex-col">
      <TabsList className="self-center">
        <TabsTrigger value="identity">Product Identity</TabsTrigger>
        <TabsTrigger value="description">Description</TabsTrigger>
        <TabsTrigger value="details">Product Details</TabsTrigger>
        <TabsTrigger value="offer">Offer</TabsTrigger>
        <TabsTrigger value="safety">Safety & Compliance</TabsTrigger>
      </TabsList>
      <TabsContent value="identity">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4">
            {formFields.map((field) => (
              <FormField
                key={field.name}
                control={form.control}
                name={field.name as keyof typeof formSchema.shape}
                render={({ field: formField }) => (
                  <FormItem className="flex">
                    <FormLabel className="min-w-40">* {field.label}</FormLabel>
                    <HoverCard openDelay={200} closeDelay={200}>
                      <HoverCardTrigger><InfoIcon className="w-4 h-4" /></HoverCardTrigger>
                      <HoverCardContent sideOffset={0} alignOffset={0}>
                        {field.tooltip}
                      </HoverCardContent>
                    </HoverCard>
                    <div className="flex-1 space-y-1">
                      <FormControl>
                        <Input placeholder={field.placeholder} {...formField} />
                      </FormControl>
                      <FormMessage />
                    </div>
                  </FormItem>
                )}
              />
            ))}
            <div className="flex justify-between">
              <Button variant='secondary' >Cancel</Button>
              <div className="flex gap-2">
                <Button variant='secondary'>Save as Draft</Button>
                <Button type="submit">Submit</Button>
              </div>
            </div>
          </form>
        </Form>
      </TabsContent>
      <TabsContent value="description">Change your password here.</TabsContent>
      <TabsContent value="details">Change your password here.</TabsContent>
      <TabsContent value="offer">Change your password here.</TabsContent>
      <TabsContent value="safety">Change your password here.</TabsContent>
    </Tabs>
  )
}
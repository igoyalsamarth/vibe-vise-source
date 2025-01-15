"use client"

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { zodResolver } from "@hookform/resolvers/zod"
import { CircleAlert, InfoIcon } from "lucide-react";
import { useForm } from "react-hook-form"
import { z } from "zod"

export default function AddCataloguePage() {
  const productIdentityFields = [
    {
      name: "itemName",
      label: "Item Name",
      placeholder: "Example: Adidas Blue Sneakers",
      tooltip: "Provide a title for the item that may be customer facing",
      required: true,
    },
    {
      name: "productType",
      label: "Product Type",
      placeholder: "Enter product type",
      tooltip: "Select the appropriate product type that best suits the item",
      required: true,
    },
    {
      name: "recommendedBrowserNode",
      label: "Recommended Browser Node",
      placeholder: "-Select-",
      tooltip: "Indicate the browse node or section of the Amazon website where the product will be assigned. This allows customers to find the product on the website easily. If you don't provide a node or if you provide an incorrect node, customers may not be able to find your product.",
      required: true,
    },
    {
      name: "brandName",
      label: "Brand Name",
      placeholder: "Example: Adidas",
      tooltip: "Provide the brand name of the product",
      required: true,
      checkboxLabel: "Does not have a brand name",
    },
    {
      name: "externalProductId",
      label: "External Product ID",
      placeholder: "Example: 714532191586",
      tooltip: "Provide the external ID (barcode) type and corresponding value that is being used to identify the product",
      required: false,
      checkboxLabel: "Does not have an external product ID",
    },
  ];

  const formSchema = z.object({
    itemName: z.string()
      .min(1, { message: "Item name is required" })
      .refine((val) => val.length === 0 || val.length >= 4, {
        message: "Item name must be at least 4 characters."
      }),
    productType: z.string()
      .min(1, { message: "Product type is required" })
      .refine((val) => val.length === 0 || val.length >= 4, {
        message: "Product type must be at least 4 characters."
      }),
    recommendedBrowserNode: z.string()
      .min(1, { message: "Recommended browser node is required" })
      .refine((val) => val.length === 0 || val.length >= 4, {
        message: "Recommended browser node must be at least 4 characters."
      }),
    brandName: z.union([
      z.string()
        .min(1, { message: "Brand name is required" })
        .refine((val) => val.length === 0 || val.length >= 4, {
          message: "Brand name must be at least 4 characters."
        }),
      z.literal(false)
    ]).refine(
      (val) => {
        if (val === false) return true;
        return val.length >= 1;
      },
      { message: "Brand name is required" }
    ),
    externalProductId: z.union([
      z.string()
        .refine((val) => !val || val.length === 8, {
          message: "External product ID must be exactly 8 characters"
        }),
      z.literal(false)
    ]),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      itemName: "",
      productType: "",
      recommendedBrowserNode: "",
      brandName: "",
      externalProductId: "",
    },
    mode: 'onChange'
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  return (
    <Tabs defaultValue="identity" className="w-full flex flex-col">
      <TabsList className="self-center">
        <TabsTrigger value="identity" className="flex items-center gap-1">
          {Object.keys(form.formState.errors).length > 0 && (
            <CircleAlert className="w-4 h-4" fill="red" stroke="white" />
          )}
          Product Identity
        </TabsTrigger>
        <TabsTrigger value="description">Description</TabsTrigger>
        <TabsTrigger value="details">Product Details</TabsTrigger>
        <TabsTrigger value="offer">Offer</TabsTrigger>
        <TabsTrigger value="safety">Safety & Compliance</TabsTrigger>
      </TabsList>
      <div className="flex w-full gap-4">
        <RadioGroup defaultValue="allAttributes" className="min-w-[200px]">
          <div className="flex items-center space-x-2 border rounded p-3">
            <RadioGroupItem value="allAttributes" id="r1" />
            <Label htmlFor="r1">All Attributes</Label>
          </div>
          <div className="flex items-center space-x-2 border rounded p-3">
            <RadioGroupItem value="requiredAttributes" id="r2" />
            <Label htmlFor="r2">Required</Label>
          </div>
        </RadioGroup>
        <TabsContent value="identity" className="w-full">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4 w-full">
              {productIdentityFields.map((field) => (
                <FormField
                  key={field.name}
                  control={form.control}
                  name={field.name as keyof typeof formSchema.shape}
                  render={({ field: formField }) => (
                    <FormItem>
                      <div className="flex items-center gap-2">
                        <FormLabel>
                          {field.required && <span className="text-red-500">* </span>}
                          {field.label}
                        </FormLabel>
                        <HoverCard openDelay={200} closeDelay={200}>
                          <HoverCardTrigger><InfoIcon className="w-4 h-4" fill="black" stroke="white" /></HoverCardTrigger>
                          <HoverCardContent sideOffset={0} alignOffset={0}>
                            {field.tooltip}
                          </HoverCardContent>
                        </HoverCard>
                      </div>
                      <FormControl>
                        <Input
                          placeholder={field.placeholder}
                          {...formField}
                          value={formField.value || ''}
                          disabled={typeof form.watch(field.name as keyof typeof formSchema.shape) === 'boolean'}
                        />
                      </FormControl>
                      {field.checkboxLabel && (
                        <div className="flex items-center space-x-2 mt-2">
                          <Checkbox
                            checked={typeof form.watch(field.name as keyof typeof formSchema.shape) === 'boolean'}
                            onCheckedChange={(checked) => {
                              form.setValue(
                                field.name as keyof typeof formSchema.shape,
                                checked ? false : "",
                                { shouldValidate: true }
                              );
                            }}
                          />
                          <Label>{field.checkboxLabel}</Label>
                        </div>
                      )}
                      <FormMessage />
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
      </div>
    </Tabs>
  )
}
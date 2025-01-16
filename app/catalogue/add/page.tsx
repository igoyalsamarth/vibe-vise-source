"use client"

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { IFormFields } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod"
import { CircleAlert, InfoIcon } from "lucide-react";
import { useForm } from "react-hook-form"
import { z } from "zod"

export default function AddCataloguePage() {
  const formFields: IFormFields = {
    productIdentity: {
      label: "Product Identity",
      groups: [
        {
          fields: [
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
              tooltip: "Indicate the browse node or section of the Amazon website where the product will be assigned.",
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
              tooltip: "Provide the external ID (barcode) type",
              required: false,
              checkboxLabel: "Does not have an external product ID",
            },
          ],
        },
      ],
    },
    description: {
      label: "Description",
      groups: [
        {
          fields: [
            {
              name: "shortDescription",
              label: "Short Description",
              placeholder: "Example: This Summer, boots by Jette made from high quality suede leather are real gems. They visually highlight the craftmanship",
              tooltip: "Provide a text description of the product. This information will appear in paragraph form on the detail page of your product. Include unique product features, product line details, and product specifications. Do not use all caps.",
              required: true,
            },
            {
              name: "bulletPoints",
              label: "Bullet Points",
              placeholder: "Enter bullet points",
              tooltip: "Brief descriptive text, called out via a bullet point, regarding a specific aspect of the product. These display directly under or next to your product photo, it is useful to put interesting information in these fields. Do NOT use all caps or abbreviations. Please do NOT use for fabric content, care instructions or country as these are populated in different fields.",
              required: true,
            },
            {
              name: "images",
              label: "Images",
              placeholder: "Enter image URL",
              tooltip: "Provide a URL for the product image. The image must be in JPG or PNG format, 1000x1000 pixels, and 1MB or smaller.",
              required: true,
            }
          ],
        },
      ],
    },
    productDetails: {
      label: "Product Details",
      groups: [
        {
          fields: [
            {
              name: "manufacturer",
              label: "Manufacturer",
              placeholder: "Example: Nike, Procter & Gamble",
              tooltip: "Provide the company that manufactures the product.",
              required: true,
            },
            {
              name: "genericKeywords",
              label: "Generic Keywords",
              placeholder: "Example: Water sport shoes; Derek Rose; Electric; Wi-Fi; Banana",
              tooltip: "Provide any terms that may be relevant to customer searches. No repetition, no competitor brand names or ASINs.",
              required: false,
            },
            {
              name: "style",
              label: "Style",
              placeholder: "Example: Art Deco",
              tooltip: "Provide the style of the product. Style refers to the aesthetic choices of a person or a group of people. It describes the distinctive visual representation of a product",
              required: false,
            },
            {
              name: "departnemntName",
              label: "Department Name",
              placeholder: "Example: Baby Boys, Baby Girls",
              tooltip: "Provide the department name of the product. This is the name of the department where the product is sold.",
              required: true,
            },
            {
              name: "targetGender",
              label: "Target Gender",
              placeholder: "Example: Female",
              tooltip: "Provide the target gender for the product",
              required: false,
            },
            {
              name: "ageRangeDescription",
              label: "Age Range Description",
              placeholder: "Example: Baby",
              tooltip: "Specify an appropriate age range description for the item",
              required: false,
            },
            {
              name: "material",
              label: "Material",
              placeholder: "Example: Plastic",
              tooltip: "Specify the primary materials used for manufacturing the item",
              required: true,
            },
            {
              name: "numberOfItems",
              label: "Number of Items",
              placeholder: "Example: 5",
              tooltip: "Provide the total number of identical items in the selling unit to the customer",
              required: false,
            },
            {
              name: "itemTypeName",
              label: "Item Type Name",
              placeholder: "Example: Anklets, Bangle Bracelets",
              tooltip: "Provide the name of the item type",
              required: true,
            },
            {
              name: "subjectCharacter",
              label: "Subject Character",
              placeholder: "Example: Batman",
              tooltip: "Provide the primary character the item represents",
              required: false,
            },
            {
              name: "color",
              label: "Color",
              placeholder: "Example: Cranberry",
              tooltip: "Provide the color of the product",
              required: true,
            },
            {
              name: "size",
              label: "Size",
              placeholder: "Example: Extra Large",
              tooltip: "Provide the size of the item",
              required: true,
            },
            {
              name: "metalType",
              label: "Metal Type",
              placeholder: "Example: Gold",
              tooltip: "Specify the type of metal used for the item",
              required: false,
            }
          ]
        },
        {
          heading: "Stones",
          fields: [
            {
              name: "stoneId",
              label: "Stone ID",
              placeholder: "Example: 15",
              tooltip: "Provide a unique id to number/identify each unique stone type",
              required: true,
            },
            {
              name: "stoneType",
              label: "Stone Type",
              placeholder: "Example: Diamond",
              tooltip: "Provide the type of the stone",
              required: true,
            },
            {
              name: "numberOfStones",
              label: "Number of Stones",
              placeholder: "Example: 1,3",
              tooltip: "Enter the number of stones of this stone type.",
              required: true,
            },
            {
              name: "stoneCreationMethod",
              label: "Stone Creation Method",
              placeholder: "Example: Synthetic, Simulated",
              tooltip: "Describe the method of the stone creation",
              required: true,
            },
            {
              name: "stoneTreatmentMethod",
              label: "Stone Treatment Method",
              placeholder: "Example: None, Polished, Cut",
              tooltip: "Provide the treatment method that has been applied to the stone",
              required: true,
            }
          ]
        },
        {
          fields: [
            {
              name: "manufacturerContactInformation",
              label: "Manufacturer Contact Information",
              placeholder: "Example: Manufacturer Name Ltd, Street No. 24/4, New Delhi, India - 110011, Contact: +91-801-000-2400, service@manufacturer.com",
              tooltip: "Provide the contact information (including address, zipcode) for the product's manufacturer",
              required: true,
            }
          ]
        },
        {
          heading: "Unit Count",
          fields: [
            {
              name: "unitCount",
              label: "Unit Count",
              placeholder: "Example: 72.0",
              tooltip: "For products that are consumed by volume, weight, linear dimension, etc., provide the net quantity that would be shipped to a customer who orders one ASIN (e.g. 12 pack of 6 floz. bottles of water = 72, vs. a single 2 liter bottle = 2). For products consumed as individual units, provide the total number of units (pack of 12 pens = 12). For packed assortments of non-identical items, enter 1",
              required: true,
            }
          ]
        },
        {
          heading: "External Product Information",
          fields: [
            {
              name: "externalProductInformationEntity",
              label: "External Product Information Entity",
              placeholder: "Example: HSN Code",
              tooltip: "Store external product entity information. HSN Code for India marketplace.",
              required: true,
            },
            {
              name: "externalProductInformation",
              label: "External Product Information",
              placeholder: "Example: QUJ85, 610510, 61051010",
              tooltip: "Store external product information for a given key. For example 6 to 8-digit HSN for India marketplace.",
              required: true,
            }
          ]
        },
        {
          fields: [
            {
              name: "importerContactInformation",
              label: "Importer Contact Information",
              placeholder: "Example: Importer Name Ltd, Street No. 24/4, New Delhi, India - 110011, Contact: +91-801-000-2400, service@importer.com",
              tooltip: "Provide the contact information (including address, zipcode) of the importer of the product. The Importer is the person who brings the product into a country for sale",
              required: true,
            },
            {
              name: "packerContactInformation",
              label: "Packer Contact Information",
              placeholder: "Example: Packer Name Ltd, Street No. 24/4, New Delhi, India - 110011, Contact: +91-801-000-2400, service@packer.com",
              tooltip: "Provide the contact information (including address, zipcode) for the packer of the product. The packer is the person who does the primary pre-packaging of the product when it is not the manufacturer.",
              required: true,
            }
          ]
        }
      ],
    },
    offer: {
      label: "Offer",
      groups: [
        {
          fields: [
            {
              name: "sellerSKU",
              label: "Seller SKU",
              placeholder: "Example: ABC123",
              tooltip: "This attribute indicates the SKU number as assigned by the contributor",
              required: false,
            },
            {
              name: "quantity",
              label: "Quantity",
              placeholder: "Example: 152",
              tooltip: "Enter the quantity of the item you are making available for sale. This is your current inventory commitment (as a whole number)",
              required: true,
            },
            {
              name: "handlingTime",
              label: "Handling Time",
              placeholder: "Example: 5",
              tooltip: "Provide the time, in days, between when you receive an order for an item and when you can ship the item",
              required: false,
            },
            {
              name: "restockDate",
              label: "Restock Date",
              placeholder: "DD/MM/YYYY",
              tooltip: "Date that product will be restocked",
              required: false,
            },
            {
              name: "minimumAdvertisedPrice",
              label: "Minimum Advertised Price",
              placeholder: "Example: 259.99",
              tooltip: "Provide the minimum advertised price",
              required: false,
            },
            {
              name: "yourPrice",
              label: "Your Price",
              placeholder: "Example: 9.00",
              tooltip: "Provide base price of the item at which it is being offered to the intended buyer segment",
              required: true,
            },
            {
              name: "maximumRetailPrice",
              label: "Maximum Retail Price",
              placeholder: "Example: 195",
              tooltip: "Provide the maximum retail price that is physically printed on pre-packaged products by manufacturer according to legal metrology act. This is the maximum price that seller can charge a customer. This is only applicable to IN Marketplace.",
              required: true,
            },
            {
              name: "salePrice",
              label: "Sale Price",
              placeholder: "Example: 219.99",
              tooltip: "The price at which you offer the product for sale.",
              required: false,
            },
            {
              name: "offeringConditionType",
              label: "Offering Condition Type",
              placeholder: "Example: New",
              tooltip: "Provide the actual condition type of the product",
              required: false,
            }
          ]
        },
        {
          fields: [
            {
              name: "fullfimentChannel",
              label: "Fullfillment Channel",
              placeholder: "Example: Amazon.in",
              tooltip: "Provide the fullfillment channel of the product",
              required: true,
            }
          ]
        },
        {
          heading: "Item Dimensions",
          fields: [
            {
              name: "itemLength",
              label: "Item Length",
              placeholder: "Example: 10",
              tooltip: "Provide the item length as a numeric value.",
              required: true,
            },
            {
              name: "itemLengthUnit",
              label: "Item Length Unit",
              placeholder: "Example: Centimetres",
              tooltip: "Select the unit of measure for Item Length. If a value is provided for Item Length, you must also enter the corresponding unit.",
              required: true,
            },
            {
              name: "itemWidth",
              label: "Item Width",
              placeholder: "Example: 10",
              tooltip: "Provide the item width as a numeric value.",
              required: true,
            },
            {
              name: "itemWidthUnit",
              label: "Item Width Unit",
              placeholder: "Example: Centimetres",
              tooltip: "Select the unit of measure for Item Width. If a value is provided for Item Width, you must also enter the corresponding unit.",
              required: true,
            },
            {
              name: "itemHeight",
              label: "Item Height",
              placeholder: "Example: 10",
              tooltip: "Provide the item height as a numeric value.",
              required: true,
            },
            {
              name: "itemHeightUnit",
              label: "Item Height Unit",
              placeholder: "Example: Centimetres",
              tooltip: "Select the unit of measure for Item Height. If a value is provided for Item Height, you must also enter the corresponding unit.",
              required: true,
            }
          ]
        },
        {
          heading: "Item Package Dimensions",
          fields: [
            {
              name: "itemPackageLength",
              label: "Item Package Length",
              placeholder: "Example: 10",
              tooltip: "Provide the item package length as a numeric value.",
              required: true,
            },
            {
              name: "itemPackageLengthUnit",
              label: "Item Package Length Unit",
              placeholder: "Example: Centimetres",
              tooltip: "Select the unit of measure for Item Package Length. If a value is provided for Item Package Length, you must also enter the corresponding unit.",
              required: true,
            },
            {
              name: "itemPackageWidth",
              label: "Item Package Width",
              placeholder: "Example: 10",
              tooltip: "Provide the item package width as a numeric value.",
              required: true,
            },
            {
              name: "itemPackageWidthUnit",
              label: "Item Package Width Unit",
              placeholder: "Example: Centimetres",
              tooltip: "Select the unit of measure for Item Package Width. If a value is provided for Item Package Width, you must also enter the corresponding unit.",
              required: true,
            },
            {
              name: "itemPackageHeight",
              label: "Item Package Height",
              placeholder: "Example: 10",
              tooltip: "Provide the item package height as a numeric value.",
              required: true,
            },
            {
              name: "itemPackageHeightUnit",
              label: "Item Package Height Unit",
              placeholder: "Example: Centimetres",
              tooltip: "Select the unit of measure for Item Package Height. If a value is provided for Item Package Height, you must also enter the corresponding unit.",
              required: true,
            }
          ]
        },
        {
          heading: "Item Package Weight",
          fields: [
            {
              name: "itemPackageWeight",
              label: "Item Package Weight",
              placeholder: "Example: 10",
              tooltip: "Provide the item package weight as a numeric value.",
              required: true,
            },
            {
              name: "itemPackageWeightUnit",
              label: "Item Package Weight Unit",
              placeholder: "Example: Kilograms",
              tooltip: "Select the unit of measure for Item Package Weight. If a value is provided for Item Package Weight, you must also enter the corresponding unit.",
              required: true,
            }
          ]
        }
      ],
    },
    safetyAndCompliance: {
      label: "Safety and Compliance",
      groups: [
        {
          fields: [
            {
              name: "countryOfOrigin",
              label: "Country/Region of Origin",
              placeholder: "Example: India",
              tooltip: "Provide the country/region of origin for the product",
              required: true,
            },
            {
              name: "areBatteriesRequired",
              label: "Are Batteries Required?",
              placeholder: "Example: Yes",
              tooltip: "Select YES if batteries are required to power the item (or if the item is a battery) or NO if they are not. Please note that an internal rechargeable battery is also considered a battery",
              required: true,
            },
            {
              name: "dangerousGoodsRegulation",
              label: "Dangerous Goods Regulation",
              placeholder: "Example: GHS, Storage, Transportation",
              tooltip: "If the product is a Dangerous Good or Hazardous Material, Substance or Waste that is regulated for transportation, storage, and/or waste select from the list of valid values",
              required: true,
            }
          ]
        },
        {
          heading: "Item Weight",
          fields: [
            {
              name: "itemWeight",
              label: "Item Weight",
              placeholder: "Example: 10",
              tooltip: "Provide the item weight numeric value (not including the packaging)",
              required: true,
            },
            {
              name: "itemWeightUnit",
              label: "Item Weight Unit",
              placeholder: "Example: Kilograms",
              tooltip: "Provide unit for item weight",
              required: true,
            }
          ]
        }
      ],
    },
  };

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
    shortDescription: z.string().min(1, { message: "Short description is required" }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      itemName: "",
      productType: "",
      recommendedBrowserNode: "",
      brandName: "",
      externalProductId: "",
      shortDescription: "",
    },
    mode: 'onChange'
  });

  const hasTabErrors = (tabKey: string) => {
    const tab = formFields[tabKey as keyof typeof formFields];
    if (!tab.groups) return false;

    return tab.groups.some(group =>
      group.fields.some(field =>
        !!form.formState.errors[field.name as keyof typeof formSchema.shape]
      )
    );
  };

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Tabs defaultValue="productIdentity" className="w-full flex flex-col">
      <TabsList className="self-center">
        {Object.entries(formFields).map(([key, { label }]) => (
          <TabsTrigger key={key} value={key} className="flex items-center gap-1">
            {hasTabErrors(key) && (
              <CircleAlert className="w-4 h-4" fill="red" stroke="white" />
            )}
            {label}
          </TabsTrigger>
        ))}
      </TabsList>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4 w-full">
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

            {Object.entries(formFields).map(([key, { groups }]) => (
              <TabsContent key={key} value={key} className="w-full">
                {groups.map((group, groupIndex) => (
                  <div key={groupIndex}>
                    <div className="flex items-center gap-2 mb-4">
                      {group.heading && <p className="whitespace-nowrap">{group.heading}</p>}
                      {group.tooltip && <HoverCard openDelay={200} closeDelay={200}>
                        <HoverCardTrigger><InfoIcon className="w-4 h-4" fill="black" stroke="white" /></HoverCardTrigger>
                        <HoverCardContent sideOffset={0} alignOffset={0}>
                          {group.tooltip}
                        </HoverCardContent>
                      </HoverCard>}
                      {groupIndex > 0 && <div className="w-full h-0.5 bg-slate-500"></div>}
                    </div>
                    <div className="space-y-4">
                      {group.fields.map((field) => (
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
                    </div>
                  </div>
                ))}
              </TabsContent>
            ))}
          </div>

          <div className="flex justify-between mt-4">
            <Button variant='secondary'>Cancel</Button>
            <div className="flex gap-2">
              <Button variant='secondary'>Save as Draft</Button>
              <Button type="submit">Submit</Button>
            </div>
          </div>
        </form>
      </Form>
    </Tabs>
  );
}
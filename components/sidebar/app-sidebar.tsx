"use client"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"
import { BookOpen, Boxes, BoxIcon, Settings2 } from "lucide-react"
import SidebarBody from "./SidebarBody"
import { SidebarLegs } from "./SidebarLegs"

const data = [
  {
    title: "Catalog",
    url: "/catalog",
    icon: BookOpen,
    items: [
      {
        title: "Add Product",
        url: "/catalog/add",
      },
      {
        title: "All Products",
        url: "/catalog",
      },
      {
        title: "Favorites",
        url: "/catalog?favorites=true",
      },
    ],
  },
  {
    title: "Inventory",
    url: "/inventory",
    icon: Boxes,
    items: [
      {
        title: "Manage Inventory",
        url: "/inventory",
      },
    ]
  },
  {
    title: "Orders",
    url: "/orders",
    icon: BoxIcon,
    items: [
      {
        title: "Pending Orders",
        url: "/orders?status=pending",
      },
      {
        title: "Unshipped Orders",
        url: "/orders?status=unshipped",
      },
      {
        title: "Cancelled Orders",
        url: "/orders?status=cancelled",
      },
      {
        title: "Completed Orders",
        url: "/orders?status=completed",
      },
    ],
  },
  {
    title: "Brands",
    url: "/brands",
    icon: Settings2,
    items: [
      {
        title: "My Brands",
        url: "/brands",
      },
      {
        title: "Add Brand",
        url: "/brands/add",
      },
    ],
  },
]

export function AppSidebar() {
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <p>test</p>
      </SidebarHeader>
      <SidebarContent>
        <SidebarBody items={data} />
      </SidebarContent>
      <SidebarFooter>
        <SidebarLegs />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>

  )
}

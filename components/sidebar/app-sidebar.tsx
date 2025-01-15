"use client"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"
import { AudioWaveform, BookOpen, Boxes, BoxIcon, Command, GalleryVerticalEnd, LayoutDashboardIcon, Settings2 } from "lucide-react"
import SidebarBody from "./SidebarBody"
import { SidebarLegs } from "./SidebarLegs"
import { SidebarHead } from "./SidebarHead"

const data = [
  {
    title: "Dashboard",
    url: "/",
    icon: LayoutDashboardIcon,
  },
  {
    title: "Catalogue",
    url: "/catalogue",
    icon: BookOpen,
    items: [
      {
        title: "Add Product",
        url: "/catalogue/add",
      },
      {
        title: "All Products",
        url: "/catalogue",
      },
      {
        title: "Favorites",
        url: "/catalogue?favorites=true",
      },
    ],
  },
  {
    title: "Inventory",
    url: "/inventory",
    icon: Boxes,
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

const teams = [
  {
    name: "Acme Inc",
    logo: GalleryVerticalEnd,
    plan: "Enterprise",
  },
  {
    name: "Acme Corp.",
    logo: AudioWaveform,
    plan: "Startup",
  },
  {
    name: "Evil Corp.",
    logo: Command,
    plan: "Free",
  },
]

export function AppSidebar() {
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <SidebarHead teams={teams} />
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

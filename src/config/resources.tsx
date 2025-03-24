import type { IResourceItem } from "@refinedev/core";

import {
  DashboardOutlined,
  FileOutlined,
  ProjectOutlined,
  ShopOutlined,
} from "@ant-design/icons";

export const resources: IResourceItem[] = [
  {
    name: "dashboard",
    list: "/",
    meta: {
      label: "Dashboard",
      icon: <DashboardOutlined />,
    },
  },
  {
    name: "companies",
    list: "/companies",
    show: "/companies/:id",
    create: "/companies/new",
    edit: "/companies/edit/:id",
    meta: {
      label: "Companies",
      icon: <ShopOutlined />,
    },
  },
  {
    name: "tasks",
    list: "/tasks",
    create: "/tasks/new",
    edit: "/tasks/edit/:id",
    meta: {
      label: "Tasks",
      icon: <ProjectOutlined />,
    },
  },
  {
    name: "recipes",
    list: "/recipes",
    create: "/recipes/new",
    edit: "/recipes/edit/:id",
    meta: {
      label: "Recipes",
      icon: <FileOutlined />,
    },
  },
];

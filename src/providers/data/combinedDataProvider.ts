import { customDataProvider } from "./customDataProvider";
import { dataProvider } from "@/providers";

export const combinedDataProvider = {
  getList: (params: { resource: string }) => {
    if (params.resource === "recipes") {
      return customDataProvider.getList();
    }
    return dataProvider.getList(params);
  },
  getOne: (params: { resource: string; id: string }) => {
    return dataProvider.getOne(params);
  },
  create: (params: { resource: string; data: unknown }) => {
    return dataProvider.create(params as any);
  },
  update: (params: { resource: string; id: string; data: unknown }) => {
    return dataProvider.update(params as any);
  },
  deleteOne: (params: { resource: string; id: string }) => {
    if (params.resource === "recipes") {
      return customDataProvider.delete(params as any);
    }
    return dataProvider.deleteOne(params);
  },
  custom: (params: { resource: string; [key: string]: unknown }) => {
    return dataProvider.custom(params as any);
  },
};

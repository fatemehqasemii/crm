import { DeleteButton, EditButton, useTable } from "@refinedev/antd";
import { Space, Table, message } from "antd";
import { FC } from "react";
import { Recipe } from "../../recipes.types";
import { PaginationTotal } from "@/components";

export const RecipesTable: FC = () => {
  const { tableProps, sorters } = useTable<Recipe>({
    resource: "recipes",
    initialSorter: [
      { field: "recipeName", order: "asc" },
      { field: "category", order: "asc" },
      { field: "type", order: "asc" },
      { field: "yield", order: "asc" },
      { field: "serving", order: "asc" },
      { field: "recipeCost", order: "asc" },
      { field: "foodCost", order: "asc" },
      { field: "materialCost", order: "asc" },
    ],
  });

  return (
    <Table
      {...tableProps}
      rowKey="id"
      pagination={{
        showTotal: (total) => (
          <PaginationTotal total={total} entityName="recipes" />
        ),
      }}
    >
      <Table.Column<Recipe>
        title="Recipe Name"
        dataIndex="recipeName"
        key="recipeName"
        sorter
      />
      <Table.Column<Recipe>
        title="Category"
        dataIndex="category"
        key="category"
        sorter
      />
      <Table.Column<Recipe>
        title="Type"
        key="type"
        sorter
        align="center"
        render={(_, record) => (
          <span
            style={{
              padding: "5px",
              borderRadius: "15px",
              background: "#b1d0fb",
              fontSize: "12px",
              textWrap: "wrap",
            }}
          >
            {record.type}
          </span>
        )}
      />
      <Table.Column<Recipe>
        title="Yields"
        dataIndex="yield"
        key="yield"
        align="center"
        sorter={{ multiple: 4 }}
      />
      <Table.Column<Recipe>
        title="No. of Servings"
        dataIndex="serving"
        key="serving"
        align="center"
        sorter={{ multiple: 5 }}
      />
      <Table.Column<Recipe>
        title="Recipe Cost"
        dataIndex="recipeCost"
        sorter={{ multiple: 6 }}
        key="recipeCost"
      />
      <Table.Column<Recipe>
        title="Food Cost"
        dataIndex="foodCost"
        sorter={{ multiple: 7 }}
        key="foodCost"
      />
      <Table.Column<Recipe>
        title="Material Cost"
        dataIndex="materialCost"
        sorter={{ multiple: 8 }}
        key="materialCost"
      />
      <Table.Column<Recipe>
        fixed="right"
        dataIndex="id"
        title="Actions"
        render={(value) => (
          <Space>
            <EditButton hideText size="small" recordItemId={value} />
            <DeleteButton hideText size="small" recordItemId={value} />
          </Space>
        )}
      />
    </Table>
  );
};

import { useGo } from "@refinedev/core";
import { Col, Row, Input, Select, Form } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { CreateButton } from "@refinedev/antd";
import { FC } from "react";
import { OptionType } from "../../recipes.types";

export const RecipesHeader: FC = () => {
  const go = useGo();

  const handleButtonClick = () => {
    go({
      to: "/recipes/new",
      type: "push",
    });
  };

  const OptionsCategory: OptionType[] = [
    { label: "Pizza", value: "Pizze" },
    { label: "Burger", value: "Burger" },
    { label: "Salad", value: "Salad" },
    { label: "Sushi", value: "Sushi" },
  ];

  const OptionsStatus: OptionType[] = [
    { label: "Active", value: "Active" },
    { label: "Inactive", value: "Inactive" },
  ];

  return (
    <Row gutter={[8, 8]} align="middle" justify="space-between">
      <Col>
        <h2>Recipes</h2>
      </Col>
      <Col>
        <Form>
          <Row gutter={[16, 16]}>
            <Col flex="auto">
              <Form.Item name="category">
                <Select
                  placeholder="Categories: All"
                  options={OptionsCategory}
                  allowClear
                  style={{ width: 200 }}
                />
              </Form.Item>
            </Col>
            <Col flex="auto">
              <Form.Item name="status">
                <Select
                  placeholder="Status: All"
                  options={OptionsStatus}
                  style={{ width: 200 }}
                  allowClear
                />
              </Form.Item>
            </Col>
            <Col flex="auto">
              <Form.Item name="search">
                <Input
                  placeholder="Search"
                  suffix={<SearchOutlined />}
                  style={{ width: 200 }}
                />
              </Form.Item>
            </Col>
            <Col flex="auto">
              <CreateButton onClick={handleButtonClick}>
                Add New Recipe
              </CreateButton>
            </Col>
          </Row>
        </Form>
      </Col>
    </Row>
  );
};

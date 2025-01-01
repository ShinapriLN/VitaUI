import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@/components/ui/button";
import '../index.css'

// ตั้งค่าเริ่มต้นของ Storybook
const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    Variant: {
      control: "select",
      options: ["default", "outline", "ghost", "text"],
    },
    Size: {
      control: "select",
      options: ["default", "sm", "lg", "icon"],
    },
    Color: {
      control: "select",
      options: ["default", "secondary", "danger"],
    },
  },
  args: {
    children: "Button",
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// ตัวอย่างปุ่ม Default
export const Default: Story = {
  args: {
    Variant: "default",
    Size: "default",
    Color: "default",
  },
};

// ตัวอย่างปุ่ม Outline
export const Outline: Story = {
  args: {
    Variant: "outline",
    Size: "default",
    Color: "default",
  },
};

// ตัวอย่างปุ่ม Ghost
export const Ghost: Story = {
  args: {
    Variant: "ghost",
    Size: "default",
    Color: "default",
  },
};

// ตัวอย่างปุ่ม Text
export const Text: Story = {
  args: {
    Variant: "text",
    Size: "default",
    Color: "default",
  },
};

// ตัวอย่างปุ่มขนาด Small
export const Small: Story = {
  args: {
    Variant: "default",
    Size: "sm",
    Color: "default",
  },
};

// ตัวอย่างปุ่มขนาด Large
export const Large: Story = {
  args: {
    Variant: "default",
    Size: "lg",
    Color: "default",
  },
};

// ตัวอย่างปุ่มแบบ Danger
export const Danger: Story = {
  args: {
    Variant: "default",
    Size: "default",
    Color: "danger",
  },
};



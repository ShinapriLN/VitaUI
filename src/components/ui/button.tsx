import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  `inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md 
  text-sm font-medium ring-offset-background transition-colors 
  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring 
  focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 
  [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 duration-200`,
  {
    variants: {
      Variant: {
        default: "",
        outline: "border border-input bg-transparent ",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        text: "text-primary underline-offset-4 hover:underline",
      },
      Size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
      Color: {
        default: "bg-primary text-primary-foreground hover:bg-primary/80",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        danger: "bg-danger text-danger-foreground hover:bg-danger/80",
      },
    },
    compoundVariants: [
      {
        Variant: "outline",
        Color: "default",
        class: "border-primary bg-transparent text-primary hover:bg-primary/10",
      },
      {
        Variant: "outline",
        Color: "secondary",
        class:
          "border-secondary bg-transparent text-secondary hover:bg-secondary/10",
      },
      {
        Variant: "outline",
        Color: "danger",
        class: "border-danger bg-transparent text-danger hover:bg-danger/10",
      },
      {
        Variant: "text",
        Color: "default",
        class: "bg-transparent text-primary hover:bg-transparent",
      },
      {
        Variant: "text",
        Color: "secondary",
        class: "bg-transparent text-secondary hover:bg-transparent",
      },
      {
        Variant: "text",
        Color: "danger",
        class: "bg-transparent text-danger hover:bg-transparent",
      },
    ],
    defaultVariants: {
      Variant: "default",
      Size: "default",
      Color: "default",
    },
  }
);

const motionVariants = {
  default: {
    whileTap: { scale: 0.95 },
    whileHover: {},
  },
  text: {
    whileTap: {},
    whileHover: {},
  },
  outline: {
    whileTap: { scale: 0.95 },
    whileHover: {},
  },
  ghost: {
    whileTap: {},
    whileHover: {},
  },
};

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, Variant, Size, Color, asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    const motionVariantsProp =
      motionVariants[Variant ?? "default"] || motionVariants.default;
    return (
      // <Comp
      //   className={cn(buttonVariants({ variant, size, className }))}
      //   ref={ref}
      //   {...props}
      // />
      <motion.button
        whileTap={motionVariantsProp.whileTap}
        whileHover={motionVariantsProp.whileHover}
        className={cn(buttonVariants({ Variant, Size, Color, className }))}
        ref={ref}
        {...(props as React.ComponentPropsWithoutRef<typeof motion.button>)}
      >{children}</motion.button>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };

import { Button as ButtonConfig } from "@mantine/core";

export const Button = ButtonConfig.extend({
  defaultProps: {
    color: "grayscale1.0",
    variant: "filled",
    fz: 16,
    fw: 500,
    pt: 8,
    pb: 8,
    pl: 14,
    pr: 14,
    radius: "xl"
  },
});

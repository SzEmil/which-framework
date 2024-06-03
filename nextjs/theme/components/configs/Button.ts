import { Button as ButtonConfig } from "@mantine/core";

export const Button = ButtonConfig.extend({
  defaultProps: {
    color: "themePrimary.6",
    variant: "filled",
    fz: 14,
    fw: 600,
    pt: 6,
    pb: 6,
    pl: 12,
    pr: 12,
  },
});

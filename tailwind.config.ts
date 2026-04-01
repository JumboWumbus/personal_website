import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";
import plugin from "tailwindcss/plugin";
import type { PluginUtils } from "tailwindcss/types/config";

const hexToRgb = (hex: string) => {
  hex = hex.replace("#", "");
  hex = hex.length === 3 ? hex.replace(/./g, "$&$&") : hex;
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  return `${r} ${g} ${b}`;
};
const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    containr: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      screens: {
        xs: "500px",
        mdp: "900px",
        "3xl": "1800px",
      },
      typography: ({ theme }: PluginUtils) => ({
        animated: {
          css: {
            // Heading container
            "h1, h2, h3": {
              scrollMarginTop: "7rem",
              position: "relative",
              display: "inline-block",
            },

            // Heading text slides
            "h1 > a, h2 > a, h3 > a": {
              display: "inline-block",
              paddingLeft: "1.75ch",
              paddingRight: "0.75ch",
              marginLeft: "-1.75ch",
              marginRight: "-0.75ch",
              transition: "transform 0.2s ease",
            },

            // Left brace
            "h1::before, h2::before, h3::before": {
              content: '"#{"',
              position: "absolute",
              left: "0",
              top: "0",
              opacity: "0",
              color: theme("colors.char[500]"),
              pointerEvents: "none",
              fontWeight: "normal",
              transitionProperty: "opacity",
              transitionDuration: "0.15s",
              transitionTimingFunction: "ease",
              transitionDelay: "0.2s", // only on hover in
            },

            // Right brace
            "h1::after, h2::after, h3::after": {
              content: '"}"',
              position: "absolute",
              right: "-2.5ch",
              top: "0",
              opacity: "0",
              color: theme("colors.char[500]"),
              pointerEvents: "none",
              fontWeight: "normal",
              transitionProperty: "opacity",
              transitionDuration: "0.15s",
              transitionTimingFunction: "ease",
              transitionDelay: "0.2s",
            },

            // Hover in: slide heading
            "h1:hover > a, h2:hover > a, h3:hover > a": {
              transform: "translateX(1.75ch)",
            },

            // Hover in: show braces
            "h1:hover::before, h2:hover::before, h3:hover::before": {
              opacity: "1",
            },
            "h1:hover::after, h2:hover::after, h3:hover::after": {
              opacity: "1",
            },

            // Hover out: fade braces first, then heading slides back
            "h1:not(:hover) > a, h2:not(:hover) > a, h3:not(:hover) > a": {
              transitionDelay: "0.15s", // waits for braces fade out
            },
            "h1:not(:hover)::before, h2:not(:hover)::before, h3:not(:hover)::before": {
              transitionDelay: "0s",
            },
            "h1:not(:hover)::after, h2:not(:hover)::after, h3:not(:hover)::after": {
              transitionDelay: "0s",
            },
          },
        },
        //Cool rose color #C75146
        char: {
          css: {
            "--tw-prose-body": theme("colors.char[700]"),
            "--tw-prose-headings": theme("colors.char[900]"),
            "--tw-prose-lead": theme("colors.char[600]"),
            "--tw-prose-links": theme("colors.char[900]"),
            "--tw-prose-bold": theme("colors.char[900]"),
            "--tw-prose-counters": theme("colors.char[500]"),
            "--tw-prose-bullets": theme("colors.char[700]"),
            "--tw-prose-hr": theme("colors.char[200]"),
            "--tw-prose-quotes": theme("colors.char[900]"),
            "--tw-prose-quote-borders": theme("colors.char[200]"),
            "--tw-prose-captions": theme("colors.char[500]"),
            "--tw-prose-kbd": theme("colors.char[900]"),
            "--tw-prose-kbd-shadows": hexToRgb(theme("colors.char[900]")),
            "--tw-prose-code": theme("colors.char[900]"),
            "--tw-prose-pre-code": theme("colors.char[200]"),
            "--tw-prose-pre-bg": theme("colors.char[800]"),
            "--tw-prose-th-borders": theme("colors.char[300]"),
            "--tw-prose-td-borders": theme("colors.char[200]"),
            "--tw-prose-invert-body": theme("colors.char[300]"),
            "--tw-prose-invert-headings": colors.white,
            "--tw-prose-invert-lead": theme("colors.char[400]"),
            "--tw-prose-invert-links": colors.white,
            "--tw-prose-invert-bold": colors.white,
            "--tw-prose-invert-counters": theme("colors.char[400]"),
            "--tw-prose-invert-bullets": theme("colors.char[600]"),
            "--tw-prose-invert-hr": theme("colors.char[700]"),
            "--tw-prose-invert-quotes": theme("colors.char[100]"),
            "--tw-prose-invert-quote-borders": theme("colors.char[700]"),
            "--tw-prose-invert-captions": theme("colors.char[400]"),
            "--tw-prose-invert-kbd": colors.white,
            "--tw-prose-invert-kbd-shadows": hexToRgb(colors.white),
            "--tw-prose-invert-code": colors.white,
            "--tw-prose-invert-pre-code": theme("colors.char[300]"),
            "--tw-prose-invert-pre-bg": "rgb(0 0 0 / 50%)",
            "--tw-prose-invert-th-borders": theme("colors.char[600]"),
            "--tw-prose-invert-td-borders": theme("colors.char[700]"),
          },
        },
      }),

      boxShadow: {
        box: "var(--shadow)",
        "box-hov": "var(--shadow-hover)",
        "box-hov-lg": "var(--shadow-box-hover)",
      },
      colors: {
        char: {
          "50": "#e7e7e7",
          "100": "#d1d1d1",
          "200": "#b0b0b0",
          "300": "#888888",
          "400": "#6d6d6d",
          "500": "#5d5d5d",
          "600": "#4f4f4f",
          "700": "#454545",
          "800": "#3d3d3d",
          "900": "#313131",
        },
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("tailwindcss-animate"),
    plugin(({ addUtilities }) => {
      addUtilities({
        ".page-grid": {
          display: "grid",
          gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
          gap: "1rem",
          "@media (min-width: 768px)": {
            gridTemplateColumns: "repeat(8, minmax(0, 1fr))",
          },
        },
        ".page-container": {
          width: "100%",
          maxWidth: "var(--breakpoint-3xl, 1800px)",
          paddingLeft: "2rem",
          paddingRight: "2rem",
          marginLeft: "auto",
          marginRight: "auto",
        },
      });
    }),
  ],
};
export default config;

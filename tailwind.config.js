/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto Flex", "sans-serif"],
      },
      fontSize: {
        sm: "12px",
        base: "14px",
        lg: "16px",
        xl: "18px",
      },
      transitionTimingFunction: {
        DEFAULT: "cubic-bezier(0.05, 0.7, 0.1, 1)",
      },
      colors: {
        c: {
          primary: {
            DEFAULT: "#2c5ea7",
            container: "#CCDBFF",
            fixed: {
              DEFAULT: "#CCDBFF",
              dim: "#abc7ff",
            },
          },
          secondary: {
            DEFAULT: "#006a69",
            container: "#09ebeb",
            fixed: {
              DEFAULT: "#60f8f7",
              dim: "#38dbda",
            },
          },
          tertiary: {
            DEFAULT: "#0062a0",
            container: "#d0e4ff",
            fixed: {
              DEFAULT: "#d0e4ff",
              dim: "#9bcbff",
            },
          },
          warning: {
            DEFAULT: "#a73a12",
            container: "#ffdbd0",
          },
          info: {
            DEFAULT: "#5142e5",
            container: "#e3dfff",
          },
          success: {
            DEFAULT: "#00696b",
            container: "#6ff6f9",
          },
          error: {
            DEFAULT: "#b81c38",
            container: "#ffdada",
          },
          background: "#fdfbff",
          surface: {
            DEFAULT: "#faf9fd",
            variant: "#e0e2ec",
            tint: "#2c5ea7",
            bright: "#faf9fd",
            dim: "#dbd9dd",
            container: {
              lowest: "#ffffff",
              low: "#f4f3f7",
              DEFAULT: "#efedf1",
              high: "#e9e7ec",
              highest: "#e3e2e6",
            },
          },
          outline: {
            DEFAULT: "#74777f",
            variant: "#c4c6d0",
          },
          inverse: {
            surface: "#2f3033",
            on: {
              surface: "#f2f0f4",
            },
            primary: "#abc7ff",
          },
          on: {
            primary: {
              DEFAULT: "#ffffff",
              container: "#001b3f",
              fixed: {
                DEFAULT: "#001b3f",
                variant: "#03458e",
              },
            },
            secondary: {
              DEFAULT: "#ffffff",
              container: "#002020",
              fixed: {
                DEFAULT: "#002020",
                variant: "#00504f",
              },
            },
            tertiary: {
              DEFAULT: "#ffffff",
              container: "#001d34",
              fixed: {
                DEFAULT: "#001d34",
                variant: "#004a7a",
              },
            },
            warning: {
              DEFAULT: "#ffffff",
              container: "#3a0b00",
            },
            info: {
              DEFAULT: "#ffffff",
              container: "#120068",
            },
            success: {
              DEFAULT: "#ffffff",
              container: "#002020",
            },
            error: {
              DEFAULT: "#ffffff",
              container: "#40000b",
            },
            background: "#1a1b1f",
            surface: {
              DEFAULT: "#1a1b1f",
              variant: "#44474e",
            },
          },
        },
        cd: {
          primary: {
            DEFAULT: "#abc7ff",
            container: "#03458e",
            fixed: {
              DEFAULT: "#d7e3ff",
              dim: "#abc7ff",
            },
          },
          secondary: {
            DEFAULT: "#38dbda",
            container: "#00504f",
            fixed: {
              DEFAULT: "#60f8f7",
              dim: "#38dbda",
            },
          },
          tertiary: {
            DEFAULT: "#9bcbff",
            container: "#004a7a",
            fixed: {
              DEFAULT: "#d0e4ff",
              dim: "#9bcbff",
            },
          },
          warning: {
            DEFAULT: "#ffb59e",
            container: "#842500",
          },
          info: {
            DEFAULT: "#c4c0ff",
            container: "#381fcd",
          },
          success: {
            DEFAULT: "#4cdadd",
            container: "#004f51",
          },
          error: {
            DEFAULT: "#ffb3b5",
            container: "#920025",
          },
          background: "#1a1b1f",
          surface: {
            DEFAULT: "#121316",
            variant: "#44474e",
            tint: "#abc7ff",
            bright: "#38393c",
            dim: "#121316",
            container: {
              lowest: "#0d0e11",
              low: "#1a1b1f",
              DEFAULT: "#1f1f23",
              high: "#292a2d",
              highest: "#343538",
            },
          },
          outline: {
            DEFAULT: "#8e9099",
            variant: "#44474e",
          },
          inverse: {
            surface: "#e3e2e6",
            on: {
              surface: "#1a1b1f",
            },
            primary: "#2c5ea7",
          },
          on: {
            primary: {
              DEFAULT: "#002f65",
              container: "#d7e3ff",
              fixed: {
                DEFAULT: "#001b3f",
                variant: "#03458e",
              },
            },
            secondary: {
              DEFAULT: "#003737",
              container: "#60f8f7",
              fixed: {
                DEFAULT: "#002020",
                variant: "#00504f",
              },
            },
            tertiary: {
              DEFAULT: "#003256",
              container: "#d0e4ff",
              fixed: {
                DEFAULT: "#001d34",
                variant: "#004a7a",
              },
            },
            warning: {
              DEFAULT: "#5e1800",
              container: "#ffdbd0",
            },
            info: {
              DEFAULT: "#2200a3",
              container: "#e3dfff",
            },
            success: {
              DEFAULT: "#003738",
              container: "#6ff6f9",
            },
            error: {
              DEFAULT: "#680017",
              container: "#ffdada",
            },
            background: "#e3e2e6",
            surface: {
              DEFAULT: "#c7c6ca",
              variant: "#c4c6d0",
            },
          },
        },
      },
    },
  },
  plugins: [
    plugin(function ({ addBase }) {
      addBase({
        html: { fontSize: "14px" },
      });
    }),
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "grid-dynamic": (value) => {
            return {
              gridTemplateColumns: `repeat(auto-fit, minmax(${value}, 1fr))`,
            };
          },
        },
        { values: theme("spacing") }
      );
    }),
  ],
};

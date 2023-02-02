export interface Theme{
    colors: {
        cyan: {
            strong: string;
            dark: string;
            darkGrayish: string;
            garyish: string;
            lightGrayish: string;
            light: string;
            white: string;
        };
    };
    fonts: {
        primary: string;
    }
    background: string;
    inputBackground: string;
};


export const defaultTheme:Theme = {
    colors: {
      cyan: {
        strong:"hsl(172, 67%, 45%)",
        dark:"hsl(183, 100%, 15%)",
        darkGrayish:"hsl(186, 14%, 43%)",
        garyish:"hsl(184, 14%, 56%)",
        lightGrayish:"hsl(185, 41%, 84%)",
        light:"hsl(189, 41%, 97%)",
        white:"hsl(0, 0%, 100%)"
      }
      
    },
    fonts: {
        primary: 'Space Mono'
    },
    background: "#C5E4E7",
    inputBackground: "#F3F9FA"
  };
  
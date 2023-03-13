import { ComponentProps, ElementType } from "react";
import { styled } from "../styles";

export const Button = styled('button', {
  all: 'unset',
  borderRadius: '$sm',
  fontSize: '$sm',
  fontWeight: '$bold',
  fontFamily: '$default',
  textAlign: 'center',
  textTransform: 'uppercase',
  minWidth: 200,
  boxSizing: 'border-box',
  padding: '0 $4',

  display: "flex",
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$2',
  transition: 'color 0.3s',

  cursor: 'pointer',

  svg: {
    width: '$4',
    height: '$4',
  },

  '&:hover': {
    color: '$white'
  },

  '&:disabled': {
    backgroundColor: '$gray200',
    cursor: 'not-allowed',

    '&:hover': {
      color: '$black'
    },
  },

  variants: {
    variant: {
      base: {
        color: '$black',
        backgroundColor: '$white',

        '&:hover': {
          color: '$hodl'
        },
      },
      hodl: {
        color: '$black',
        backgroundColor: '$hodl'
      },
      altseason: {
        color: '$black',
        backgroundColor: '$altseason'
      },
      altFactor: {
        color: '$black',
        backgroundColor: '$altFactor'
      }
    },

    size: {
      sm: {
        height: 38,
      },

      md: {
        height: 46,
      },

    }
  },


  defaultVariants: {
    variant: 'base',
    size: 'md'
  }
})

export interface ButtonProps extends ComponentProps<typeof Button> {
  as?: ElementType
}

Button.displayName = 'Button'
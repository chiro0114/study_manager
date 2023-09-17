import { defineRecipe } from '@pandacss/dev';

export const neumorphism = defineRecipe({
  className: 'neumorphism',
  description: 'neumorphism patterns',
  base: {},
  variants: {
    visual: {
      normal: {
        background: '#efefef',
        boxShadow: '-5px -5px 10px 0px #fff, 5px 5px 20px 0px #cbcbcb',
      },
      press: {
        background: '#efefef',
        boxShadow: '-10px -10px 20px 0px #fff inset, 10px 10px 20px 0px #cbcbcb inset',
      },
      acc: {
        background: '#25cee0',
        boxShadow: '-10px -10px 20px 0px #2bedff inset, 10px 10px 20px 0px #1fafbe inset',
      },
    },
    shape: {
      square: { borderRadisu: 0 },
      circle: { borderRadisu: '50%' },
    },
  },
  defaultVariants: {
    visual: 'normal',
    shape: 'square',
  },
});

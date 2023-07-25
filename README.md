Hi. It's a React + TypeScript + Vite + Tailwind + Storybook template and your task is to implement a part of UI on this [Figma mockup](https://www.figma.com/file/28FCDmQYC8yZTCstuLDvcq/FE-Trial-Task-2023?type=design&node-id=0-1&mode=design&t=GC7mmQR8hPlVe5Vu-0). 

You need to do thumbnail/logo picker and the Card. 


Your implementation should fulfill the following requirements:

 **1) Logo/Tumbnail picker**
  - The user should be able to pick an image for the logo/thumbnail purpose.
  - You should handle use case of the long image naming
  - Max image size is 10 mb

You are allowed to use any library you want

**2) Card**
 - Card UI
 - Image that the user picked via picker should be rendered in runtime at the appropriate part of the Card (logo/thumbnail)

Please, keep in mind that the Card component could be located far from the Image picker parent component thus you need to think how will you pass the data from the picker to the card

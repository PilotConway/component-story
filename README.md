# Demo project for my talk "A Component Story" 

First given at CharmCityJS December 2019. 

## Running Storybook

To start the storybook server run 

`yarn storybook` 

It will open storybook in your browser automatically, or you can go to [http://localhost:6006](http://localhost:6006). 

To build the static storybook site, run 

`yarn build-storybook` 

It will output a full static site you can deploy in the new folder `storybook-static`

## Stories

You can see the stories created as `stories.mdx` files in the repository. Each story must have the `<Meta>` component at the top to inform storybook of the group name for the stories (how its going to show in the sitebar) and what component it is a story of. Then you can write new stories by adding the block of `<Preview><Story>` components like so: 

```
<Preview>
  <Story name="<Name of the story for the sidebar>">
   <YourComponent withProps />
  </Story>
</Preview>
```

You can render a table of props easily using the `<Props>` component: 

```
<Props of={Component}>
```

Note: You must have some type of text or markdown between `<Preview>` blocks and `<Prop>` blocks otherwise the mdx parser gets mad. 

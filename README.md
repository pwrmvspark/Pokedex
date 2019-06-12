# React Pokedex

Your task is to create a Pokedex application using React.

## Setup

Before you can begin working on the components you need to understand the included `babel` & `webpack` workflow. Take a few minutes to read through the files provided taking note of the scripts listed in the `package.json` and the `webpack.config` & `.babelrc` files. Try starting the application and check that everything builds and loads correctly before moving on.

(Note: There is an optional `style.css` file included in the project to help your pokedex look pretty. Feel free to add the provided classes in as you go or leave them out entirely.)

The component tree will look like this:

```
App
├── Header
├── Search
├── PokemonList
│   ├── Pokemon
```

## Bare Minimum Requirements

Start building your components in the `src/` folder. 

- [ ] The `App` component should contain the data for your pokedex and methods to modify the pokemon in your pokedex. Make sure to include the `pokedex` className on the top level div of this component.
- [ ] The `Header` component should render a title header and additional information in the navbar. Make sure to include the `nav` className on the top level div of this component. 

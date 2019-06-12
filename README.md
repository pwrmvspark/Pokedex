# React Pokedex

Your task is to create a Pokedex application using React. The purpose of this project is to practice react component structure, state & props as well as communicating with an API on user input.

## Setup

Before you can begin working on the components you need to understand the included `babel` & `webpack` workflow. Take a few minutes to read through the files provided taking note of the scripts listed in the `package.json` and the `webpack.config` & `.babelrc` files. Try starting the application and check that everything builds and loads correctly before moving on.

(Note: There is an optional `style.css` file included in the project to help your pokedex look pretty. Feel free to add the provided classes in as you go or leave them out entirely. See style notes bellow.)

The component tree will look like this:

```
App
├── Header
├── Search
├── PokemonList
│   ├── Pokemon
```

To complete this project you will need to use the free PokeApi. Look though the following docs: https://pokeapi.co/docs/v2.html

Test the api `GET /api/v2/pokemon/{id or name}/` endpoint with httpie or postman before moving on to coding.

## Bare Minimum Requirements

Start building your components in the `src/` folder. Work though the functionality in this order:

- [ ] The `App` component will contain the data for your pokedex and methods to modify the pokemon in your pokedex.
  - a pokemon object should look like this: `{ name: 'Abra', img: 'http://...' }`
- [ ] The `Header` component should render a title header and any additional static information in the navbar.
- The `Pokemon` component should get passed name and img props and render the data to an img and p tag respectively. This component should be simple and reusable.
- [ ] The `PokemonList` component should get passed an array of pokemon objects in props and render a `Pokemon` component for each object.
- [ ] The `Search` component will render an input and button allowing the user to search for pokemon by name and add them to the pokedex. You will need to make a request to the PokeAPI when the input changes and capture/save the result when the user clicks the Add button.
  - This should cause the `PokemonList` componenet to re-render, showing the newly added pokemon

### Stretch Goals

- [ ] Add a remove button to each pokemon in the `PokemonList`
- [ ] Add full-text search to the `Search` component input (search a pokemon by partial name match).

## Style

To style your pokedex use the following classes:

- `pokedex`: add to top level div in the main `App` component
- `nav`: add to the `Header` component
- `pokemon-list`: add to top level div in the `PokemonList` component
- `pokemon`: add to top level div in the `Pokemon` component
- `search`: add to the top level div in the `Search` component
- `screen`: add to a second level div inside the `Search` component

The above styles are entirely optional. Prioritize functionality first.
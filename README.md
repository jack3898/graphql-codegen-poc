# POC

This was originally a POC for graphql codegen, but is just becoming a general POC of things.

## Scripts

- `npm run [script] -w [server|client]`

That's it.

## POC topics

- GraphQL Code generation to Apollo Client React query hooks
  - Formats output to comply with our Eslint rules (not usually recommended to lint generated code)
  - Use of .graphql file format for easier visibility of queries/mutations/fragments
  - Forces file name convention in codegen config for all queries/mutations/fragments to include query/mutation/fragment in the file name
  - Still works behind an auth-protected endpoint, with a custom fetcher to login add the token to the request
  - Far easier to manage and maintain
  - New query? Run the generator and use the hook straight away!
  - 100% accuracy in type safety. For example, in my typeDefs for this very project I defined the books as `[Book]`, and was surprised to see `(Book | undefined)[]` as a generated type. Then realised that actually, that was totally correct. So I amended the backend typedefs to `[Book!]` and the generated type was updated accordingly.
  - Works excellently with union types and fragments.
- ESLint
  - Working with Prettier
  - Working with Tailwind CSS
  - ESLint root config without eslint config package, no need to redefine rules in each project
- Aliasing in Vite, importing root files without nasty relative paths (`../../../../` 🤢)
  - It is Vite, but it should be possible with Webpack
  - I would be delighted if we used Vite though. But understand if we don't
- Zustand for global state management
  - Tests re-render logic to make sure it is efficient
  - Bootstrap hook to update store
  - How to consume the store
  - Glorified reducer, but it's not so coupled the layout of JSX which could make things so much easier
- MVC pattern in React
  - Zustand as model
  - Parent component as controller
  - View component with simple props from parent component
  - When you define a component, the view component is located in the same file as the wrapping component for easier locality
  - Will greatly help with unit tests, Storybook and Chromatic integration

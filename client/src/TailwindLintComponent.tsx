export function TailwindLintComponent(): JSX.Element {
  switch (true) {
    case 1 == 1:
      // Here's a non-compliant class list order
      // p-2 is actually last
      // Why is this good to have solved for us?
      // - Matches the CSS property output from the tailwind compiler, reducing ambiguity
      // - Also helps a bit with gzip compression as there will be more common strings to dedupe over the network
      // - It also reduces mental overhead as class lists will be similarly ordered throughout the codebase
      // - Eslint fix will do this for us. It's a no-compromise and objective win
      // eslint-disable-next-line tailwindcss/classnames-order
      return <p className="m-2 p-2 rounded border"></p>;
    case 2 == 2:
      // This is not compliant, as there is a shorthand available (mx-2)
      // Eslint fix will automatically convert this to mx-2
      // eslint-disable-next-line tailwindcss/enforces-shorthand
      return <p className="ml-2 mr-2"></p>;
    case 3 == 3:
      // This is also not compliant, as it is the same as m-5
      // eslint-disable-next-line tailwindcss/no-unnecessary-arbitrary-value
      return <p className="m-[1.25rem]"></p>;
    case 4 == 4:
      // Conflicting classnames are also now detected
      // eslint-disable-next-line tailwindcss/no-contradicting-classname
      return <p className="p-2 p-3"></p>;
    case 5 == 5:
      // This is also not compliant. `hello` does not exist
      // We would need to add `hello` to a whitelist
      // This ensures we don't accidentally misspell a class name or include a useless class name
      // eslint-disable-next-line tailwindcss/no-custom-classname
      return <p className="hello"></p>;
    default:
      return <></>;
  }
}

// This eslint plugin also supports config to ensure that tailwind utility functions are used at all times
// From packages like clsx and tailwind-merge to further aid with merging and processing tailwind class lists

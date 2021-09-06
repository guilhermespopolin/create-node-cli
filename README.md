# @guilhermespopolin/clignite

Node cli for creating Node cli projects.

## Installation & Usage

```bash
npm init @guilhermespopolin/clignite
# or
npx @guilhermespopolin/clignite
# or
npm install -g @guilhermespopolin/clignite
clignite
```

## Options

```bash
clignite [-t,--template=[js,ts]] [-g,--git] [-i,--install] <project-name>
```

- `-t, --template`: Accepts `js` or `ts` for creating node cli projects with
  vanilla JS or Typescript respectively. Defaults to `js`.
- `-g, --git`: When `true` initializes a git repository in the new project. Defaults
  to `false`.
- `-i, --install`: When `true` install dependencies. Defaults to `true`.

## License

[MIT](https://choosealicense.com/licenses/mit/)

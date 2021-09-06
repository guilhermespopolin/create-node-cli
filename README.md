# @guilhermespopolin/create-node-cli

Node cli for creating Node cli projects.

## Installation & Usage

```bash
npm init @guilhermespopolin/create-node-cli
# or
npx @guilhermespopolin/create-node-cli
# or
npm install -g @guilhermespopolin/create-node-cli
create-node-cli
```

## Options

```bash
clignite [-t,--template=[js,ts]] [-g,--git] [-i,--install] [project-name]
```

- `-t, --template`: Accepts `js` or `ts` for creating node cli projects with
  vanilla JS or Typescript respectively. Defaults to `js`.
- `-g, --git`: When `true` initializes a git repository in the new project. Defaults
  to `false`.
- `-i, --install`: When `true` install dependencies. Defaults to `true`.

## License

[MIT](https://choosealicense.com/licenses/mit/)

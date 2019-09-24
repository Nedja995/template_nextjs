# Template Web App

- NextJS, Typescript, Redux, StyledComponents, Jest, Enzyme

#### [template_server](https://github.com/Nedja995/template_server)

### Features

- Register, Login(jwt)
- Change Language and Theme
- Articles presentation (in grid)
- Simple lazy load

## Using

1. Configure variables in `./src/config/env/`

- Setting `FAKE_SERVER=true` for quick run to test ui or use [template_server](https://github.com/Nedja995/template_server)

2. Install the dependencies

```
npm install
```

3. Run dev

```
npm run dev
```

#### Run tests

```
npm run test
```

#### Build and run release

```
npm run build
npm run start
```

#### Tips

- Localized strings in `src/config/i18n.ts'

#### TODO

- Zeit's service `NOW` don't work with current project structure it cannot find `src`
- Move localisation to json file

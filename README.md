# Running the application

First of all, rename the file .envcopy to .env and modify the entries in order to store the correct values for the API_KEY and BASE_URL for the mock api.

```
REACT_APP_API_KEY=<put_here_api_key>
REACT_APP_API_BASE_URL=https://<put_here_base_url>
```

then install dependencies and start the application as follow:

```
$ yarn install
$ yarn start
```

in order to run unit tests with coverage report, you could type

```
$ yarn test
```

similar for check lint errors

```
$ yarn lint
```

# Price synchronizer

It's a server app which periodically fetch criptocurrency price (e.g. BTCUSDT) into database and exposes api with exchange rate history and current rate.

### Pre-requirements

The requires installed `yarn` and `nest`

## Running the app locally

> App depends on postgres db , which can be run by the following command:

```
docker compose up psqldb
```

To start the app locally:

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

```

## Test

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```

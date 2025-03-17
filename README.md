# Icewall

An auth server for Node.js and WinterTC-compatible platforms

## Development

1. Clone the the repo
2. Copy .env.example to .env and provide necessary variables
3. Run the following commands
   ```sh
   cd /path/to/icewall/
   pnpm install
   pnpm build
   pnpm migrate
   pnpm dev
   ```
4. Open the browser and navigate to http://localhost:3000

## License & Credits

Licensed under the [Apache License 2.0](./LICENSE.txt).

This repository includes the code derived from the following opensource projects:

- [better-auth](https://github.com/better-auth/better-auth) (mostly [SvelteKit examples](https://github.com/better-auth/better-auth/tree/main/examples/svelte-kit-example)) licensed under [MIT](./docs/legal/LICENSE-better-auth.txt), created by [Bereket Engida](https://github.com/Bekacru) and its [contributors](https://github.com/better-auth/better-auth/graphs/contributors).

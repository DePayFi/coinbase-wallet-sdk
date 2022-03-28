# Coinbase Wallet SDK browser pre-built

As Coinbase Wallet SDK has no ESM and UMD support, this is a webpack browser pre-built which can be used in rollup as UMD and ESM.

## Development

```
npm run-script build
```

```
npm publish --access public
```

## Testing with Jest (node)

In case you need to load this pre-built into a node test environment, make sure you supply globals for `crypto` and `fetch`:

```
// CoinbaseWalletSdk
import { Crypto } from "@peculiar/webcrypto"
global.crypto = new Crypto()
import fetch from 'cross-fetch'
global.fetch = fetch
```

Both are installed as a dev dependency with coinbase-wallet-sdk. 

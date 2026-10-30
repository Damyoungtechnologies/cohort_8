// Learn more: https://docs.expo.dev/guides/customizing-metro/
const { getDefaultConfig } = require('expo/metro-config');

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);

// `expo-sqlite` ships its web implementation (wa-sqlite) as a WebAssembly binary
// that is imported like an asset: `import wasmModule from './wa-sqlite/wa-sqlite.wasm'`.
// Metro does not treat `.wasm` as a resolvable asset extension by default, which causes
// "Unable to resolve module ./wa-sqlite/wa-sqlite.wasm" when bundling for web.
if (!config.resolver.assetExts.includes('wasm')) {
  config.resolver.assetExts.push('wasm');
}

module.exports = config;

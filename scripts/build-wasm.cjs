#!/usr/bin/env node
process.env.NEXT_DISABLE_SWC_BINARY = '1';
process.env.NEXT_FORCE_WASM = '1';
process.env.NEXT_SKIP_NATIVE_POSTINSTALL = '1';
require('child_process').spawn('next', ['build'], { stdio: 'inherit', shell: true });

#!/usr/bin/env node

/**
 * Preview all provider splash screens
 * Run: node scripts/preview-splash.mjs
 */

// ANSI color codes
const C = {
  reset: '\x1b[0m',
  bold: '\x1b[1m',
  dim: '\x1b[2m',
  // Zai: Gold/Amber gradient
  zaiPrimary: '\x1b[38;5;220m',
  zaiSecondary: '\x1b[38;5;214m',
  zaiAccent: '\x1b[38;5;208m',
  zaiDim: '\x1b[38;5;172m',
  // MiniMax: Coral/Red/Orange gradient
  mmPrimary: '\x1b[38;5;203m',
  mmSecondary: '\x1b[38;5;209m',
  mmAccent: '\x1b[38;5;208m',
  mmDim: '\x1b[38;5;167m',
  // OpenRouter: Navy/Indigo gradient
  orPrimary: '\x1b[38;5;60m',
  orSecondary: '\x1b[38;5;68m',
  orAccent: '\x1b[38;5;99m',
  orDim: '\x1b[38;5;24m',
  // CCRouter: Sky blue gradient
  ccrPrimary: '\x1b[38;5;39m',
  ccrSecondary: '\x1b[38;5;45m',
  ccrAccent: '\x1b[38;5;33m',
  ccrDim: '\x1b[38;5;31m',
  // Mirror: Silver/Chrome with electric blue
  mirPrimary: '\x1b[38;5;252m',
  mirSecondary: '\x1b[38;5;250m',
  mirAccent: '\x1b[38;5;45m',
  mirDim: '\x1b[38;5;243m',
  // GatewayZ: Violet gradient
  gwPrimary: '\x1b[38;5;141m',
  gwSecondary: '\x1b[38;5;135m',
  gwAccent: '\x1b[38;5;99m',
  gwDim: '\x1b[38;5;60m',
  // Vercel: Monochrome with blue accent
  vcPrimary: '\x1b[38;5;255m',
  vcSecondary: '\x1b[38;5;250m',
  vcAccent: '\x1b[38;5;33m',
  vcDim: '\x1b[38;5;240m',
  // NanoGPT: Neon blue gradient
  ngPrimary: '\x1b[38;5;81m',
  ngSecondary: '\x1b[38;5;75m',
  ngAccent: '\x1b[38;5;69m',
  ngDim: '\x1b[38;5;67m',
  // Ollama: Tan/Brown gradient
  olPrimary: '\x1b[38;5;180m',
  olSecondary: '\x1b[38;5;223m',
  olAccent: '\x1b[38;5;137m',
  olDim: '\x1b[38;5;101m',
};

const SPLASH_ART = {
  zai: [
    '',
    `${C.zaiDim}           ╭──────────╮${C.reset}`,
    `${C.zaiPrimary}    ████████${C.zaiDim}╯${C.zaiPrimary}╗${C.zaiDim}        │${C.reset}`,
    `${C.zaiPrimary}    ╚═════${C.zaiSecondary}██${C.zaiPrimary}╔╝  ${C.zaiAccent}• ${C.zaiDim}A I •${C.reset}`,
    `${C.zaiSecondary}        ██╔╝${C.zaiDim}        │${C.reset}`,
    `${C.zaiSecondary}      ██╔╝${C.zaiDim}╮         │${C.reset}`,
    `${C.zaiAccent}    ████████${C.zaiDim}╰─────────╯${C.reset}`,
    '',
    `${C.zaiDim}    ━━━━━━━━━${C.zaiPrimary}◆${C.zaiDim}━━━━━━━━━${C.reset}`,
    `${C.zaiSecondary}     GLM Coding Plan${C.reset}`,
    '',
  ],
  minimax: [
    '',
    `${C.mmDim}    ┌${C.mmPrimary}▁▂▃▄▅▆▇█▇▆▅▄▃▂▁${C.mmDim}┐${C.reset}`,
    `${C.mmPrimary}    M ${C.mmSecondary}I N I ${C.mmAccent}M A X${C.reset}`,
    `${C.mmDim}    └${C.mmAccent}▁▂▃▄▅▆▇█▇▆▅▄▃▂▁${C.mmDim}┘${C.reset}`,
    '',
    `${C.mmDim}    ━━━━━━━━${C.mmPrimary}◆${C.mmDim}━━━━━━━━${C.reset}`,
    `${C.mmSecondary}     MiniMax-M2.1${C.reset}`,
    `${C.mmDim}       AGI for All${C.reset}`,
    '',
  ],
  openrouter: [
    '',
    `${C.orDim}         ┌─────┐${C.reset}`,
    `${C.orDim}    ○────┤${C.orSecondary} API ${C.orDim}├────○${C.reset}`,
    `${C.orDim}    │    └──┬──┘    │${C.reset}`,
    `${C.orPrimary}    ◉${C.orDim}───────┼───────${C.orPrimary}◉${C.reset}`,
    `${C.orDim}    │    ┌──┴──┐    │${C.reset}`,
    `${C.orDim}    ○────┤${C.orAccent}ROUTE${C.orDim}├────○${C.reset}`,
    `${C.orDim}         └─────┘${C.reset}`,
    '',
    `${C.orDim}    ━━━━━━━${C.orAccent}◆${C.orDim}━━━━━━━${C.reset}`,
    `${C.orSecondary}     OpenRouter${C.reset}`,
    `${C.orDim}    One API ━ Any Model${C.reset}`,
    '',
  ],
  ccrouter: [
    '',
    `${C.ccrDim}        ╭──${C.ccrPrimary}☁${C.ccrDim}──╮${C.reset}`,
    `${C.ccrDim}       ╱       ╲${C.reset}`,
    `${C.ccrSecondary}      ↙   ${C.ccrPrimary}CC${C.ccrSecondary}   ↘${C.reset}`,
    `${C.ccrDim}     ╱   ${C.ccrAccent}ROUTER${C.ccrDim}   ╲${C.reset}`,
    `${C.ccrSecondary}    ◉${C.ccrDim}─────────────${C.ccrSecondary}◉${C.reset}`,
    `${C.ccrDim}    │      │      │${C.reset}`,
    `${C.ccrAccent}   LLM   LLM   LLM${C.reset}`,
    '',
    `${C.ccrDim}    ━━━━━━━${C.ccrPrimary}◆${C.ccrDim}━━━━━━━${C.reset}`,
    `${C.ccrSecondary}   Claude Code Router${C.reset}`,
    '',
  ],
  mirror: [
    '',
    `${C.mirDim}    ╭─────────────────╮${C.reset}`,
    `${C.mirPrimary}    │  ◢${C.mirSecondary}████████${C.mirPrimary}◣  │${C.reset}`,
    `${C.mirSecondary}    │  ${C.mirAccent}◇ ${C.mirPrimary}MIRROR${C.mirAccent} ◇${C.mirSecondary}  │${C.reset}`,
    `${C.mirPrimary}    │  ◥${C.mirSecondary}████████${C.mirPrimary}◤  │${C.reset}`,
    `${C.mirDim}    ╰─────────────────╯${C.reset}`,
    '',
    `${C.mirDim}    ━━━━━━${C.mirAccent}◇${C.mirDim}━━━━━━${C.reset}`,
    `${C.mirSecondary}    Pure Reflection${C.reset}`,
    '',
  ],
  gatewayz: [
    '',
    `${C.gwDim}      ╔═══════════╗${C.reset}`,
    `${C.gwDim}     ╔╝${C.gwSecondary}  ░░░░░░░  ${C.gwDim}╚╗${C.reset}`,
    `${C.gwDim}    ╔╝${C.gwPrimary}  ▓▓▓▓▓▓▓▓▓  ${C.gwDim}╚╗${C.reset}`,
    `${C.gwDim}    ║${C.gwAccent}   G A T E W A Y   ${C.gwDim}║${C.reset}`,
    `${C.gwDim}    ╚╗${C.gwPrimary}  ▓▓▓▓${C.gwAccent}Z${C.gwPrimary}▓▓▓▓  ${C.gwDim}╔╝${C.reset}`,
    `${C.gwDim}     ╚╗${C.gwSecondary}  ░░░░░░░  ${C.gwDim}╔╝${C.reset}`,
    `${C.gwDim}      ╚═══════════╝${C.reset}`,
    '',
    `${C.gwDim}    ━━━━━${C.gwPrimary}◆${C.gwDim}━━━━━${C.reset}`,
    `${C.gwSecondary}     GatewayZ${C.reset}`,
    '',
  ],
  vercel: [
    '',
    `${C.vcPrimary}            ${C.vcAccent}▲${C.reset}`,
    `${C.vcPrimary}           ${C.vcSecondary}╱ ╲${C.reset}`,
    `${C.vcPrimary}          ${C.vcSecondary}╱   ╲${C.reset}`,
    `${C.vcPrimary}         ${C.vcPrimary}╱     ╲${C.reset}`,
    `${C.vcPrimary}        ${C.vcPrimary}╱   ${C.vcAccent}▼${C.vcPrimary}   ╲${C.reset}`,
    `${C.vcDim}       ▔▔▔▔▔▔▔▔▔▔▔${C.reset}`,
    '',
    `${C.vcDim}    ━━━━━━${C.vcAccent}◆${C.vcDim}━━━━━━${C.reset}`,
    `${C.vcSecondary}    Vercel AI Gateway${C.reset}`,
    '',
  ],
  nanogpt: [
    '',
    `${C.ngDim}        ╭───────╮${C.reset}`,
    `${C.ngSecondary}       ╱${C.ngPrimary}  ◉ ◉ ◉${C.ngSecondary}  ╲${C.reset}`,
    `${C.ngDim}      │${C.ngAccent}   NANO   ${C.ngDim}│${C.reset}`,
    `${C.ngSecondary}       ╲${C.ngPrimary}  ◉ ◉ ◉${C.ngSecondary}  ╱${C.reset}`,
    `${C.ngDim}        ╰───────╯${C.reset}`,
    '',
    `${C.ngDim}    ━━━━━━${C.ngPrimary}◆${C.ngDim}━━━━━━${C.reset}`,
    `${C.ngSecondary}      NanoGPT${C.reset}`,
    '',
  ],
  ollama: [
    '',
    `${C.olSecondary}        ╭━━╮${C.reset}`,
    `${C.olSecondary}       ╭╯${C.olPrimary}◕◕${C.olSecondary}╰╮  ${C.olDim}╭╮${C.reset}`,
    `${C.olPrimary}       │ ${C.olAccent}▽${C.olPrimary}  │ ${C.olDim}╭╯╰╮${C.reset}`,
    `${C.olPrimary}       ╰━╮╭━╯${C.olDim}╭╯  ╰━╮${C.reset}`,
    `${C.olAccent}         ╰╯  ${C.olDim}║${C.olSecondary}OLLAMA${C.olDim}║${C.reset}`,
    `${C.olDim}              ╚══════╝${C.reset}`,
    '',
    `${C.olDim}    ━━━━━━${C.olPrimary}◆${C.olDim}━━━━━━${C.reset}`,
    `${C.olSecondary}      Ollama${C.reset}`,
    '',
  ],
};

const providers = ['zai', 'minimax', 'openrouter', 'ccrouter', 'mirror', 'gatewayz', 'vercel', 'nanogpt', 'ollama'];

console.log('\n' + C.bold + '═══════════════════════════════════════' + C.reset);
console.log(C.bold + '  CC-Mirror Provider Splash Art Preview' + C.reset);
console.log(C.bold + '═══════════════════════════════════════' + C.reset + '\n');

for (const provider of providers) {
  console.log(C.dim + '───────────────────────────────────────' + C.reset);
  console.log(C.bold + `  ${provider.toUpperCase()}` + C.reset);
  console.log(C.dim + '───────────────────────────────────────' + C.reset);

  const art = SPLASH_ART[provider];
  if (art) {
    for (const line of art) {
      console.log(line);
    }
  }
}

console.log(C.dim + '───────────────────────────────────────' + C.reset);
console.log('\n' + C.bold + 'Done! ' + C.reset + C.dim + '(' + providers.length + ' providers)' + C.reset + '\n');

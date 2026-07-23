export type Guide = {
  slug: string;
  title: string;
  description: string;
  chain: string;
  category: "L1" | "L2" | "DeFi" | "NFT" | "Infrastructure" | "Social";
  difficulty: "Easy" | "Medium" | "Hard";
  potential: string;
  status: "Active" | "Confirmed" | "Rumored" | "Ended";
  updatedAt: string;
  readingTime: string;
  tags: string[];
  content: string;
  coverGradient: string;
};

export const guides: Guide[] = [
  {
    slug: "layerzero-ofac-airdrop",
    title: "LayerZero Full Guide — Maximize Your Allocation",
    description:
      "Complete walkthrough of every high-value interaction on LayerZero ecosystem. From Stargate to Bitcoin bridges — what actually matters for the snapshot.",
    chain: "Multi-chain",
    category: "Infrastructure",
    difficulty: "Medium",
    potential: "$500 – $5,000+",
    status: "Active",
    updatedAt: "2026-07-20",
    readingTime: "12 min",
    tags: ["bridge", "omnichain", "stargate", "high-value"],
    coverGradient: "from-cyan-500/20 via-blue-600/10 to-purple-600/20",
    content: `
## Why LayerZero Still Matters

LayerZero is the most important messaging protocol in crypto right now. The team has confirmed an airdrop is coming and has already run multiple snapshots. The final allocation will heavily weight **quality** of activity over pure volume.

### Key Principles
- Prefer **native** interactions over simple bridge volume
- Use different source/destination chains
- Interact with **real protocols** built on LayerZero (not just Stargate)
- Keep activity organic — avoid obvious sybil patterns

## Step-by-Step Strategy

### 1. Core Bridging (Stargate + Native)
Use Stargate Finance to bridge between major chains:
- Ethereum ↔ Arbitrum
- Ethereum ↔ Optimism
- Arbitrum ↔ Base
- Include at least one Bitcoin-related path if available

**Pro tip:** Do 3–5 bridges of meaningful size rather than 50 tiny ones.

### 2. High-Signal Protocols
These protocols use LayerZero under the hood and are heavily weighted:
- **Radiant Capital** (lending across chains)
- **Angle Protocol** (stablecoin)
- **Pendle** (when using cross-chain features)
- **Hashflow** / other RFQ DEXes that route via LZ

### 3. Testnet + Mainnet Combo
If you participated in LayerZero testnets (especially the big ones in 2023–2024), that history is valuable. Link the same wallets.

### 4. Avoid These Mistakes
- Bridging the same amount back and forth repeatedly
- Using brand new wallets with no prior history
- Only using one chain pair

## Current Snapshot Status

Multiple snapshots have already occurred. The team has not announced a final one yet. Continuing activity is still recommended until the official claim opens.

## Final Checklist
- [ ] Bridged on ≥ 4 different chain pairs
- [ ] Used at least 2 non-Stargate protocols
- [ ] Activity spread over several weeks/months
- [ ] Wallet has other organic DeFi history

Stay patient. Quality beats quantity every time with LayerZero.
`,
  },
  {
    slug: "monad-testnet-guide",
    title: "Monad Testnet — Full Farming Guide 2026",
    description:
      "Everything you need to do on Monad testnet before mainnet. From basic faucet claims to advanced DeFi interactions that will matter for the airdrop.",
    chain: "Monad",
    category: "L1",
    difficulty: "Easy",
    potential: "$300 – $3,000",
    status: "Active",
    updatedAt: "2026-07-18",
    readingTime: "8 min",
    tags: ["testnet", "l1", "high-tps", "early"],
    coverGradient: "from-purple-500/20 via-fuchsia-600/10 to-pink-500/20",
    content: `
## Why Monad?

Monad is one of the most anticipated high-performance L1s. Parallel execution + EVM compatibility means it can attract real users fast. Testnet activity is currently the only way to position for the future airdrop.

## Getting Started

### 1. Get Testnet ETH
- Official faucet (check Monad docs)
- Community faucets on Discord
- Bridge from other testnets if available

### 2. Essential Interactions
Do these regularly (not all in one day):

1. **Swap** on the native DEX / Ambient / other AMMs
2. **Provide liquidity** (even small amounts)
3. **Lend / Borrow** if any money markets are live
4. **Deploy a simple contract** (optional but high signal)
5. **Use NFT marketplaces** or mint test NFTs
6. **Bridge** in and out when the bridge is open

### 3. Social & Community
- Join Discord and get roles
- Participate in AMAs / feedback
- Follow and engage with official X account (but don't spam)

## Advanced Tips

- Use multiple wallets but make each one look organic
- Space out activity (daily/weekly is better than one huge session)
- Try every new dApp that launches on the testnet — early usage is often weighted

## What the Team Likely Cares About
- Real usage patterns
- Feedback given during testnet
- Longevity of activity (not last-minute rush)

Keep farming until mainnet and official announcement. This one has strong potential.
`,
  },
  {
    slug: "hyperliquid-points",
    title: "Hyperliquid Points — Current Meta & Strategy",
    description:
      "How to farm Hyperliquid points efficiently in 2026. Perps volume, vaults, and the hidden multipliers that actually move the needle.",
    chain: "Hyperliquid",
    category: "DeFi",
    difficulty: "Medium",
    potential: "$1,000 – $10,000+",
    status: "Active",
    updatedAt: "2026-07-22",
    readingTime: "10 min",
    tags: ["perps", "points", "trading", "high-potential"],
    coverGradient: "from-emerald-500/20 via-teal-600/10 to-cyan-500/20",
    content: `
## Hyperliquid Reality Check

Hyperliquid has one of the strongest product-market fits in crypto. The points program is real and the team has already distributed significant value. Current season still rewards consistent, smart activity.

## Core Farming Loop

### 1. Perpetual Trading
- Trade major pairs (BTC, ETH, SOL, etc.)
- Focus on **maker** volume when possible (better points efficiency)
- Avoid excessive leverage that gets you liquidated

### 2. Vaults & Liquidity
Depositing into the community vaults or providing liquidity often has multipliers. Check the current season rules.

### 3. Referral & Social
Referrals can be very strong. Build a small network of real traders rather than empty wallets.

## Points Efficiency Tips
- Volume is king, but **quality** (not getting rekt) matters for long-term reputation
- Some pairs and time periods have higher point rates — watch the leaderboard and announcements
- Combining trading + vault deposits usually beats pure trading

## Risk Management
Never farm with money you can't afford to lose. Hyperliquid is a real trading platform — the airdrop is a bonus, not a free money printer.

Stay updated on the official Discord and X for season changes.
`,
  },
  {
    slug: "scroll-canvas-guide",
    title: "Scroll Canvas & Sessions — Complete Guide",
    description:
      "How to maximize Scroll's Canvas badges and Sessions marks. The current meta for one of the most user-friendly L2 airdrops still running.",
    chain: "Scroll",
    category: "L2",
    difficulty: "Easy",
    potential: "$200 – $2,000",
    status: "Active",
    updatedAt: "2026-07-15",
    readingTime: "7 min",
    tags: ["l2", "zk", "badges", "sessions"],
    coverGradient: "from-orange-500/20 via-amber-600/10 to-yellow-500/20",
    content: `
## Scroll's Unique Approach

Scroll uses **Canvas** (onchain badges) and **Sessions** (activity marks). This is more transparent than most airdrops — you can literally see your progress.

## How to Level Up

### Sessions
- Weekly activity on Scroll earns Session marks
- Bridge, swap, provide liquidity, use dApps
- Consistency across weeks is heavily rewarded

### Canvas Badges
Complete specific quests and challenges to mint badges. Some are time-limited. Prioritize:

1. Early adopter / genesis-style badges
2. High-difficulty technical badges
3. Community / social badges

## Recommended Weekly Routine
1. Bridge a small amount from Ethereum or another L2
2. Swap on Ambient, SyncSwap or native DEX
3. Interact with at least 2–3 different protocols
4. Check Canvas for new available badges
5. Optionally mint or trade NFTs

## Pro Moves
- Use the Scroll Canvas website regularly — it shows exactly what you still need
- Some badges require using specific contracts or doing things in a certain order
- Keep a dedicated Scroll wallet with clean history

Scroll has already done one airdrop. Future distributions are expected to continue rewarding ongoing users.
`,
  },
  {
    slug: "berachain-testnet",
    title: "Berachain bArtio Testnet — Deep Dive",
    description:
      "Full guide to Berachain's unique Proof-of-Liquidity testnet. How to position for one of the most meme-powered yet technically interesting L1s.",
    chain: "Berachain",
    category: "L1",
    difficulty: "Medium",
    potential: "$400 – $4,000",
    status: "Active",
    updatedAt: "2026-07-10",
    readingTime: "11 min",
    tags: ["testnet", "pol", "defi", "meme"],
    coverGradient: "from-red-500/20 via-orange-600/10 to-amber-500/20",
    content: `
## Why Berachain is Different

Berachain uses **Proof-of-Liquidity** instead of classic Proof-of-Stake. This means liquidity providers are core to the security model. Testnet activity that demonstrates understanding of this system is valuable.

## Core Activities

### 1. Get Testnet Tokens
- Faucet for BERA, HONEY, etc.
- Participate in any ongoing faucet campaigns

### 2. The PoL Loop
1. Provide liquidity in the native DEXes
2. Stake LP tokens / receive BGT (governance)
3. Delegate BGT or use it in the ecosystem
4. Interact with Honey stablecoin and other native assets

### 3. dApp Exploration
- Use every major DeFi protocol that launches
- Try the NFT and social experiments (Bera culture is strong)
- Bridge when available

## Culture Matters
Berachain has a very strong community and meme layer. Being active in Discord, understanding the lore, and participating in community events can help (soft signal).

## Current Status
bArtio testnet is the main environment. Keep an eye on official channels for any new testnet versions or mainnet timeline.

This is still early enough that thoughtful, consistent participation should be well rewarded.
`,
  },
  {
    slug: "eigenlayer-restaking",
    title: "EigenLayer Restaking Guide — Current Best Practices",
    description:
      "How to restake efficiently on EigenLayer in 2026. AVS selection, points farming, and risk management for the next wave of rewards.",
    chain: "Ethereum",
    category: "Infrastructure",
    difficulty: "Hard",
    potential: "$500 – $8,000+",
    status: "Active",
    updatedAt: "2026-07-19",
    readingTime: "14 min",
    tags: ["restaking", "avs", "ethereum", "advanced"],
    coverGradient: "from-indigo-500/20 via-blue-600/10 to-violet-500/20",
    content: `
## EigenLayer in 2026

EigenLayer has evolved significantly. Points seasons continue, new AVSs launch regularly, and the risk profile has become clearer.

## Strategy Overview

### 1. Choose Your Liquid Restaking Token (LRT)
Popular options still include:
- ether.fi
- Renzo
- Puffer
- Kelp
- Swell

Compare current points multipliers, fees, and underlying AVS exposure.

### 2. AVS Selection
Not all AVSs are equal. Prefer:
- AVSs with strong teams and real usage
- Those that distribute their own points or tokens
- Diversify across a few rather than going all-in on one

### 3. Native Restaking vs LRT
Native restaking (running your own operator or using a trusted one) can have different reward profiles. Most retail users are better with LRTs for simplicity and liquidity.

## Risk Management (Critical)
- Smart contract risk is real
- AVS slashing risk exists
- Never restake more than you can afford to have illiquid or partially lost
- Prefer established LRTs with audits and insurance where available

## Points Optimization
- Some LRTs offer boosted EigenLayer points
- Holding the LRT + using related products (e.g. their own L2 or DeFi) can stack rewards
- Watch for temporary campaigns

Stay updated — the restaking meta changes every few months.
`,
  },
];

export function getGuideBySlug(slug: string): Guide | undefined {
  return guides.find((g) => g.slug === slug);
}

export function getAllGuides(): Guide[] {
  return [...guides].sort(
    (a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
  );
}

export function getGuidesByCategory(category: Guide["category"]): Guide[] {
  return getAllGuides().filter((g) => g.category === category);
}

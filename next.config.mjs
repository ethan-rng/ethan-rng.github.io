/** @type {import('next').NextConfig} */
const nextConfig = {
  // Next 16 writes AGENTS.md / CLAUDE.md into the repo root by default.
  // Set this to `true` if you want those generated.
  agentRules: false,
  images: {
    // Next 16 only allows quality 75 by default and 400s anything else.
    // The case study banners are dense screenshots and need the headroom.
    qualities: [75, 90],
  },
};

export default nextConfig;

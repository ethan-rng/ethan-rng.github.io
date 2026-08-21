/** @type {import('next').NextConfig} */
const nextConfig = {
  // Next 16 writes AGENTS.md / CLAUDE.md into the repo root by default.
  // Set this to `true` if you want those generated.
  agentRules: false,
};

export default nextConfig;

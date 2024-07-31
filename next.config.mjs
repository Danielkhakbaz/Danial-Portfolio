const nextConfig = {
  experimental: {
    ppr: true,
    reactCompiler: true,
    after: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*",
      },
    ],
  },
};

export default nextConfig;

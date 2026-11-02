/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    serverComponentsExternalPackages: ["better-sqlite3"],
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      // better-sqlite3 在沙箱部署时不安装（optional 且原生编译易失败），运行时由 db.ts 的 try/catch 兜底改用 sql.js。
      config.externals = config.externals || [];
      config.externals.push("better-sqlite3");
    }
    return config;
  },
};

export default nextConfig;

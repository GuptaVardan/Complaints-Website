import nextPwa from 'next-pwa';

<<<<<<< HEAD
const nextConfig = nextPwa({
    reactStrictMode: true,
    experimental: {
        appDir: true,  // Ensure App Router works properly
    },
    pwa: {
        dest: 'public',
        disable: process.env.NODE_ENV === 'development',
    },
});

export default nextConfig;
=======
const withPWA = withPWAInit({
  dest: "public",
  cacheOnFrontEndNav: true,
  aggressiveFrontEndNavCaching: true,
  reloadOnOnline: true,
  disable: false,
  workboxOptions: {
    disableDevLogs: true,
  }
});

const nextConfig = {
  reactStrictMode: true,  // ✅ Keep this outside PWA settings
};

export default withPWA(nextConfig);
>>>>>>> upstream/main

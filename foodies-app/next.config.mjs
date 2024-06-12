/** @type {import('next').NextConfig} */




/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      serverActions: {
        allowedOrigins: ["jubilant-trout-q6vxj7w4r7vh6464-3000.app.github.dev", "localhost:3000"]
      }
    }
  }

  export default nextConfig;

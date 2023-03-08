/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: 'imgix',
    path: '/',
    unoptimized: true,
  },
  resolve: {
    extensions: ['.js', '.jsx', '.tsx']
}
}

module.exports = nextConfig

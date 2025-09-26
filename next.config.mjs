/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.themealdb.com',
       
      },
    ],
  },

  
  // async redirects() {
  //   return [
  //     // Basic redirect
  //     {
  //       source: '/members/add',
  //       destination: '/members',
  //       permanent: true,
  //     },
    
  //   ]
  // }
}

export default nextConfig ;

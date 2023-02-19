/** @type {import('next').NextConfig} */
module.exports = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "https://eveyfacu.pic-time.com",
        permanent: false,
      },
    ];
  },
};

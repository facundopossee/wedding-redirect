/** @type {import('next').NextConfig} */
module.exports = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "https://facuyeve.pic-time.com",
        permanent: false,
      },
    ];
  },
};

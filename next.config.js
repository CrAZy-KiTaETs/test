// // /** @type {import('next').NextConfig} */
// // const nextConfig = {
// //   reactStrictMode: true,
// //   // webpack5: true, // Need to make it true for some versions of Next JS
// //   distDir: 'build', // Defined build directory
// //   webpack: (config, options) => { // webpack configurations
// //     config.plugins.push(
// //       new options.webpack.container.ModuleFederationPlugin({
// //         name:"fe1",
// //         filename: 'static/chunks/remoteEntry.js',
// //         remoteType: "var",
// //         // exposes: { // expose all component here.
// //         //   "./header": "./src/component/Header"
// //         // },
// //         shared: [
// //           {
// //             react: {
// //               eager: true,
// //               singleton: true,
// //               requiredVersion: false,
// //             }
// //           },
// //           {
// //             "react-dom": {
// //               eager: true,
// //               singleton: true,
// //               requiredVersion: false,
// //             }
// //           },
// //         ]
// //       })
// //     )
// //     return config
// //   }
// // }

// // module.exports = nextConfig

// const { NextFederationPlugin } = require('@module-federation/nextjs-mf');

// module.exports = {
//   webpack: (config, options) => {
//     const { isServer } = options;
//     config.plugins.push(
//       new NextFederationPlugin({
//         name: 'host',
//         filename: 'static/chunks/remoteEntry.js',
//         remotes: {
//           remote: `remote@http://localhost:3001/_next/static/${isServer? 'ssr' : 'chunks'}/remoteEntry.js`,
//         },
//         shared: {
//           // Shared dependencies between the Host and Remote applications
//         },
//       })
//     )
//     return config;
//   },
// };

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   // webpack5: true, // Need to make it true for some versions of Next JS
//   distDir: 'build', // Defined build directory
//   webpack: (config, options) => { // webpack configurations
//     config.plugins.push(
//       new options.webpack.container.ModuleFederationPlugin({
//         name:"fe1",
//         filename: 'static/chunks/remoteEntry.js',
//         remoteType: "var",
//         // exposes: { // expose all component here.
//         //   "./header": "./src/component/Header"
//         // },
//         shared: [
//           {
//             react: {
//               eager: true,
//               singleton: true,
//               requiredVersion: false,
//             }
//           },
//           {
//             "react-dom": {
//               eager: true,
//               singleton: true,
//               requiredVersion: false,
//             }
//           },
//         ]
//       })
//     )
//     return config
//   }
// }

// module.exports = nextConfig


// РАБОЧЕЕ

// const { NextFederationPlugin } = require("@module-federation/nextjs-mf");
// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   webpack: (config, options) => {
//     const { isServer } = options;

//     config.plugins.push(
//       new NextFederationPlugin({
//         name: "main",
//         filename: "static/chunks/remoteEntry.js",
//         remotes: {
//           vue: `vue@http://localhost:5173/dist/assets/remoteEntry.js`,
//         },

//         initOptions: {
//           shareStrategy: "loaded-first", // Переносим стратегию сюда
//         },
//       })
//     );
//     return config;
//   },
// };
// module.exports = nextConfig;



// НОВОЕ

const NextFederationPlugin = require('@module-federation/nextjs-mf');

module.exports = {
  webpack(config, options) {
    const { isServer } = options;

    config.plugins.push(
      new NextFederationPlugin({
        name: 'next1',
        filename: 'static/chunks/remoteEntry.js',
        remotes: {
          vueApp: `vueApp@http://localhost:5173/dist/assets/remoteEntry.js`,
        },
        shared: {
          vue: {
            singleton: true,
            eager: true,
            requiredVersion: '>=3.0.0',
          },
          // Здесь вы можете добавить другие общие зависимости, если они у вас есть
        },
      })
    );

    return config;
  },
};


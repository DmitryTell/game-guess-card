import path from 'path';
import webpack from 'webpack';
import { buildWebpackConfig } from './config/build/build.webpack.config';
import { BuildPats } from './config/build/types/config';

export default () => {
   const paths: BuildPats = {
      entry: path.resolve(__dirname, 'src', 'main.ts'),
      build: path.resolve(__dirname, 'build'),
      html: path.resolve(__dirname, 'public', 'index.pug'),
   };
   const isDev = process.env.NODE_ENV === 'development';
   
   const config: webpack.Configuration = buildWebpackConfig({
      mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
      paths,
      isDev,
   });

   return config;
};

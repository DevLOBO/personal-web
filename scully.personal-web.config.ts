import { ScullyConfig } from '@scullyio/scully';
export const config: ScullyConfig = {
  projectRoot: "./src",
  projectName: "personal-web",
  outDir: './dist/static',
  appPort: 9000,
  staticPort: 9001,
  routes: {
    '/blog/:title': {
      type: 'contentFolder',
      title: {
        folder: "./posts"
      }
    },
    '/portfolio/:title': {
      type: 'contentFolder',
      title: {
        folder: "./projects"
      }
    },
  }
};
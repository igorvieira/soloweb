import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/download',
    component: ComponentCreator('/download', 'b81'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '3d7'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'd7f'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', 'd93'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', 'c1f'),
            routes: [
              {
                path: '/docs/collections',
                component: ComponentCreator('/docs/collections', 'd47'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/curl',
                component: ComponentCreator('/docs/curl', '25f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/graphql',
                component: ComponentCreator('/docs/graphql', '06e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/grpc',
                component: ComponentCreator('/docs/grpc', '3e4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/http-requests',
                component: ComponentCreator('/docs/http-requests', 'ab0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/intro',
                component: ComponentCreator('/docs/intro', '61d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/offline-first',
                component: ComponentCreator('/docs/offline-first', '65f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/variables',
                component: ComponentCreator('/docs/variables', '612'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', 'e5f'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];

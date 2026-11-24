import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { BookOpen, NotebookPen } from 'lucide-react';
import { appName, docsRoute, gitConfig, sessionsRoute } from './shared';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: appName,
    },
    links: [
      {
        type: 'main',
        text: 'Knowledge Base',
        url: docsRoute,
        icon: <BookOpen />,
      },
      {
        type: 'main',
        text: 'Sessions',
        url: sessionsRoute,
        icon: <NotebookPen />,
      },
    ],
    githubUrl: `https://github.com/${gitConfig.user}/${gitConfig.repo}`,
  };
}

import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { appName, docsRoute, gitConfig, sessionsRoute } from './shared';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      // JSX supported
      title: appName,
      children: (
        <>
          <a href={docsRoute} className="font-medium">
            Knowledge Base
          </a>
          <a href={sessionsRoute} className="font-medium">
            Sessions
          </a>
        </>
      ),
    },
    githubUrl: `https://github.com/${gitConfig.user}/${gitConfig.repo}`,
  };
}

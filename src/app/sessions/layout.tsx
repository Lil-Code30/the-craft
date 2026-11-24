import { sessionsSource } from '@/lib/source';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { baseOptions } from '@/lib/layout.shared';

export default function Layout({ children }: LayoutProps<'/sessions'>) {
  return (
    <DocsLayout tree={sessionsSource.getPageTree()} {...baseOptions()}>
      {children}
    </DocsLayout>
  );
}

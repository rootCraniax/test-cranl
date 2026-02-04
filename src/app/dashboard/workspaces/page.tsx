'use client';

import PageContainer from '@/components/layout/page-container';
import { workspacesInfoContent } from '@/config/infoconfig';
import { Alert, AlertDescription } from '@/components/ui/alert';

export default function WorkspacesPage() {
  return (
    <PageContainer
      pageTitle='Workspaces'
      pageDescription='Manage your workspaces and switch between them'
      infoContent={workspacesInfoContent}
    >
      <Alert>
        <AlertDescription>
          Authentication system has been removed. Implement your own solution.
        </AlertDescription>
      </Alert>
    </PageContainer>
  );
}

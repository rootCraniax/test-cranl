'use client';

import PageContainer from '@/components/layout/page-container';
import { teamInfoContent } from '@/config/infoconfig';
import { Alert, AlertDescription } from '@/components/ui/alert';

export default function TeamPage() {
  return (
    <PageContainer
      pageTitle='Team Management'
      pageDescription='Manage your workspace team, members, roles, security and more.'
      infoContent={teamInfoContent}
    >
      <Alert>
        <AlertDescription>
          Authentication system has been removed. Implement your own solution.
        </AlertDescription>
      </Alert>
    </PageContainer>
  );
}

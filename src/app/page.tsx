import { redirect } from 'next/navigation';

export default async function Page() {
  // Authentication has been removed. Implement your own auth check here.
  // For now, redirect to dashboard
  redirect('/dashboard/overview');
}

import { redirect } from 'next/navigation';

export default async function Dashboard() {
  // Authentication has been removed. Implement your own auth check here.
  // For now, redirect to overview
  redirect('/dashboard/overview');
}

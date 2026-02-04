'use client';

/**
 * Hook for filtering navigation items based on RBAC
 *
 * Authentication system has been removed. Implement your own solution.
 */

import { useMemo } from 'react';
import type { NavItem } from '@/types';

/**
 * Hook to filter navigation items based on RBAC
 *
 * @param items - Array of navigation items to filter
 * @returns Filtered items (currently returns all items unfiltered)
 */
export function useFilteredNavItems(items: NavItem[]) {
  // Authentication system has been removed. Implement your own solution.
  // This now returns all items without filtering.
  const filteredItems = useMemo(() => {
    return items;
  }, [items]);

  return filteredItems;
}

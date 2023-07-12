export const staticRoutes = [
  {
    path: '/',
    asyncComponent: () => (import('@/views/Root.svelte') as any),
    userData: {
      static: true,
      name: 'root',
      title: 'Root'
    }
  }
]
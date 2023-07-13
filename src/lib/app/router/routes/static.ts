export const staticRoutes = [
  {
    path: '/',
    asyncComponent: () => import('@/views/Root.svelte') as any,
    userData: {
      static: true,
      name: 'root',
      title: 'Root',
    },
  },
  {
    path: '/unauthenticated/login',
    asyncComponent: () => import('@/views/unauthenticated/login.svelte') as any,
    userData: {
      static: true,
      name: 'login',
      title: 'Login',
    },
  },
  {
    path: '/design',
    asyncComponent: () => import('@/views/design/design.svelte') as any,
    userData: {
      static: true,
      name: 'login',
      title: 'Login',
    },
  },
]
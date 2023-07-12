import type { Modules } from '@/lib/app/types/index';

// Uses name as permission if permission field is not defined
// permission is only read on route-level
const menu: Modules = [
	{
		name: 'dashboard',
		title: 'Dashboard',
		icon: 'home',
		description: 'Dashboard',
		routes: [
			{
				name: 'dashboard',
				title: 'Dashboard',
				icon: 'home'
			}
		]
	},
	// {
	//   name: 'my-action',
	//   title: 'Notifikasi',
	//   icon: 'notifications',
	//   description: 'Notifikasi',
	//   routes: [
	//     {
	//       name: 'my-action',
	//       title: 'Notifikasi',
	//       icon: 'folder',
	//     },
	//   ],
	// },
	{
		name: 'masters',
		title: 'Data Master',
		icon: 'database',
		description: 'Pengenlolaan data referensi untuk transaksi aplikasi',
		routes: [
			{
				separator: 'Ruas'
			},
			{
				name: 'toll-sections',
				title: 'Ruas',
				icon: 'folder'
			},
			{
				name: 'toll-owners',
				title: 'Pemilik',
				icon: 'folder'
			},
			{
				name: 'vehicles',
				title: 'Kendaraan',
				icon: 'folder'
			},
			{
				separator: 'Kontrak'
			},
			{
				separator: 'Inventaris'
			},
			{
				separator: 'Pemeliharaan'
			},
			{
				separator: 'Master Form'
			},
			{
				separator: 'General'
			}
		]
	},
	{
		name: 'users',
		title: 'Pengguna',
		icon: 'person',
		description: 'Pengenlolaan data referensi untuk transaksi aplikasi',
		routes: [
			{
				separator: 'Tenaga Kerja'
			},
			{
				name: 'employees',
				title: 'Tenaga Kerja',
				icon: 'folder'
			},
			{
				separator: 'Pengguna'
			},
			{
				name: 'users',
				title: 'Pengguna',
				icon: 'folder'
			},
			{
				name: 'roles',
				title: 'Roles',
				icon: 'folder'
			}
		]
	},
	{
		name: 'settings',
		title: 'Pengaturan',
		icon: 'settings',
		description: 'Pengaturan laku aplikasi',
		routes: [
			{
				name: 'settings',
				title: 'Aplikasi',
				icon: 'folder',
				routes: [],
				children: [
					{
						name: 'user-profile',
						title: 'Profil',
						icon: 'person'
					}
					// {
					//   name: 'general-settings',
					//   title: 'Konfigurasi General',
					//   icon: 'settings',
					// },
					// {
					//   name: 'app-configs',
					//   title: 'Konfigurasi Aplikasi',
					//   icon: 'filter_none',
					// },
				]
			}
		]
	}
];

export default menu;

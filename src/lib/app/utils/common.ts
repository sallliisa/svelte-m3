export function hasPermission(permission: string) {
	const userPermission = ['dashboard', 'toll-sections', 'toll-owners'];
	return userPermission.includes(permission);
}


export const Dashboard: any[] = [

    {
        title: 'Folders',
        type: 'group',
        children: [
            {
                title: 'Photos',
                type: 'item',
                icon: 'folder',
                url: '/dashboard'
            },
            {
                title: 'Recipes',
                type: 'item',
                icon: 'folder',
                url: '/dashboard'
            },
            {
                title: 'Work',
                type: 'item',
                icon: 'folder',
                url: '/dashboard'
            },
            {
                title: 'Photos',
                type: 'item',
                icon: 'folder',
                url: '/dashboard'
            },
            {
                title: 'Recipes',
                type: 'item',
                icon: 'folder',
                url: '/dashboard'
            },
            {
                title: 'Work',
                type: 'item',
                icon: 'folder',
                url: '/dashboard'
            }
        ]
    },
    {
        title: 'menu',
        type: 'group_menu',
        icon: 'keyboard_arrow_down',
        children: [
            {
                title: 'Marketplace',
                type: 'item',
                icon: 'home',
                url: '/',
            },
            {
                title: 'Logout',
                type: 'item',
                icon: 'input',
                method: 'logout'
            }
        ]
    }
];

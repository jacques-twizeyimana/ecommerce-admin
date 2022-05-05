import {ISidebar} from '../../types/services/sidebar.types';

export const sideBarItems: ISidebar[] = [
    {
        id: 1,
        link: '/dashboard/employees',
        name: 'Žmonių valdymas',
        subItems: [
            [
                { 
                    id: 11,
                    link: '/dashboard/employees',
                    name: 'Darbuotojai',
                    icon: 'dashboard-icon.svg'
                }
            ],
            [
                {
                    id: 12,
                    link: '/dashboard/employees',
                    name: 'Bendras tabelis',
                    icon: 'menu-icon.svg'
                },
                {
                    id: 13,
                    link: '/dashboard/employees',
                    name: 'Suvestinė',
                    icon: 'file-icon.svg'
                },
            ],
            [
                {
                    id: 14,
                    link: '/dashboard/employees',
                    name: 'Apgyvendinimas',
                    icon: 'bed-icon.svg'
                },
                {
                    id: 15,
                    link: '/dashboard/employees',
                    name: 'Darbo priemonės',
                    icon: 'tools-icon.svg'
                },
                {
                    id: 16,
                    link: '/dashboard/employees',
                    name: 'Automobiliai',
                    icon: 'car-icon.svg'
                },
                {
                    id: 17,
                    link: '/dashboard/employees',
                    name: 'Nustatymai',
                    icon: 'toogle-icon.svg',
                    nestedItems: [
                        { id: 171, link: '/dashboard/employees', name: 'Vartotojai' },
                        { id: 172, link: '/dashboard/employees', name: 'Pareigos' },
                        { id: 173, link: '/dashboard/employees', name: 'VartoKomandiruočių šalystojai' },
                        { id: 174, link: '/dashboard/employees', name: 'Avalynės ir aprangos dydžiai' }
                    ]
                },
            ],
        ]
    },
    {
        id: 2,
        link: '/dashboard/employees',
        name: 'Ištekliai'
    },
    {
        id: 3,
        link: '/dashboard/employees',
        name: 'Resursai'
    },
    {
        id: 4,
        link: '/dashboard/employees',
        name: 'Pardavimai'
    },
    {
        id: 5,
        link: '/dashboard/employees',
        name: 'Admino Nustatymai'
    },
]
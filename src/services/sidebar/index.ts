import {ISidebar} from '../../types/services/sidebar.types';

export const sideBarItems: ISidebar[] = [
    {
        id: 1,
        name: 'Žmonių valdymas',
        subItems: [
            [
                { 
                    id: 11,
                    name: 'Darbuotojai',
                    icon: 'dashboard-icon.svg'
                }
            ],
            [
                {
                    id: 12,
                    name: 'Bendras tabelis',
                    icon: 'menu-icon.svg'
                },
                {
                    id: 13,
                    name: 'Suvestinė',
                    icon: 'file-icon.svg'
                },
            ],
            [
                {
                    id: 14,
                    name: 'Apgyvendinimas',
                    icon: 'bed-icon.svg'
                },
                {
                    id: 15,
                    name: 'Darbo priemonės',
                    icon: 'tools-icon.svg'
                },
                {
                    id: 16,
                    name: 'Automobiliai',
                    icon: 'car-icon.svg'
                },
                {
                    id: 17,
                    name: 'Nustatymai',
                    icon: 'toogle-icon.svg',
                    nestedItems: [
                        { id: 171, name: 'Vartotojai' },
                        { id: 172, name: 'Pareigos' },
                        { id: 173, name: 'VartoKomandiruočių šalystojai' },
                        { id: 174, name: 'Avalynės ir aprangos dydžiai' }
                    ]
                },
            ],
        ]
    },
    {
        id: 2,
        name: 'Ištekliai'
    },
    {
        id: 3,
        name: 'Resursai'
    },
    {
        id: 4,
        name: 'Pardavimai'
    },
    {
        id: 5,
        name: 'Admino Nustatymai'
    },
]
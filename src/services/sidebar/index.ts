import {ISidebar} from '../../types/services/sidebar.types';

export const sideBarItems: ISidebar[] = [
    {
        name: 'Žmonių valdymas',
        subItems: [
            [
                { 
                    name: 'Darbuotojai',
                    icon: 'dashboard-icon.svg'
                }
            ],
            [
                {
                    name: 'Bendras tabelis',
                    icon: 'menu-icon.svg'
                },
                {
                    name: 'Suvestinė',
                    icon: 'file-icon.svg'
                },
            ],
            [
                {
                    name: 'Apgyvendinimas',
                    icon: 'bed-icon.svg'
                },
                {
                    name: 'Darbo priemonės',
                    icon: 'tools-icon.svg'
                },
                {
                    name: 'Automobiliai',
                    icon: 'car-icon.svg'
                },
                {
                    name: 'Nustatymai',
                    icon: 'toogle-icon.svg',
                    nestedItems: [
                        { name: 'Vartotojai' },
                        { name: 'Pareigos' },
                        { name: 'VartoKomandiruočių šalystojai' },
                        { name: 'Avalynės ir aprangos dydžiai' }
                    ]
                },
            ],
        ]
    },
    {
        name: 'Ištekliai'
    },
    {
        name: 'Resursai'
    },
    {
        name: 'Pardavimai'
    },
    {
        name: 'Admino Nustatymai'
    },
]
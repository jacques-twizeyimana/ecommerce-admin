import {ISidebar} from '../../types/services/sidebar.types';

export const sideBarItems: ISidebar[] = [
    {
        name: 'Žmonių valdymas',
        subItems: [
            [
                { 
                    name: 'Darbuotojai',
                    icon: 'Icon'
                }
            ],
            [
                {
                    name: 'Bendras tabelis',
                    icon: 'Icon'
                },
                {
                    name: 'Suvestinė',
                    icon: 'Icon'
                },
            ],
            [
                {
                    name: 'Apgyvendinimas',
                    icon: 'Icon'
                },
                {
                    name: 'Darbo priemonės',
                    icon: 'Icon'
                },
                {
                    name: 'Automobiliai',
                    icon: 'Icon'
                },
                {
                    name: 'Nustatymai',
                    icon: 'Icon',
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
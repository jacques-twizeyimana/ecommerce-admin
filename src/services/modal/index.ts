import {IModal} from '../../types/services/modal.types';

export const modalItems: IModal[] = [
    {
        name: 'Duomenys', 
        subItems: [
            {name: 'Pareigos *', icon: ''},
            {name: 'Įdarbinimo data *', icon: ''},
            {name: 'Pirmoji darbo diena *', icon: ''},
            {name: 'Etatas *', icon: ''},
            {name: 'Atlyginimas *', icon: ''},
            {name: 'Darbo savaitė *', icon: ''},
        ],
    },
    {
        name: 'Kontaktiniai duomenys'
    },
    {
        name: 'Gyvenamoji vieta'
    },
    {
        name: 'Banko rekvizitai'
    },
    {
        name: 'Vairuotojo pažymėjimas'
    },
    {
        name: 'Avalynės ir drabužių dydžiai'
    },
    {
        name: 'Kita info'
    }
]
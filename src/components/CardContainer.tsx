import Card from './Card';
import type { Experience } from '../types';
import { createContext } from 'react';

function CardContainer({ cardList = [], title = "" }: { cardList?: Array<Experience>; title?: string }) {
    const cards = cardList.map((card) => (
        <Card key={card.key} obj={card} />
    ));
    const CardContext = createContext<Experience[]>(cardList);
    return (
        <div className="cards-container py-10">
            <h4 className="text-2xl font-bold text-center pb-4">{title ? title : "Card Container"}</h4>
            <div className="flex gap-8 justify-center">
                <CardContext.Provider value={cardList}>
                    {cards}
                </CardContext.Provider>
            </div>
        </div>
    )
}

export default CardContainer;
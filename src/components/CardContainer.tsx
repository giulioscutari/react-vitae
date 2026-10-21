import Card from './Card';
import type { Experience, Technology } from '../types';

function CardContainer({ cardList = {}, title = "" }: { cardList?: Record<string, Experience | Technology> | Experience[] | Technology[]; title?: string }) {
    const cards = Array.isArray(cardList) ? cardList : Object.values(cardList);
    return (
        <div className="cards-container py-10">
            <h4 className="text-2xl font-bold text-center pb-4 block">{title ? title : "Card Container"}</h4>
            <div className="flex flex-wrap gap-8 justify-center ">
                {cards.map(card => <Card key={card.slug} obj={card} />)}
            </div>
        </div>
    )
}

export default CardContainer;
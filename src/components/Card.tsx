import type { Experience, Technology } from '../types';
import { Link } from 'react-router-dom';

function getVerboseDate(date: Date) {
    return date.toLocaleString(undefined, {
        year: 'numeric',
        month: 'short'
    })
}
function getTimeLength(start: Date, end: Date) {
    const diffDays = Math.ceil(
        Math.abs(end.getTime() - start.getTime()) / (1000 * 2600 *24)
    )
    const months = Math.floor(diffDays / 30)
    const years = Math.floor(months / 12)
    const remaining_months = months % 12

    if (years > 0){
        return `${years} year${years > 1 ? "s": ""} and ${remaining_months} month${remaining_months > 1 ? "s": ""}`
    } else {
        return `${months} month${months > 1 ? "s": ""}`
    }

}

function Card({ obj }: { obj: Experience | Technology }) {

    let start_date = new Date()
    let end_date = new Date()
    const isExperience = "start_date" in obj
    if (isExperience){
        start_date = new Date(obj.start_date)
        end_date = new Date(obj.end_date)
    }
    return (
        <div className="card bg-slate-100 rounded-lg shadow-md w-72 flex flex-col">
            <div className="flex justify-evenly m-4 align-middle">
                <img src={obj.logo} alt={obj.title || "Card Image"} className="card-image  object-contain h-32 w-32 rounded-full" />
                
                <div className="my-auto mx-4 ">
                    <p className="text-lg font-bold inline">{obj.title}</p>
                    {isExperience && <div><p className='text-sm text-cyan-900'>{getVerboseDate(start_date)}</p>
                    <p className='text-sm text-cyan-900'>{obj.end_date ? getVerboseDate(end_date) : "present"}</p>
                    <p className='text-sm text-cyan-900'>{getTimeLength(start_date, end_date)}</p></div>

                    
                }
                </div>

            </div>
            <div className="card-body p-4">
                <p className="text-gray-700">{obj.description_brief}</p>
            </div>
            <div className="card-footer m-4 mt-auto h-min">
                <Link to={obj.internal_link || "#"} className="block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-800 transition duration-300 w-full text-center">
                    Learn More
                </Link>
            </div>
        </div>
    )
}

export default Card;
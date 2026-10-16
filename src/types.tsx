
export type Experience = {
    key: number
    cover: string,
    logo: string,
    title: string,
    role: string,
    description: string,
    role_description: string,
    contributions: Array<string>,
    start_date: Date,
    end_date: Date,
    technologies: Array<string>,
    internal_link: string,
    external_links: Array<string>,
}

export type Technology = {
    key: number,
    slug: string,
    name: string,
    cover: string,
    logo: string,
    experience: number,
    used_professionally: boolean,
    description: string,
    experiences: Array<Experience>,
}
export type Portfolio = {[tech_or_exp:string]:Array<Technology>|{[experience_type:string]:Array<Experience>}
}
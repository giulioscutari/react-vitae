
export type ExperienceType = 'companies' | 'freelance_projects' | 'personal_projects'

export type Experience = {
    key: number
    slug: string
    cover: string,
    logo: string,
    title: string,
    role: string,
    description: string,
    description_brief: string,
    role_description: string,
    contributions: Array<string>,
    start_date: string,
    end_date: string,
    technologies: Array<string>,
    internal_link: string,
    external_links: Array<string>,
    slides?: Array<string>,
}

export type Technology = {
    key: number,
    slug: string,
    title: string,
    cover: string,
    logo: string,
    experience: number,
    used_professionally: boolean,
    description: string,
    description_brief: string,
    experiences: Record<ExperienceType, string[]>,
    internal_link: string,
    external_links: string[],
    achievements: string[],
    comment: string,
}
export type Portfolio = {
    technologies: Record<string, Technology>,
    experiences: Record<ExperienceType, Record<string, Experience>>,
}
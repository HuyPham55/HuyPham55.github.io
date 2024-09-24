export declare type LanguageLabels = {
    en: string;
    vi: string;
};

export declare type FormInputs = {
    name: string;
    email: string;
    message: string;
};

export declare type FormLabels = {
    contact: LanguageLabels;
    thank_you: {
        title: LanguageLabels;
        description: LanguageLabels;
    };
    name: LanguageLabels;
    message: LanguageLabels;
    buttons: {
        submit: LanguageLabels;
        cancel: LanguageLabels;
        hide: LanguageLabels;
        close: LanguageLabels;
    };
    validations: {
        name: LanguageLabels;
        email: LanguageLabels;
        message: LanguageLabels;
    };
};

export declare type Language = {
    key: string;
    title: string;
};

export declare type PageLabels = {
    home: LanguageLabels;
    about: LanguageLabels;
    details: LanguageLabels;
    save_a_copy: LanguageLabels;
    titles: {
        education: LanguageLabels;
        abilities: LanguageLabels;
        work_experience: LanguageLabels;
        technical_skill: LanguageLabels;
        media_skill: LanguageLabels;
        communication: LanguageLabels;
        interested_technologies: LanguageLabels;
    };
};

export declare type Details = {
    name: LanguageLabels;
    address: LanguageLabels;
};

export declare type TimelineEntry = {
    title: string;
    content: LanguageLabels;
    hover: boolean;
};

export declare type ThemeMode = {
    night_mode: LanguageLabels;
    light_mode: LanguageLabels;
};

export declare type Experience = {
    number: number;
    suffix: string;
    title: LanguageLabels;
};

export declare type TechnologyItem = {
    title: string;
    icon: string;
    url: string;
    content: string;
    colorClass: string;
    emphasize?: number;
};

export declare type TechnologySection = {
    title: LanguageLabels;
    altTitle: string;
    items: TechnologyItem[];
};

export declare type Communication = {
    title: LanguageLabels;
    description: LanguageLabels;
    icon: string;
};

export declare type Social = {
    title: string;
    icon: string;
    href: string;
};

export declare type Data = {
    form: {
        action: string;
        inputs: FormInputs;
        labels: FormLabels;
    };
    languages: Language[];
    labels: PageLabels;
    details: Details;
    timeline: TimelineEntry[];
    theme_mode: ThemeMode;
    experiences: Experience[];
    technologies: TechnologySection[];
    media_skills: {
        description: LanguageLabels;
    };
    communications: Communication[];
    socials: Social[];
}


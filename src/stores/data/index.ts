const data = {
    form: {
        action: 'https://docs.google.com/forms/u/0/d/e/1FAIpQLScnynTIJYKSAr_pYgVOWHiEMZH9AUoGeReZfZ1nVYRWqXNdfw/formResponse',
        inputs: {
            name: 'entry.1019521849',
            email: 'entry.398706197',
            message: 'entry.874969074',
        },
        labels: {
            contact: {
                en: 'Contact',
                vi: 'Liên hệ',
            },
            thank_you: {
                title: {
                    en: 'Thank you!',
                    vi: 'Cảm ơn!',
                },
                description: {
                    en: 'I will contact you as soon as possible.',
                    vn: 'Tôi sẽ liên hệ với bạn trong thời gian sớm nhất.',
                }
            },
            name: {
                en: 'Name/Company',
                vi: 'Tên/Tên công ty',
            },
            message: {
                en: 'Message',
                vi: 'Nội dung',
            },
            buttons: {
                submit: {
                    en: 'Submit',
                    vi: 'OK',
                },
                cancel: {
                    en: 'Cancel',
                    vi: 'Hủy',
                },
                hide: {
                    en: 'Don\'t show again',
                    vi: 'Không hiện lại',
                },
                close: {
                    en: 'Close',
                    vi: 'Đóng',
                }
            },
            validations: {
                name: {
                    en: 'Please fill your name',
                    vi: 'Vui lòng điền tên',
                },
                email: {
                    en: 'Please fill your email',
                    vi: 'Vui lòng điền địa chỉ email',
                },
                message: {
                    en: 'Tell me what you are up to',
                    vi: 'Tin nhắn',
                },
            }
        }
    },
    languages: [
        {
            key: 'en',
            title: 'English',
        },
        {
            key: 'vi',
            title: 'Vietnamese',
        }
    ],
    labels: {
        home: {
            en: "Home",
            vi: "Trang chủ",
        },
        about: {
            en: 'About',
            vi: 'Giới thiệu',
        },
        details: {
            en: 'Details',
            vi: 'Thông tin',
        },
        save_a_copy: {
            en: 'Save a copy',
            vi: 'Tải về',
        },
        titles: {
            education: {
                en: 'Education',
                vi: 'Trình độ giáo dục',
            },
            abilities: {
                en: 'Abilities',
                vi: 'Khẳ năng',
            },
            work_experience: {
                en: 'Work Experience',
                vi: 'Kinh nghiệm làm việc',
            },
            technical_skill: {
                en: 'Techinical Skills',
                vi: 'Kĩ năng kĩ thuật',
            },
            media_skill: {
                en: 'Media Skills',
                vi: 'Kĩ năng media',
            },
            communication: {
                en: 'Communication',
                vi: 'Ngôn ngữ giao tiếp',
            },
            interested_technologies: {
                en: 'Interested Technologies',
                vi: 'Công nghệ quan tâm',
            },
        }
    },
    details: {
        name: {
            en: 'Pham Duc Huy',
            vi: 'Phạm Đức Huy',
        },
        address: {
            en: 'Hanoi, Vietnam',
            vi: 'Hà Nội, Việt Nam',
        },
    },
    timeline: [
        {
            title: "2015 - 2018",
            content: {
                en: "Ngoc Hoi High School",
                vi: "Trường THPT Ngọc Hồi",
            },
            hover: false
        },
        {
            title: "2018 - 2023",
            content: {
                en: "National Economic University - Information Technology",
                vi: "Trường Đại học Kinh tế Quốc dân - Khoa Công nghệ thông tin",
            },
            hover: false
        },
    ],
    theme_mode: {
        night_mode: {
            en: 'Night mode',
            vi: 'Tối'
        },
        light_mode: {
            en: 'Light mode',
            vi: 'Sáng'
        }
    },
    experiences: [
        {
            number: 1000,
            suffix: "+",
            title: {
                en: "Stackoverflow reputation",
                vi: "Stackoverflow reputation",
            },
        },
        {
            number: 15,
            suffix: "+",
            title: {
                en: "Projects done",
                vi: "Projects hoàn thiện",
            },
        },
        {
            number: 12,
            suffix: "+",
            title: {
                en: "Months VueJS",
                vi: "Tháng VueJS",
            },
        },
        {
            number: 2,
            suffix: "+",
            title: {
                en: "Years Laravel",
                vi: "Năm Laravel",
            },
        },
    ],
    technologies: [
        {
            title: {
                en: "Frontend",
                vi: "Frontend",
            },
            altTitle: 'What I used to develop UI',
            items: [
                {
                    title: "VueJS",
                    icon: "VueIcon",
                    url: "https://vuejs.org/",
                    content: "",
                    colorClass: '#4fc08d',
                    emphasize: 1,
                },
                {
                    title: "Tailwind",
                    icon: "Tailwind",
                    url: "https://tailwindcss.com/",
                    content: "",
                    colorClass: '',

                },
                {
                    title: "Bootstrap",
                    icon: "BootstrapIcon",
                    url: "https://getbootstrap.com/",
                    content: "",
                    colorClass: '#7952b3',

                },
                {
                    title: "Webpack",
                    icon: "WebpackIcon",
                    url: "https://webpack.js.org/",
                    content: "",
                    colorClass: '',

                },
                {
                    title: "PostCSS",
                    icon: "PostCSSIcon",
                    url: "https://postcss.org/",
                    content: "",
                    colorClass: '#dd3a0a',
                },
                {
                    title: "jQuery",
                    icon: "jQueryIcon",
                    url: "https://jquery.com/",
                    content: "",
                    colorClass: '',
                },
            ]
        },
        {
            title: {
                en: "Backend",
                vi: "Backend",
            },
            altTitle: '',
            items: [
                {
                    title: "Laravel",
                    icon: "Laravel",
                    url: "https://laravel.com/",
                    content: "",
                    colorClass: '#ff2d20',
                    emphasize: 1,
                },
                {
                    title: "MySQL",
                    icon: "MySQLIcon",
                    url: "https://www.mysql.com/",
                    content: "",
                    colorClass: '',

                },
                {
                    title: "Redis",
                    icon: "RedisIcon",
                    url: "https://redis.io/",
                    content: "",
                    colorClass: '',
                },
                {
                    title: "Elasticsearch",
                    icon: "ElasticsearchIcon",
                    url: "https://www.elastic.co/",
                    content: "",
                    colorClass: '',
                },
            ]
        },
        {
            title: {
                en: "Foundation",
                vi: "Foundation",
            },
            altTitle: '',
            items: [
                {
                    title: "HTML",
                    icon: "HTMLIcon",
                    url: "",
                    content: "",
                    colorClass: '#e44d26',

                },
                {
                    title: "CSS",
                    icon: "CSSIcon",
                    url: "",
                    content: "",
                    colorClass: '#264de4',
                },
                {
                    title: "JavaScript",
                    icon: "JavaScriptIcon",
                    url: "",
                    content: "",
                    colorClass: '#f7e018',

                },
                {
                    title: "TypeScript",
                    icon: "TypeScriptIcon",
                    url: "",
                    content: "",
                    colorClass: '#007acc',

                },
                {
                    title: "PHP",
                    icon: "PHPIcon",
                    url: "https://www.php.net/",
                    content: "",
                    colorClass: '#484c89',

                }
            ]
        },
        {
            title: {
                en: "Others",
                vi: "Khác",
            },
            altTitle: '',
            items: [
                {
                    title: "Docker",
                    icon: "DockerLogo",
                    url: "https://www.docker.com/",
                    content: "",
                    colorClass: '#2496ed',

                },
                {
                    title: "Axios",
                    icon: "AxiosLogo",
                    url: "https://axios-http.com/",
                    content: "",
                    colorClass: '',
                },
            ]
        },
    ],

    media_skills: {
        description: {
            en: 'Ability to use following tools at basic needs.',
            vi: 'Khả năng sử dụng các công cụ sau ở mức độ cơ bản.',
        },
    },
    communications: [
        {
            title: {
                en: 'English',
                vi: 'Tiếng Anh',
            },
            description: {
                en: 'Advanced Level - 7.5 IELTS - C1 Equivalent',
                vi: 'Fluent - 7.5 IELTS - C1 Tương đương',
            },
            icon: '/images/1235px-US_flag_51_stars.svg.png'
        },
        {
            title: {
                en: 'Vietnamese',
                vi: 'Tiếng Việt',
            },
            description: {
                en: 'Native speaker',
                vi: 'Native speaker',
            },
            icon: '/images/Flag-Vietnam.jpg'
        }
    ],
    socials: [
        {
            title: "StackOverflow",
            icon: "StackOverflow",
            href: "https://stackoverflow.com/users/12453562/huy-ph%E1%BA%A1m",
        },
        {
            title: "huyducphamofficial@gmail.com",
            icon: "Email",
            href: "mailto:huyducphamofficial@gmail.com",
        },
        {
            title: "HuyPham55",
            icon: "GitHub",
            href: "https://github.com/HuyPham55",
        },
        {
            title: "LinkedIn",
            icon: "LinkedIn",
            href: "https://www.linkedin.com/in/huy-duc-pham",
        }
    ]
}

export default data;
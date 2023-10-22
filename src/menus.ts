export interface MenuItem {
    label: string;
    link: string;
    icon?: string;
}

export const primaryMenu: MenuItem[] = [
    {
        label: "About this app",
        link: "/about",
    },
    {
        label: "ChatGPT Prompts",
        link: "https://www.buymeacoffee.com/chatswithcs/e/111258",
        icon: "external-link-alt",
    },
];

export const secondaryMenu: MenuItem[] = [
    {
        label: "Tiktok",
        link: "https://www.tiktok.com/@chatswithchatgpt",
        icon: "tiktok fab",
    },
    {
        label: "Twitter",
        link: "https://twitter.com/chatswchatgpt",
        icon: "twitter fab",
    },
];
import starlight from "@astrojs/starlight";
import { defineConfig } from "astro/config";
import wizGrammar from "../vscode/syntaxes/wiz.tmLanguage.json" with {
    type: "json",
};

const wizLanguage = {
    ...wizGrammar,
    name: "wiz",
    aliases: ["typed-shell"],
};

export default defineConfig({
    site: process.env.WIZ_DOCS_SITE ?? "https://wiz.sh",
    base: process.env.WIZ_DOCS_BASE ?? "/",
    integrations: [
        starlight({
            title: "Wiz",
            description:
                "Multi-source package management and typed shell programming.",
            social: [
                {
                    icon: "github",
                    label: "Wiz on GitHub",
                    href: "https://github.com/wiz-sh/docs",
                },
            ],
            editLink: {
                baseUrl:
                    "https://github.com/wiz-sh/docs/edit/main/apps/docs/src/content/docs/",
            },
            sidebar: [
                { slug: "" },
                {
                    label: "Guides",
                    items: [{ autogenerate: { directory: "guides" } }],
                },
                {
                    label: "Language",
                    items: [{ autogenerate: { directory: "language" } }],
                },
                {
                    label: "Tooling",
                    items: [{ autogenerate: { directory: "tooling" } }],
                },
                {
                    label: "Package manager",
                    items: [{ autogenerate: { directory: "package-manager" } }],
                },
                {
                    label: "Registry",
                    items: [{ autogenerate: { directory: "registry" } }],
                },
                {
                    label: "Architecture",
                    collapsed: true,
                    items: [{ autogenerate: { directory: "architecture" } }],
                },
                {
                    label: "Development",
                    collapsed: true,
                    items: [{ autogenerate: { directory: "development" } }],
                },
            ],
            lastUpdated: true,
            credits: true,
            expressiveCode: {
                shiki: {
                    langs: [wizLanguage],
                },
            },
        }),
    ],
});

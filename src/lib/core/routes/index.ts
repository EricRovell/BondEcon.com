import { derived } from "svelte/store";
import { locale } from "svelte-i18n";

export const basePath = derived(locale, $locale => `/${$locale.slice(0, 2)}`);

// pages
export const homePagePath = derived(basePath, $basePath => `${$basePath}/home`);
export const blogPagePath = derived(basePath, $basePath => `${$basePath}/blog`);
export const articlesPagePath = derived(blogPagePath, $path => `${$path}/articles`);
export const econtwittsPagePath = derived(blogPagePath, $path => `${$path}/econtwitts`);
export const cvPagePath = derived(basePath, $basePath => `${$basePath}/cv`);
export const researchPath = derived(basePath, $basePath => `${$basePath}/research`);
export const caseStudiesPath = derived(basePath, $basePath => `${$basePath}/cases`);
export const cvExperienceSection = derived(cvPagePath, $path => `${$path}#experience`);
export const cvEducationSection = derived(cvPagePath, $path => `${$path}#education`);
export const cvProjectsSection = derived(cvPagePath, $path => `${$path}#projects`);
export const aboutPagePath = derived(basePath, $basePath => `${$basePath}/about`);
export const licencePath = derived(basePath, $basePath => `${$basePath}/licence`);

// contents
export const articlePath = derived(basePath, $path => (slug: string) => `${$path}/blog/${slug}`);
export const econtwittPath = derived(basePath, $path => (id: string) => `${$path}/blogpost/econtwitt-${id}`);

// information
export const repositoryPath = "https://www.gitgub.com/EricRovell/bondecon.com";
export const creatorGithubProfilePath = "https://github.com/EricRovell";
export const designerPortfolioPath = "https://web.marcelforart.com/victoriakan";
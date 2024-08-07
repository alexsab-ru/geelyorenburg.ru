import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import alpinejs from '@astrojs/alpinejs';
import sitemap from "@astrojs/sitemap";
import robots from "astro-robots";
import mdx from "@astrojs/mdx";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
	integrations: [
		tailwind({
			configFile: './tailwind.geely.js'
		}),
		sitemap(),
		robots({
			policy: [
				{
					userAgent: ["*"],
					allow: ["/"],
					disallow: ["/?*"],
				},
			  ],
		}),
		alpinejs(),
		mdx(),
		icon(),
	],
	redirects: {
		'/special-offers/vesna-raduet-vygodnym-predlozheniem/': {
			status: 301,
			destination:'/special-offers/leto-raduet-vygodnym-predlozheniem/'
		}
	},
	site: 'https://geelyorenburg.ru',
	base: '/'
});

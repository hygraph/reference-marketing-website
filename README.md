# reference-marketing-website

> A [Next.js](https://nextjs.org/) starter for creating a SaaS Marketing Website with [GraphCMS](https://graphcms.com)

• [Demo](https://marketing-websites.withheadlesscms.com/)

## Quick start

1. Clone the repository and install project dependencies

```shell
npx degit GraphCMS/reference-marketing-website#main reference-marketing-website
cd reference-marketing-website
yarn
```

2. **Provide your GraphCMS project keys**

> In order to use this starter, you'll need to have created a new GraphCMS project using our `Marketing Website Template`.

Navigate into your new site’s directory and copy the `.env.local.example` file.

```shell
cp .env.local.example .env.local
```

Inside of your newly created `.env.local` file, provide values for the variable. These variables can be found in the [project settings UI](https://graphcms.com/docs/guides/concepts/apis#working-with-apis).

```env
NEXT_PUBLIC_GRAPHCMS_URL=""
```

3. **Start building!**

```shell
yarn dev
```

## Features

- [next/image](https://nextjs.org/docs/api-reference/next/image)
- [Internationalized Routing](https://nextjs.org/docs/advanced-features/i18n-routing)
- [GraphQL Union Types (Polymorphic Relations)](https://graphcms.com/docs/schema/field-types)
- [next-seo](https://www.npmjs.com/package/next-seo)

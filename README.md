# reference-marketing-website

> A [Next.js](https://nextjs.org/) starter for creating a SaaS Marketing Website with [GraphCMS](https://graphcms.com)

• [Demo](https://marketing-websites.withheadlesscms.com/)

[![Clone project](https://graphcms.com/button)](https://app.graphcms.com/clone/5f2c35155b33496999b9467afe88b34f?name=Marketing%20Website)
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FGraphCMS%2Freference-marketing-website&env=NEXT_PUBLIC_GRAPHCMS_URL&envDescription=Your%20GraphCMS%20API%20endpoint&envLink=https%3A%2F%2Fgraphcms.com%2Fdocs%2Fapi-reference%2Fbasics%2Fenvironments%23environment-endpoints&demo-title=GraphCMS%20Marketing%20Site%20Reference&demo-description=A%20Next.js%20starter%20for%20creating%20a%20SaaS%20Marketing%20Website%20with%20GraphCMS&demo-url=https%3A%2F%2Fmarketing-websites.withheadlesscms.com%2F&demo-image=https%3A%2F%2Fmedia.graphcms.com%2F0GnTWzWbRBSQzoDQs8R3)

## Quick start

1. Clone the repository and install project dependencies

```shell
npx degit GraphCMS/reference-marketing-website#main reference-marketing-website
cd reference-marketing-website
yarn
```

2. **Provide your GraphCMS project keys**

Navigate into your new site’s directory and copy the `.env.local.example` file.

```shell
cp .env.local.example .env.local
```

Inside of your newly created `.env.local` file, provide values for the variable. These variables can be found in the [project settings UI](https://graphcms.com/docs/guides/concepts/apis#working-with-apis).

```env
NEXT_PUBLIC_GRAPHCMS_URL=
```

3. **Start building!**

```shell
yarn dev
```

## Next.js Preview Mode

If you want to enable [Next.js Preview Mode](https://nextjs.org/docs/advanced-features/preview-mode) you'll need to add the following to your `.env`:

```env
GRAPHCMS_TOKEN=
GRAPHCMS_PREVIEW_TOKEN=
GRAPHCMS_PREVIEW_SECRET=
```

### `GRAPHCMS_TOKEN`

This should be a Permanent Auth Token that is set to fetch content from _PUBLISHED_ content stage by default.

### `GRAPHCMS_PREVIEW_TOKEN`

This should be a Permanent Auth Token that is set to fetch content from _DRAFT_ content stage by default.

## `GRAPHCMS_PREVIEW_SECRET`

You'll need to make sure when configuring the Preview URL inside GraphCMS that it passes the same secret value you assigned to `GRAPHCMS_PREVIEW_SECRET`.

You'll need to update both the Page & Blog Post model to add a Preview URL. The URLs should look like this:

- **Page**: `https://[your-domain.com]/api/preview?secret=[GRAPHCMS_PREVIEW_SECRET_VALUE_HERE]&slug={slug}`
- **Blog Post**: `https://[your-domain.com]/api/preview?secret=[GRAPHCMS_PREVIEW_SECRET_VALUE_HERE]&slug=blog/{slug}`

## Features

- [Next.js Preview Mode](https://nextjs.org/docs/advanced-features/preview-mode)
- [next/image](https://nextjs.org/docs/api-reference/next/image)
- [Internationalized Routing](https://nextjs.org/docs/advanced-features/i18n-routing)
- [GraphQL Union Types (Polymorphic Relations)](https://graphcms.com/docs/schema/field-types)
- [next-seo](https://www.npmjs.com/package/next-seo)

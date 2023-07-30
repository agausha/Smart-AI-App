# A Smart-AI Application

## Live Preview Link

[https://smart-ai-app.vercel.app]

## Install packages

```bash
npm install
#or
yarn install
#or
pnpm install
```

### Setup .env file

```js
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=

NEXT_PUBLIC_CLERK_SIGN_IN_URL=
NEXT_PUBLIC_CLERK_SIGN_UP_URL=
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=

OPENAI_API_KEY=

REPLICATE_API_TOKEN=

DATABASE_URL=

STRIPE_API_KEY=

STRIPE_WEBHOOK_SECRET=

NEXT_PUBLIC_APP_URL=

```

### Setup Prisma

````bash
npx prisma db push

### Start the app

```shell
npm run dev
#or
yarn dev
#or
pnpm dev
````

# [運動火腿](https://undou.dannyisadog.com)

## Getting Started

1. Create a `.env` file in the root of the project and add the following

```bash
  cp .env.example .env
```

2. Generate auth secret key

```bash
  npx auth secret
```

3. Fill up your google & github client id & secret in `.env`

```bash
  ...
  AUTH_GOOGLE_ID=xxxx
  AUTH_GOOGLE_SECRET=xxxx
  ...
```

4. Create your [Resend api key](https://resend.com/api-keys) for email service in `.env`
   
```bash
  ...
  RESEND_API_KEY=xxxx
  ...
```

5. Install dependencies

```bash
  yarn install
```

6. Start postgres database

```bash
  docker-compose up -d
```

7. Run the development server:

```bash
  yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

FROM node:20-alpine AS build_stage_pnpm

RUN npm install -g pnpm

RUN adduser -D -s /bin/sh nextjs
USER nextjs

WORKDIR /app

COPY --from=build_stage_pnpm /app/package.json /app/pnpm-lock.yaml ./
COPY --from=build_stage_pnpm /app/node_modules /app/node_modules
COPY --from=build_stage_pnpm /app/public /app/public
COPY --from=build_stage_pnpm /app/.next /app/.next

EXPOSE 3000

ENV NODE_ENV production

CMD ["pnpm", "start"]

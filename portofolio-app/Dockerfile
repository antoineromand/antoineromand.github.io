# syntax=docker/dockerfile:1.7

ARG NODE_IMAGE=node:24-alpine3.23
ARG NGINX_IMAGE=nginx:stable-alpine3.23-slim

FROM ${NODE_IMAGE} AS builder

WORKDIR /app

COPY package.json package-lock.json ./

RUN --mount=type=cache,target=/root/.npm \
    npm ci

COPY . .

RUN npm run build

FROM ${NGINX_IMAGE} AS runner

COPY nginx.conf /etc/nginx/nginx.conf
COPY --chown=nginx:nginx --from=builder /app/dist/*/browser/ /usr/share/nginx/html/

USER nginx

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]

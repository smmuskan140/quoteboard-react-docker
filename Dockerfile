# Stage 1: install dependencies and build the Vite application
FROM node:20-alpine AS build

WORKDIR /app

# Copy manifests first so Docker can cache dependency installation
COPY package*.json ./
RUN npm ci

# Copy source and generate the production bundle
COPY . .
RUN npm run build

# Stage 2: serve only the static build with Nginx
FROM nginx:alpine AS production

COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

FROM node:14-alpine AS build
WORKDIR /app
COPY package.json ./
COPY yarn.lock ./
RUN yarn install --frozen-lockfile
COPY . .
RUN yarn build

# FROM nginx:1.19-alpine AS server
# COPY ./nginx/nginx.conf /nginx/nginx/conf.d/default.conf
# COPY --from=builder ./app/build /usr/share/nginx/html


# production environment
FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html
# new
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 3000
CMD ["nginx", "-g", "daemon off;"]
# Use official Node.js image
FROM node:18-alpine

# Set working directory inside container
WORKDIR /app

ARG VITE_BACKEND_API_URL
ENV VITE_BACKEND_API_URL=$VITE_BACKEND_API_URL

# Copy package.json and package-lock.json first (better caching)
COPY package*.json ./

# Install dependencies
RUN npm install
RUN npm install -g serve


# Copy the rest of the application
# COPY . .
COPY ./vite.config.js .
COPY ./settings.json .
COPY ./index.html .
COPY ./src ./src
COPY ./vite-env.d.ts .

RUN npm run build

# # Copy built files from previous stage
# COPY --from=build /app/dist ./dist

EXPOSE 80

# Serve the production build
CMD ["serve", "-s", "dist", "-l", "80"]
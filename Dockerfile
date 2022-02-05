FROM node:16

ENV PORT 3000

# Create app directory
RUN mkdir -p /usr/src/sentinel
WORKDIR /usr/src/sentinel

# Installing dependencies
COPY package*.json /usr/src/sentinel/
RUN npm install

# Copying source files
COPY . /usr/src/sentinel

# Building app
RUN npm run build
EXPOSE 3000

# Running the app
CMD ["npm", "start"]
# FROM node:10.13-alpine
# ENV NODE_ENV production
# WORKDIR /admin
# COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
# RUN npm install
# RUN npm rebuild
# COPY . /admin/
# RUN npm rebuild
# EXPOSE 4200
# CMD npm start

# Create image based on the official Node 10 image from dockerhub
FROM node:10

# Create a directory where our app will be placed
RUN mkdir -p /admin/

# Change directory so that our commands run inside this new directory
WORKDIR /admin

# Copy dependency definitions
COPY package*.json /admin/

# Install dependecies
RUN npm install

# Get all the code needed to run the app
COPY . /admin/

# Expose the port the app runs in
EXPOSE 4200

# Serve the app
CMD ["npm", "run", "build"]
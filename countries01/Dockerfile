# Setting base image
FROM node:latest
# Updating system version
RUN apt-get update && apt-get install

# Creating working directory
RUN mkdir -p /usr/src/app
# Setting which is the working directory
WORKDIR /usr/src/app

# Copying dependencies
COPY package.json /usr/src/app
# Installing the dependencies in the workdir
RUN npm install

# Copying the source to the working directory
COPY . /usr/src/app
# Exposing port in use
EXPOSE 4200
# Running the node application
CMD ["npm", "start"]
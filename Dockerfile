#choosing the alpine base image for its light weight 

FROM node:alpine

# creating a directory in the container 

WORKDIR /app

# copying package.json package-lock.json files 

COPY package*.json .
 
# installing the required dependencies for the application

RUN npm install 

# moving the project to the container

COPY  . .

# exposing the port 3000 which the application runs on 

EXPOSE 3000

# running the application 

CMD [ "npm" , "start" ]
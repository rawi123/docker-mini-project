#basing our node images on our node (install node)
FROM node:16-alpine

ENV MONGO_DB_USERNAME=admin \
    MONGO_DB_PWS=password
#create home/app folder in the container
RUN mkdir -p /home/app

#copy current folder files to home/app on the host machine 
#the ./app is the location on the local pc, the ./home/app is the location on the container
copy ./app /home/app 

#required! exectues an entry point linux command (start file server.js in node)
#Can be replaced using "command" in the yaml file
#CMD ["node","/home/app/server.js"]

## CMD = entry point command (unique)
## RUN commands can appear multiple files
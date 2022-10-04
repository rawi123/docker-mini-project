# docker-tests
tests in order to get familiar with docker, Dockerfile and docker compose yaml

## to run the repos: 
1. ### download docker
2. ### clonse the repo
## navigate to the base folder
```
docker-compose -f .\docker-compose-test.yaml up
```

this should pull and run a mongodb image <br />
and boot up a nodejs server on node-16 alpine base image

<a href="https://docs.google.com/presentation/d/1yt7Yc6X77aj1gsJsvxN0z9IQF8X_JbD_s7tBftcRZpE/edit#slide=id.gd9c453428_0_16" targer="_blank">Docker presentation<a/>

##### **_NOTE:_** please note the server.js + routes are an example only. their porpuse is to provide a server to run with docker file and does not using best pratices!

### In order to run the docker file , you have to provide 2 parameters.
Image name <br/>
&nbsp;&nbsp;&nbsp;&nbsp;-t my-app:1.0 <br/>
Location of the docker file


### Commands
* Docker pull : gets the image locally.<br/>
* Docker run : starts an image in a container, if not downloaded then download and start (attached mode).<br/>
* Docker run -d : disattached mode.<br/>
* Docker run -p(host port:container port) : binds the container port to a host port.<br/>
* Docker ps : lists all running containers.<br/>
* Docker ps -a : lists all containers.<br/>
* Docker stop (container id): stops a container.<br/>
* Docker start (container id): starts a container.<br/>
* Docker images: lists all the images you have locally.<br/>
* Docker image rm:remove an image<br/>
*   Docker logs (container id/name): lists container logs.<br/>
* Docker exec : get a terminal of a running container.<br/>
* Docker exec -it (container id) /bin/bash: interactive terminal<br/>

&nbsp;&nbsp;&nbsp;&nbsp; **_NOTE:_** Ports should be different on the local host , but two containers can have the same port.<br/>
&nbsp;&nbsp;&nbsp;&nbsp;Should bind the container port with a local port so it can forward the requests.

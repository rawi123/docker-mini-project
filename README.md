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

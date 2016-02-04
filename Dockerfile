# DOCKER-VERSION 0.10.0

FROM microsoft/aspnet

# make sure apt is up to date
RUN apt-get update && apt-get install -y nodejs npm git git-core nodejs-legacy

RUN npm -g install bower
RUN npm -g install typescript
RUN npm -g install tsd@next
RUN npm -g install gulp
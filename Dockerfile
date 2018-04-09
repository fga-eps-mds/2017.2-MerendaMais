FROM node:alpine

RUN apt-get update && \
    apt-get install software-properties-common \
    python-software-properties \
    wget \
    curl \
    git \
    unzip -y && \
    apt-get clean


ENV PATH ${PATH}:/opt/node/bin
RUN npm install -g create-react-native-app

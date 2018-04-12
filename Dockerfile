# Pull base image.
FROM ubuntu:latest

# Install base software packages
RUN apt-get update && \
    apt-get install software-properties-common \
    python-software-properties \
    wget \
    curl \
    git \
    unzip -y && \
    apt-get clean

RUN mkdir /app
ADD . /app
# ——————————
# Install Node and global packages
# ——————————
ENV NODE_VERSION 6.11.2
RUN cd && \
    wget -q http://nodejs.org/dist/v${NODE_VERSION}/node-v${NODE_VERSION}-linux-x64.tar.gz && \
    tar -xzf node-v${NODE_VERSION}-linux-x64.tar.gz && \
    mv node-v${NODE_VERSION}-linux-x64 /opt/node && \
    rm node-v${NODE_VERSION}-linux-x64.tar.gz
ENV PATH ${PATH}:/opt/node/bin


# ——————————
# Install Basic React-Native packages
# ——————————
RUN npm install -g create-react-native-app
RUN npm install -g react-redux
RUN npm start

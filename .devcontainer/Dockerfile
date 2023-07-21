FROM node:20

ENV DEVCONTAINER=true

# Updates packages
RUN apt update && apt install -y

# Install Yarn v3
RUN corepack enable
RUN corepack prepare yarn@stable --activate

# Simple prompt
RUN /bin/bash -c "cd /root && echo \"PS1='$ '\" >> .bashrc && source .bashrc"

# Install lsd
RUN apt install lsd -y
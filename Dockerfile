FROM digitallyseamless/nodejs-bower-grunt

RUN mkdir /app
WORKDIR /app

ADD package.json /app
ADD bower.json /app

RUN npm install
RUN bower install

ADD . /app
EXPOSE 9000

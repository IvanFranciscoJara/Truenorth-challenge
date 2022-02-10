## Running Api

1. Navigate to /Api
2. Build docker image: `docker build -t api -t api-docker .`
3. Run docker image: `docker run -p 3000:3000 api-docker`

## Running front-end

1. Navigate to /front-end
2. Build docker image: `docker build -t front -t front-end-docker .`
3. Run docker image: `docker run -p 3000:3000 front-end-docker`

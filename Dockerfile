# Use the official Node.js image as the base image
FROM node:18.17.0

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and yarn.lock to the container
COPY package.json yarn.lock ./

# Install Yarn globally (if it's not already installed in the Node.js image)
#RUN npm install -g yarn

# Install the application dependencies using Yarn
RUN yarn install

# Copy the rest of the application code to the container
COPY . /app

# Build the Next.js application
RUN yarn build

# Expose the port on which Next.js is running (if using a custom port, change 3000 to your desired port)
EXPOSE 3000

# Start the Next.js application when the container starts
CMD ["yarn", "dev"]
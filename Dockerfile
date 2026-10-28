# Use the official pre-built Playwright Linux environment
FROM ://microsoft.com

# Install additional streaming media loop utilities 
RUN apt-get update && apt-get install -y xvfb fluxbox pulseaudio v4l2loopback-utils ffmpeg python3-pip && pip3 install streamlink --break-system-packages

# Set up the internal application path
WORKDIR /app
COPY package.json ./
RUN npm install

# Copy your bot code files into the cloud container
COPY . .

# Launch the virtual monitor and fire the crash-safed background script
CMD ["xvfb-run", "--server-args=-screen 0 1280x720x24", "node", "Bot.js"]

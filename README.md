# Minecraft Server CDK

### This was developed using minecraft 1.17.1

`sudo add-apt-repository ppa:linuxuprising/java`

`sudo apt -y update && sudo apt -y install openjdk-16-jdk screen unzip`

`sudo mkdir /usr/minecraft`

`cd /usr/minecraft`

`sudo wget -O minecraft-server.jar https://launcher.mojang.com/v1/objects/a16d67e5807f57fc4e550299cf20226194497dc2/server.jar`

`screen`

`sudo java -Xmx2G -Xms1G -jar minecraft-server.jar nogui`

`sudo chown ubuntu eula.txt`

`echo "eula=true" > eula.txt`

`sudo java -Xmx2G -Xms1G -jar minecraft-server.jar nogui`

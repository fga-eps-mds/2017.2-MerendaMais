FROM java:8

#In Host-Terminal exec this command: sudo xhost +local:docker

# Intall unzip
RUN apt-get install unzip

# Install SDK
RUN mkdir /app/
WORKDIR /app/
RUN wget https://dl.google.com/android/repository/sdk-tools-linux-3859397.zip -P /app/
RUN unzip /app/sdk-tools-linux-3859397.zip  -d android-sdk-linux

# ENV JAVA_HOME="/opt/jdk1.8.0_171"
ENV PATH="$PATH:${JAVA_HOME}/bin"
ENV ANDROID_HOME=/app/android-sdk-linux
ENV ANDROID_SDK_ROOT=/app/android-sdk-linux
ENV PATH=$PATH:$ANDROID_HOME/tools
ENV PATH=$PATH:$ANDROID_HOME/platform-tools
ENV PATH=$PATH:$ANDROID_HOME/tools/bin

RUN yes | sdkmanager --licenses

RUN yes | $ANDROID_HOME/tools/bin/sdkmanager "tools" 

RUN echo "y" | android update sdk


RUN $ANDROID_HOME/tools/bin/sdkmanager "platforms;android-25"
RUN $ANDROID_HOME/tools/bin/sdkmanager "system-images;android-25;google_apis;x86"

# Create AVD
RUN $ANDROID_HOME/tools/bin/avdmanager create avd\
 -n android-emulator\
 -k "system-images;android-25;google_apis;x86"\
 --device "Nexus 5"\
 --sdcard 100M
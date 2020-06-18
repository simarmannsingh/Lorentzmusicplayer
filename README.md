# Lorentz Music Player

![Blog Preview](https://github.com/simarmannsingh/musicplayer/blob/master/app-preview.png "Preview generated as on 19th June 2020")

## About

Lorentz Music Player is a web-browser based music player. For now, it can play songs offline (i.e, from a directory/folder). In future, the functionality of streaming music over HTTP or RTSP would also be added. The User interface of the application is implemented using simple HTML and CSS for now, but would be changed and implemented using [React.js](https://reactjs.org/) or [Three.js](https://threejs.org/) in future. For backend, Node.js  is planned when adding RTSP for online streaming.


## Reason For Creating Music Player
You might be wondering as to why would one create a new Music Player when we've music streaming services like Spotify or Deezer etc. The reason for creating this Music player lies in being concious about Privacy and data-security.

Like all other ideas, the idea for this music player also started from a evening tea get-together, where a couple of friends discussing about Data-security raised a question whether a simple application like this Music streaming app could be implemented with our current skillset. The answer is obviously yes. And hence started the journey of an online music streaming player which serves encrypted streams of data (music here) over interent. So one need not carry his/her/their offline music player. All one needs is an internet connection. Simply login to the online music player and Lorentz will help you make your mood better.

Everyone is welcome to audit the code and point out shortcomings (specifically security vulnerabilities) in the code and help make this project usable. As always, you can contact the developer via a secure channel provided by [Hawkpost](https://hawkpost.co/box/fcfb631e-d2b4-4805-a9d4-5ceb9a2ce8b4). This link allows you to send messages encrypted with *4096-bit RSA* algorithm (Its quite difficult to crack, one can say)

## How to use
You can clone this project into a folder of your choice. Don't know how to do that? Don't worry, if you are using Linux, simply execute the following commands in the terminal one at a time.

    mkdir musicapp
    cd musicapp
    git clone https://github.com/simarmannsingh/musicplayer.git

Then you need to created a sub folder named Music and add your .mp3 media collection to that folder. And then, simply run the musicplayer.html file, everything will be taken care of.

## Copyright and License

Copyright 2020 Simar Mann Singh Chawala. Code released under the [MIT](https://github.com/simarmannsingh/musicplayer/blob/master/LICENSE) license.

If anything is unclear, you can contact me anytime. I always respond within 24 hrs. I also happen to have some inclination towards writing some tech blog posts (things which I don't find anywhere else and I feel the need to explain to someone, anyone) on my personal website. So, do visit my website <https://simarmannsingh.de> and if you like the stuff I write, feel free to subscribe as well.

*The present day world needs more Open-source developers than anything else.*
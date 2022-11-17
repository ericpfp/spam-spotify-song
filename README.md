# spam-spotify-song

this script will add the same song on your spotify playlist until your set goal

for example you can make a playlist thats 10k songs huge with the same song

this tutorial relies on you already having [nodejs](https://nodejs.org/en/) installed

## usage

1. Copy the `.env.example` file and rename it to `.env`
2. Go to <https://developer.spotify.com/console/post-playlist-tracks/>
3. Click "Get Token" and select `playlist-modify-public` and `playlist-motify-private` and click "Request Token"
4. Copy the OAuth Token in the textbox and paste it alongside the line that says `OAUTH_TOKEN=`
5. Right click on your playlist on Spotify and click Share > Copy link to playlist
6. Paste the link in Notepad and copy the ID (not the URL, and not the one beside `?si`)
7. Paste the ID beside `PLAYLIST_ID=` in the `.env` file
8. Right click on the track you want to use on Spotify and click Share, hold the control key and click Copy Spotify URI
9. Paste the URI beside `TRACK_URI=` in your `.env` file, the URI should look something like this: `spotify:track:TRACK_ID`
10. Open `spamMySong.js` and update the `GOAL` and `SONGS_IN_PLAYLIST` variables
11. Open a Terminal to this directory (on windows, press Windows Key + R, then `cmd.exe`)
12. Type in `cd ` followed by the path to this directory and press enter
13. Type in `npm i` and wait for it to install the packages
14. Run `node spamMySong.js`
15. Wait until the script is done spamming your song

## notes

spotify's ratelimits are kinda hefty so youll have to wait a long time if u get rate limited, but adding 1k songs should be ez and sorta fast

import dotenv from 'dotenv';
import fetch from 'node-fetch';

dotenv.config();

const playlistID = process.env.PLAYLIST_ID;
const trackURI = process.env.TRACK_URI;
const oauthToken = process.env.OAUTH_TOKEN;

const SONGS_IN_PLAYLIST = 1106; // UPDATE THIS TO HOW MANY SONGS ARE IN YOUR PLAYLIST
const GOAL = 10000; // UPDATE THIS TO YOUR GOAL

const DELAY = 1000; // in milliseconds

const playlistAddURL = `https://api.spotify.com/v1/playlists/${playlistID}/tracks?uris=${encodeURIComponent(trackURI)}`;

var iteration = SONGS_IN_PLAYLIST;

async function main() {
    if (SONGS_IN_PLAYLIST > GOAL) return;

    var timer = setInterval(async () => {
        const response = await fetch(playlistAddURL, {
            method: 'POST',
            headers: {
                'Content-Length': '0',
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${oauthToken}`
            }
        });

        if (response.ok) {
            iteration++;
            console.log(`Added ${trackURI} to playlist ${playlistID}. Now on iteration ${iteration}`);
        } else {
            // https://developer.spotify.com/documentation/web-api/guides/rate-limits/
            console.log(`Failed to add ${trackURI} to playlist ${playlistID}. Currently on iteration ${iteration}`);
        }
        
        if (iteration >= GOAL) clearInterval(timer);
    }, DELAY);
}

main();

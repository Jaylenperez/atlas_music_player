import { setupServer } from "msw/node";
import { http, HttpResponse } from "msw";

type PlaylistSong = {
    id: string,
    title: string,
    artist: string,
    genre: string,
    duration: number
};

type SongDetails = PlaylistSong & {
    cover: string,
    song: string,
};

const mockPlaylist: PlaylistSong[] = [
    {
        id: "001",
        title: "first song",
        artist: "grandma",
        genre: "country",
        duration: 300,
    },
    {
        id: "002",
        title: "second song",
        artist: "jaylen",
        genre: "pop",
        duration: 400
    },
];

const mockSongDetails: Record<string, SongDetails> = {
    "abc001": {
        id: "001",
        title: "first song",
        artist: "grandma",
        genre: "country",
        duration: 300,
        cover: "/placeholder.svg",
        song: "https://example.com/songs/first-song"
    },
    "abc002": {
        id: "002",
        title: "second song",
        artist: "jaylen",
        genre: "pop",
        duration: 400,
        cover: "/placeholder.svg",
        song: "https://example.com/songs/second-song"
    }
}

export const handlers = [
    http.get('*/api/v1/playlist', () => {
        return HttpResponse.json(mockPlaylist);
    }),

    http.get('*/api/v1/songs/:songId', ({ params }) => {
        const { songId } = params;
        const song = mockSongDetails[songId as string];

        if (!song) {
            return new HttpResponse(null, { status: 404 });
        }

        return HttpResponse.json(song);
    }),
];

export const server = setupServer(...handlers);
// Generated by https://quicktype.io
// https://developer.spotify.com/documentation/web-api/reference/get-an-album
// https://marketplace.visualstudio.com/items?itemName=quicktype.quicktype

export interface AlbumSearchResponse {
    albums: PagingObject<AlbumResponse>
}
export interface AlbumResponse {
    album_type:             string;
    total_tracks:           number;
    available_markets:      string[];
    external_urls:          ExternalUrls;
    href:                   string;
    id:                     string;
    images:                 Image[];
    name:                   string;
    type:                   string;
    tracks:                 PagingObject<Track>;
    release_date:           string;
    release_date_precision: string;
    restrictions:           Restrictions;
    uri:                    string;
    artists:                Artist[];
    copyrights:             Copyright[];
    external_ids:           ExternalIDS;
    genres:                 string[];
    label:                  string;
    popularity:             number;
}

export interface Album{
    id:                     string;
    images:                 Image[];
    name:                   string;
    type:                   string;
}

export interface Artist {
    external_urls: ExternalUrls;
    href:          string;
    id:            string;
    name?:         string;
    type:          string;
    uri:           string;
}

export interface ExternalUrls {
    spotify: string;
}

export interface Copyright {
    text: string;
    type: string;
}

export interface ExternalIDS {
    isrc: string;
    ean:  string;
    upc:  string;
}

export interface Image {
    url:    string;
    height: number;
    width:  number;
}

export interface Restrictions {
    reason: string;
}

export interface PagingObject<T> {
    href:     string;
    limit:    number;
    next:     string;
    offset:   number;
    previous: string;
    total:    number;
    items:    T[];
}

export interface Track {
    artists:           Artist[];
    available_markets: string[];
    disc_number:       number;
    duration_ms:       number;
    explicit:          boolean;
    external_urls:     ExternalUrls;
    href:              string;
    id:                string;
    is_playable:       boolean;
    linked_from:       Artist;
    restrictions:      Restrictions;
    name:              string;
    /**
     * URL to preview MP3
     */
    preview_url:       string;
    track_number:      number;
    type:              string;
    uri:               string;
    is_local:          boolean;
}

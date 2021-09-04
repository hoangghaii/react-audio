export type SongType = {
  annotation_count: number;
  api_path: string;
  apple_music_id?: string;
  apple_music_player_url?: string;
  description: {};
  embed_content: string;
  featured_video: boolean;
  full_title: string;
  header_image_thumbnail_url: string;
  lyrics_placeholder_reason: string | null;
  header_image_url: string;
  id: number;
  lyrics_owner_id: number;
  lyrics_state: string;
  path: string;
  recording_location: string;
  release_date: string;
  release_date_for_display: string;
  primary_artist: {
    api_path: string;
    header_image_url: string;
    id: number;
    image_url: string;
    is_meme_verified: boolean;
    is_verified: boolean;
    name: string;
    url: string;
  };
  pyongs_count: number;
  song_art_image_thumbnail_url: string;
  song_art_image_url: string;
  stats: {
    concurrents: number;
    hot: boolean;
    pageviews: number;
    unreviewed_annotations: number;
  };
  title: string;
  title_with_featured: string;
  url: string;
  current_user_metadata: {};
  album: {};
  custom_performances: {};
  description_annotation: {};
  featured_artists: [];
  media: MediaSongType[];
  producer_artists: [];
  song_relationships: [];
  verified_annotations_by: [];
  verified_contributors: [];
  verified_lyrics_by: [];
  writer_artists: [];
};

type MediaSongType = {
  attribution: string;
  provider: string;
  type: string;
  url: string;
};

export type SongListType = {
  annotation_count: number;
  api_path: string;
  full_title: string;
  header_image_thumbnail_url: string;
  header_image_url: string;
  id: number;
  lyrics_owner_id: number;
  lyrics_state: string;
  path: string;
  primary_artist: {
    api_path: string;
    header_image_url: string;
    id: number;
    image_url: string;
    is_meme_verified: boolean;
    is_verified: boolean;
    name: string;
    url: string;
  };
  pyongs_count: number;
  song_art_image_thumbnail_url: string;
  song_art_image_url: string;
  stats: {
    concurrents: number;
    hot: boolean;
    pageviews: number;
    unreviewed_annotations: number;
  };
  title: string;
  title_with_featured: string;
  url: string;
};

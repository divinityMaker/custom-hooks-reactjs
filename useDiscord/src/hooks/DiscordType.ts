export interface DiscordType {
    success: boolean;
    data:    Data;
}

export interface Data {
    spotify:                   null;
    listening_to_spotify:      boolean;
    kv:                        Kv;
    discord_user:              DiscordUser;
    discord_status:            string;
    activities:                any[];
    active_on_discord_web:     boolean;
    active_on_discord_mobile:  boolean;
    active_on_discord_desktop: boolean;
}

export interface DiscordUser {
    username:      string;
    public_flags:  number;
    id:            string;
    discriminator: string;
    bot:           boolean;
    avatar:        string;
}

export interface Kv {
}
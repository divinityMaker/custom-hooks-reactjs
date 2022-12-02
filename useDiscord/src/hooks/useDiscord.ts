import axios from 'axios'
import { useState } from 'react';
import { DiscordType } from './DiscordType';

const useDiscord = (discordID: string): DiscordType | Promise<void>[] => {
    const [state, setState] = useState(async () => {
        if (typeof window !== 'undefined') {
            const response = await axios.get(`https://api.lanyard.rest/v1/users/${discordID}`)
            setState(response.data)
        }
    })

    return [state]
}

export default useDiscord;
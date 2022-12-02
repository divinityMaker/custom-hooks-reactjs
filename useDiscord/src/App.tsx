import { DiscordType } from "./hooks/DiscordType"
import useDiscord from "./hooks/useDiscord"

const App: React.FC = () => {

  const discord = useDiscord('273427750654705664')

  console.log(discord)
  return (
    <h1>{console.log(discord.data.discord_user.username)}</h1>
  )
}

export default App

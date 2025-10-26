
const PREFIX = 'RSS_'

const parseEnv = (prefix) => {
    const args = Object.entries(process.env)
          .filter(([key, _]) => key.startsWith(prefix))
          .map(([key, value]) => `${key}=${value}`)
          .join('; ')

    console.log(args)
}

parseEnv(PREFIX)

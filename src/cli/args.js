const parseArgs = () => {
    let args = []
    for (let i = 2; i < process.argv.length; i += 2) {
        const propName = process.argv[i].substring(2)
        const value = process.argv[i + 1]
        
        args.push(`${propName} is ${value}`)
    }
    console.log(args.join(', '))
}

parseArgs()
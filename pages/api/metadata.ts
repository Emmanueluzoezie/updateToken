import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    name: string,
    symbol: string,
    description: string,
    image: string,
    // Include any other properties as needed
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    res.status(200).json({
        name: "Marine",
        symbol: "Marn",
        description: "A brief description of the token.",
        image: "https://example.com/path/to/token-image.png",
    })
}
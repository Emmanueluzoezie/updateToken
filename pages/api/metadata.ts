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
        description: "A brief description of the marine token.",
        image: "https://i.postimg.cc/rpMD0R5p/marine.jpg",
    })
}
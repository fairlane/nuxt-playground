import { RuntimeConfiguration } from "~/types/types"

const getRuntimeConfig = (): RuntimeConfiguration => {
    return {
        apiUrl: process.env.HAPI_API_URL || "http://localhost:3001"
    }    
}

export {getRuntimeConfig};
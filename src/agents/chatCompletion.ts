import axios from 'axios';

class OllamaAPI {
    private apiKey: string;
    private baseURL: string;

    constructor(apiKey: string) {
        this.apiKey = apiKey;
        this.baseURL = 'https://api.ollama.com/v1';
    }

    async complete(prompt: string): Promise<string> {
        try {
            const response = await axios.post(`${this.baseURL}/api/generate`, {
                model: 'llama3.2', // Assuming a default model, you might want to make this configurable
                prompt,
                max_tokens: 150
            }, {
                headers: {
                    'Authorization': `Bearer ${this.apiKey}`,
                    'Content-Type': 'application/json'
                }
            });
            return response.data.response.trim(); // Adjusted the response key based on the API documentation
        } catch (error) {
            console.error('Error calling Ollama API:', error);
            throw error;
        }
    }
}

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
            const response = await axios.post(`${this.baseURL}/completions`, {
                prompt,
                max_tokens: 150
            }, {
                headers: {
                    'Authorization': `Bearer ${this.apiKey}`,
                    'Content-Type': 'application/json'
                }
            });
            return response.data.choices[0].text.trim();
        } catch (error) {
            console.error('Error calling Ollama API:', error);
            throw error;
        }
    }
}

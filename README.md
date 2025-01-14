# YouTube Video AI Summarizer

This project is a YouTube Video Summarizer that uses Nhost for authentication, n8n for processing summaries, and a React.js frontend. The application fetches captions using Apify and generates summaries using OpenRouter.

## Deployed Application

You can access the deployed application at [YouTube Video AI Summarizer](https://youtube-transcript-summary.vercel.app/).

## Features

- **Authentication**: Secure user authentication using Nhost.
- **Caption Fetching**: Utilizes Apify to fetch YouTube captions.
- **Summary Generation**: Processes fetched captions through OpenRouter to generate concise summaries.
- **Frontend**: Built with React.js for a responsive and interactive user experience.

## Technologies Used

- **Nhost**: For user authentication.
- **n8n**: Workflow automation tool for processing summaries.
- **Apify**: To fetch YouTube captions.
- **OpenRouter**: For generating summaries from captions.
- **React.js**: Frontend framework.

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/YouTubeTranscriptSummarizer.git
    cd YouTubeTranscriptSummarizer
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Configure Nhost:
    - Follow the [Nhost documentation](https://docs.nhost.io/) to set up your Nhost project and obtain the necessary credentials.
    - Update the Nhost configuration in your project.

4. Set up n8n:
    - Follow the [n8n documentation](https://docs.n8n.io/) to set up your n8n instance.
    - Create a workflow to fetch captions using Apify and generate summaries using OpenRouter.

## Usage

1. Start the development server:
    ```bash
    npm start
    ```

2. Open your browser and navigate to `http://localhost:3000`.

3. Log in using your Nhost credentials.

4. Enter the YouTube video URL to fetch captions and generate summaries.

## n8n Workflow

Below is a screenshot of the n8n workflow used in this project. You can paste your own screenshot here:

![n8n Workflow](path/to/your/screenshot.png)

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [Nhost](https://nhost.io/)
- [n8n](https://n8n.io/)
- [Apify](https://apify.com/)
- [OpenRouter](https://openrouter.io/)
- [React.js](https://reactjs.org/)

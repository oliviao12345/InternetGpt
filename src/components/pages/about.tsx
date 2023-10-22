import styled from "@emotion/styled";
import { Markdown } from "../markdown";
import { Page } from "../page";

const title = "Learn about InternetGPT";

const content = `
# About InternetGPT

InternetGPT is an open-source chatbot application that enhances the ChatGPT experience with a more user-friendly interface and additional features for customization. InternetGPT is based on ChatGPT, an AI assistant created by OpenAI that uses natural language processing to generate human-like responses to various questions and prompts. Trained on an extensive dataset of internet text, ChatGPT can tap into a wealth of knowledge and information to provide informative and engaging conversations. InternetGPT aims to provide a better experience for users interacting with ChatGPT, and both ChatGPT and InternetGPT are continuously evolving and improving. Don't hesitate to ask InternetGPT anything! 

## Features

- 🚀 **Fast** response times.
- 🔎 **Search** through your past chat conversations.
- 📄 View and customize the System Prompt - the **secret prompt** the system shows the AI before your messages.
- 🌡 Adjust the **creativity and randomness** of responses by setting the Temperature setting. Higher temperature means more creativity.
- 💬 Give ChatGPT AI a **realistic human voice** by connecting your ElevenLabs text-to-speech account.
- ✉ **Share** your favorite chat sessions online using public share URLs.
- 📋 Easily **copy-and-paste** ChatGPT messages.
- 🖼 **Full markdown support** including code, tables, and math.
- 🫰 Pay for only what you use with the ChatGPT API.

## Bring your own API keys

### OpenAI

To get started with InternetGPT, you will need to add your OpenAI API key on the settings screen. Click "Connect your OpenAI account to get started" on the home page to begin. Once you have added your API key, you can start chatting with ChatGPT.

Your API key is stored only on your device and is never transmitted to anyone except OpenAI. Please note that OpenAI API key usage is billed at a pay-as-you-go rate, separate from your ChatGPT subscription.

### ElevenLabs

To use the realistic AI text-to-speech feature, you will need to add your ElevenLabs API key by clicking "Play" next to any message.

Your API key is stored only on your device and never transmitted to anyone except ElevenLabs.

## Roadmap

- Edit messages (coming soon)
- Regenerate messages (coming soon)
- [Suggest feature ideas on the Discord](https://discord.gg/mS5QvKykvv)
`;

const Container = styled.div`
    flex-grow: 1;
    overflow-y: auto;
    padding-top: 2rem;
    padding-bottom: 3rem;

    .inner {
        max-width: 50rem;
        margin-left: auto;
        margin-right: auto;
        font-weight: "Work Sans", sans-serif;

        * {
            color: white !important;
        }

        h1, h2 {
            border-bottom: thin solid rgba(255, 255, 255, 0.2);
            padding-bottom: 1rem;
            margin-bottom: 1rem;
        }
    }
`;

export default function AboutPage(props: any) {
    return <Page id={'about'} headerProps={{ title }}>
        <Container>
            <Markdown content={content} className='inner' />
        </Container>
    </Page>;
}
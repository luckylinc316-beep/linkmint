# Summit Peak AI

A React-based code editor with AI assistance, Firebase authentication, and Stripe subscription integration.

## Features

- **Code Editor**: Monaco editor for writing HTML/CSS/JavaScript with live preview
- **AI Code Suggestions**: OpenAI integration for code improvements and suggestions
- **User Authentication**: Firebase authentication for sign up and login
- **Project Persistence**: Save and load projects with Firestore
- **Premium Subscription**: Stripe integration for premium features

## Tech Stack

- **Frontend**: React 18, Monaco Editor
- **Backend**: Node.js API routes (Vercel)
- **Database**: Firebase/Firestore
- **Payment**: Stripe
- **AI**: OpenAI GPT-4

## Getting Started

### Prerequisites

- Node.js and npm
- Firebase project setup
- OpenAI API key
- Stripe account with API keys

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env.local` file with your API keys (see `.env.local` template)

4. Start the development server:
   ```bash
   npm start
   ```

### Environment Variables

Copy the `.env.local` template and fill in your credentials:

- Firebase configuration from your Firebase project
- OpenAI API key from OpenAI
- Stripe publishable and secret keys

## Usage

1. **Sign Up/Login**: Create an account with email and password
2. **Edit Code**: Write HTML/CSS/JavaScript in the editor
3. **Live Preview**: See changes in real-time on the right panel
4. **Save Projects**: Click "Save Project" to store your code in Firestore
5. **AI Suggestions**: Use "AI Suggest Code" to get AI-powered improvements
6. **Subscribe**: Upgrade to premium with Stripe

## Project Structure

```
├── src/
│   ├── App.js              # Main application component
│   ├── Auth.js             # Authentication component
│   ├── CodeEditor.js       # Code editor component
│   ├── SubscribeButton.js  # Stripe subscription button
│   └── firebase.js         # Firebase configuration
├── api/
│   └── create-checkout-session.js  # Stripe checkout handler
├── package.json            # Dependencies
└── README.md              # This file
```

## License

MIT

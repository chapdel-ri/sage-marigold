# Backend 

## Skeleton Structure
```
/backend
├── /src                      # All source code lives here
│   ├── /config              # Database connection & server settings
│   ├── /controllers         # Logic for each feature
│   │   ├── authController.js      # Login/Signup logic
│   │   ├── itemController.js      # Donation listing logic
│   │   ├── requestController.js   # Application form logic
│   │   └── searchController.js    # Filtering & keyword logic
│   ├── /models              # Database schemas & data definitions
│   │   ├── User.js          # User data rules
│   │   ├── Item.js          # Donation item data rules
│   │   └── Request.js       # Application form data rules
│   ├── /routes              # API endpoint definitions (URL paths)
│   │   ├── authRoutes.js    # /api/auth endpoints
│   │   ├── itemRoutes.js    # /api/items endpoints
│   │   ├── requestRoutes.js # /api/requests endpoints
│   │   └── searchRoutes.js  # /api/search endpoints
│   ├── /middleware          # Security guards & request interceptors
│   ├── /utils               # Global helper functions & reusable tools
│   ├── server.js            # Express app initialization & middleware setup
│   └── index.js             # Entry point: Connects Database & starts server
├── /uploads                 # Storage for uploaded donation images
│   └── .gitkeep             # Ensures the empty folder is tracked by Git
├── .env                     # Private secrets & API keys
├── .env.example             # Template for .env file
├── .gitignore               # List of files to ignore (node_modules, .env)
├── package.json             # Dependencies, metadata, and run scripts
├── package-lock.json        # Exact version history of dependencies
└── README.md                # Documentation: How to set up and run the backend
```

## Available Commands
### Running the server
You can run the server in two ways:
- Production mode: `npm start`
- Development Mode (Auto-restart on save): `npm run dev`

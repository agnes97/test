/// <reference types="react-scripts" />

declare namespace NodeJS {
	interface ProcessEnv {
		// ENVIRONMENT TYPES
		NODE_ENV: 'development' | 'production'
		REACT_APP_OMDB_API_KEY: string
	}
}

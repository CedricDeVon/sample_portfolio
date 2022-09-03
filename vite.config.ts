import { defineConfig } from "vitest/config"

export default defineConfig({
    mode: "test",
    test: {
        includeSource: ["sources/**/*.{js,ts}"],
        coverage: {
            reporter: ["json", "text", "html"]
        }
    }
})

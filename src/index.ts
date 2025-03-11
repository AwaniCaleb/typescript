// Main entry point for my TypeScript learning project

console.log("========================================");
console.log("  TypeScript Learning Project");
console.log("========================================\n");

// Import and run examples from different modules (examples run automatically on import)
const runExamples = async () => {
    // Basic examples
    console.log("\n🔹 BASIC TYPESCRIPT EXAMPLES 🔹");
    await import('./basics/index').then(module => {});

    // Intermediate examples
    console.log("\n🔹 INTERMEDIATE TYPESCRIPT EXAMPLES 🔹");
    await import('./intermediate/index').then(module => {});

    // Advanced examples
    console.log("\n🔹 ADVANCED TYPESCRIPT EXAMPLES 🔹");
    await import('./advanced/index').then(module => {});

    console.log("\n========================================");
    console.log("All examples completed successfully!");
    console.log("========================================");
};

// Run all examples
runExamples().catch(error => {
    console.error("An error occurred:", error);
});
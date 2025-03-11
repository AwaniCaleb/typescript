// Utility functions for logging

enum LogLevel {
    DEBUG = 0,
    INFO = 1,
    WARN = 2,
    ERROR = 3
}

interface LogOptions {
    timestamp?: boolean;
    level?: LogLevel;
    label?: string;
}

export class Logger {
    private level: LogLevel;
    private showTimestamp: boolean;
    private label: string;

    constructor(options: LogOptions = {}) {
        this.level = options.level ?? LogLevel.INFO;
        this.showTimestamp = options.timestamp ?? true;
        this.label = options.label ?? '';
    }

    private formatMessage(level: string, message: string): string {
        const parts: string[] = [];

        if (this.showTimestamp) {
            parts.push(`[${new Date().toISOString()}]`);
        }

        parts.push(`[${level.toUpperCase()}]`);

        if (this.label) {
            parts.push(`[${this.label}]`);
        }

        parts.push(message);

        return parts.join(' ');
    }

    debug(message: string): void {
        if (this.level <= LogLevel.DEBUG) {
            console.debug(this.formatMessage('debug', message));
        }
    }

    info(message: string): void {
        if (this.level <= LogLevel.INFO) {
            console.info(this.formatMessage('info', message));
        }
    }

    warn(message: string): void {
        if (this.level <= LogLevel.WARN) {
            console.warn(this.formatMessage('warn', message));
        }
    }

    error(message: string, error?: Error): void {
        if (this.level <= LogLevel.ERROR) {
            console.error(this.formatMessage('error', message));
            if (error) {
                console.error(error);
            }
        }
    }

    setLevel(level: LogLevel): void {
        this.level = level;
    }

    setLabel(label: string): void {
        this.label = label;
    }

    setTimestamp(show: boolean): void {
        this.showTimestamp = show;
    }
}

// Export LogLevel enum and create a default logger
export { LogLevel };
export const logger = new Logger();
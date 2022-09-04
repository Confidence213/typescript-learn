class Messenger {
    environment: string;
    port: number;

    constructor(environment: string, port: number) {
        this.environment = environment;
        this.port = port;
    }

    printMessage(): string {
        return `Server is running on port ${this.port} in ${this.environment} mode`;
    }
}

export { Messenger };

// namespace Messengerspace {
//     class Messenger {
//         environment: string;
//         port: number;
    
//         constructor(environment: string, port: number) {
//             this.environment = environment;
//             this.port = port;
//         }
    
//         printMessage(): string {
//             return `Server is running on port ${this.port} in ${this.environment} mode`;
//         }
//     }
// };

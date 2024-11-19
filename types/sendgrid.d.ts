declare module '@sendgrid/mail' {
  interface MailDataRequired {
    to: string;
    from: string;
    subject: string;
    text?: string;
    html?: string;
  }

  class MailService {
    setApiKey(apiKey: string): void;
    send(data: MailDataRequired): Promise<[{
      statusCode: number;
      headers: any;
      body: any;
    }]>;
  }

  const mail: MailService;
  export = mail;
} 